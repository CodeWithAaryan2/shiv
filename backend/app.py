from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
import json
from werkzeug.utils import secure_filename
import secrets
import gunicorn

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:3000", "https://shiventerprisees.com"])

DATABASE_URL = os.environ.get("DATABASE_URL")

if DATABASE_URL:
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
else:
    # Local development fallback
    DATABASE_URL = "sqlite:///blog.db"

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads/images'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
app.config['SECRET_KEY'] = 'shiv-enterprises-blog-secret-key-2024'
app.config['ADMIN_USERNAME'] = 'admin'
app.config['ADMIN_PASSWORD'] = 'ShivAdmin@2024'  # Change this in production

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

db = SQLAlchemy(app)

# Models
class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    slug = db.Column(db.String(200), unique=True, nullable=False)
    excerpt = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False, default='Shiv Enterprises')
    author_image = db.Column(db.String(200), default='default-author.jpg')
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    read_time = db.Column(db.String(50), default='5 min read')
    image = db.Column(db.String(200))
    featured = db.Column(db.Boolean, default=False)
    tags = db.Column(db.Text, default='[]')  # JSON string of tags
    views = db.Column(db.Integer, default=0)
    likes = db.Column(db.Integer, default=0)
    published = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'slug': self.slug,
            'excerpt': self.excerpt,
            'content': self.content,
            'category': self.category,
            'author': self.author,
            'authorImage': self.author_image,
            'date': self.date.strftime('%Y-%m-%d'),
            'readTime': self.read_time,
            'image': self.image,
            'featured': self.featured,
            'tags': json.loads(self.tags) if self.tags else [],
            'views': self.views,
            'likes': self.likes,
            'published': self.published
        }

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def verify_admin_token():
    """Verify admin token from Authorization header"""
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return False
    
    # Extract token from "Bearer <token>" format
    parts = auth_header.split()
    if len(parts) != 2 or parts[0].lower() != 'bearer':
        return False
    
    token = parts[1]
    # For simplicity, we're using the SECRET_KEY as the token
    return token == app.config['SECRET_KEY']

# Create uploads directory
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Routes
@app.route('/')
def home():
    return jsonify({'message': 'Shiv Enterprises Blog API', 'status': 'running'})

@app.route('/api/blog/posts', methods=['GET'])
def get_posts():
    """Get all published posts for public view"""
    try:
        posts = BlogPost.query.filter_by(published=True).order_by(BlogPost.date.desc()).all()
        return jsonify({
            'success': True,
            'posts': [post.to_dict() for post in posts],
            'count': len(posts)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/post/<slug>', methods=['GET'])
def get_post(slug):
    """Get single post by slug"""
    try:
        post = BlogPost.query.filter_by(slug=slug, published=True).first()
        if post:
            # Increment views
            post.views += 1
            db.session.commit()
            return jsonify({
                'success': True,
                'post': post.to_dict()
            })
        return jsonify({'success': False, 'error': 'Post not found'}), 404
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/admin/posts', methods=['GET'])
def get_admin_posts():
    """Get all posts for admin panel (including unpublished)"""
    try:
        if not verify_admin_token():
            return jsonify({'success': False, 'error': 'Unauthorized'}), 401
        
        posts = BlogPost.query.order_by(BlogPost.date.desc()).all()
        return jsonify({
            'success': True,
            'posts': [post.to_dict() for post in posts],
            'count': len(posts)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/admin/create', methods=['POST'])
def create_post():
    """Create new blog post"""
    try:
        if not verify_admin_token():
            return jsonify({'success': False, 'error': 'Unauthorized'}), 401
        
        data = request.form.to_dict()
        
        # Handle image upload
        image_filename = None
        if 'image' in request.files:
            file = request.files['image']
            if file and file.filename != '' and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                # Create unique filename
                unique_filename = f"{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}_{secrets.token_hex(8)}_{filename}"
                image_filename = unique_filename
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], image_filename))
        
        # Parse tags
        tags_str = data.get('tags', '')
        if tags_str:
            tags = [tag.strip() for tag in tags_str.split(',') if tag.strip()]
        else:
            tags = []
        
        # Create new post
        new_post = BlogPost(
            title=data.get('title'),
            slug=data.get('slug'),
            excerpt=data.get('excerpt'),
            content=data.get('content'),
            category=data.get('category'),
            author=data.get('author', 'Shiv Enterprises'),
            author_image=data.get('authorImage', 'default-author.jpg'),
            read_time=data.get('readTime', '5 min read'),
            image=image_filename,
            featured=data.get('featured', 'false').lower() == 'true',
            tags=json.dumps(tags),
            published=data.get('published', 'true').lower() == 'true'
        )
        
        db.session.add(new_post)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Post created successfully',
            'post': new_post.to_dict()
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/admin/post/<int:post_id>', methods=['PUT', 'DELETE'])
def manage_post(post_id):
    """Update or delete blog post"""
    try:
        if not verify_admin_token():
            return jsonify({'success': False, 'error': 'Unauthorized'}), 401
        
        post = BlogPost.query.get_or_404(post_id)
        
        if request.method == 'PUT':
            data = request.form.to_dict()
            
            # Update fields
            if 'title' in data:
                post.title = data['title']
            if 'slug' in data:
                post.slug = data['slug']
            if 'excerpt' in data:
                post.excerpt = data['excerpt']
            if 'content' in data:
                post.content = data['content']
            if 'category' in data:
                post.category = data['category']
            if 'author' in data:
                post.author = data['author']
            if 'readTime' in data:
                post.read_time = data['readTime']
            if 'featured' in data:
                post.featured = data['featured'].lower() == 'true'
            if 'published' in data:
                post.published = data['published'].lower() == 'true'
            if 'tags' in data:
                tags_str = data['tags']
                if tags_str:
                    tags = [tag.strip() for tag in tags_str.split(',') if tag.strip()]
                    post.tags = json.dumps(tags)
            
            # Handle image update
            if 'image' in request.files:
                file = request.files['image']
                if file and file.filename != '' and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    image_filename = f"{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}_{secrets.token_hex(8)}_{filename}"
                    file.save(os.path.join(app.config['UPLOAD_FOLDER'], image_filename))
                    
                    # Delete old image if exists
                    if post.image and os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], post.image)):
                        os.remove(os.path.join(app.config['UPLOAD_FOLDER'], post.image))
                    
                    post.image = image_filename
            
            db.session.commit()
            return jsonify({
                'success': True,
                'message': 'Post updated successfully',
                'post': post.to_dict()
            })
        
        elif request.method == 'DELETE':
            # Delete image if exists
            if post.image and os.path.exists(os.path.join(app.config['UPLOAD_FOLDER'], post.image)):
                os.remove(os.path.join(app.config['UPLOAD_FOLDER'], post.image))
            
            db.session.delete(post)
            db.session.commit()
            return jsonify({
                'success': True,
                'message': 'Post deleted successfully'
            })
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/admin/login', methods=['POST'])
def admin_login():
    """Admin login endpoint"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
        
        username = data.get('username')
        password = data.get('password')
        
        # Simple authentication
        if username == app.config['ADMIN_USERNAME'] and password == app.config['ADMIN_PASSWORD']:
            return jsonify({
                'success': True,
                'token': app.config['SECRET_KEY'],
                'message': 'Login successful'
            })
        
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/admin/check', methods=['GET'])
def check_admin():
    """Check if admin is authenticated"""
    try:
        if verify_admin_token():
            return jsonify({'success': True, 'authenticated': True})
        return jsonify({'success': True, 'authenticated': False})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/blog/categories', methods=['GET'])
def get_categories():
    """Get all categories"""
    try:
        categories = db.session.query(BlogPost.category).distinct().all()
        categories_list = [cat[0] for cat in categories if cat[0]]
        return jsonify({
            'success': True,
            'categories': categories_list
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/uploads/images/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/blog/stats', methods=['GET'])
def get_stats():
    """Get blog statistics"""
    try:
        total_posts = BlogPost.query.filter_by(published=True).count()
        featured_posts = BlogPost.query.filter_by(published=True, featured=True).count()
        total_views = db.session.query(db.func.sum(BlogPost.views)).filter_by(published=True).scalar() or 0
        total_likes = db.session.query(db.func.sum(BlogPost.likes)).filter_by(published=True).scalar() or 0
        
        return jsonify({
            'success': True,
            'stats': {
                'totalPosts': total_posts,
                'featuredPosts': featured_posts,
                'totalViews': total_views,
                'totalLikes': total_likes
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

# Create database tables and add sample data
with app.app_context():
    db.create_all()
    print("✅ Database tables created successfully!")
    
    # Add sample posts if database is empty
    if BlogPost.query.count() == 0:
        sample_posts = [
            BlogPost(
                title="The Future of Road Construction in India",
                slug="future-of-road-construction-india",
                excerpt="Exploring innovative technologies and sustainable practices transforming India's infrastructure development",
                content="Full content about road construction...",
                category="Road Construction",
                author="Rajesh Kumar",
                date=datetime(2024, 3, 15),
                read_time="5 min read",
                featured=True,
                tags='["Infrastructure", "Innovation", "Technology"]',
                views=1245,
                likes=89,
                published=True
            ),
            BlogPost(
                title="Sustainable Building Materials: What's Next?",
                slug="sustainable-building-materials",
                excerpt="A comprehensive guide to eco-friendly construction materials and their impact on modern infrastructure",
                content="Full content about sustainable materials...",
                category="Sustainable Building",
                author="Priya Sharma",
                date=datetime(2024, 3, 10),
                read_time="4 min read",
                featured=True,
                tags='["Sustainability", "Green Building", "Eco-friendly"]',
                views=987,
                likes=76,
                published=True
            )
        ]
        
        for post in sample_posts:
            db.session.add(post)
        
        db.session.commit()
        print("✅ Sample posts added successfully!")

if __name__ == '__main__':
    print("🚀 Starting Shiv Enterprises Blog API...")
    print("📝 API URL: http://localhost:5000")
    print("🔐 Admin Login: admin / ShivAdmin@2024")
    app.run(debug=True, port=5000, host='0.0.0.0')