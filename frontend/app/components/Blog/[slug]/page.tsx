"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../Header/page';
import Footer from '../../Footer/page';
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaShareAlt,
  FaBookmark,
  FaHeart,
  FaEye,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
  views: number;
  likes: number;
  published: boolean;
}

const BlogPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]); // To store all posts for filtering

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/blog";

  useEffect(() => {
    if (slug) {
      fetchPost();
      fetchAllPosts();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/post/${slug}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      
      if (data.success) {
        setPost(data.post);
      } else {
        router.push('/components/Blog');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      router.push('/components/Blog');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const data = await response.json();
      
      if (data.success) {
        setAllPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching all posts:', error);
    }
  };

  useEffect(() => {
    if (post && allPosts.length > 0) {
      const related = allPosts
        .filter(p => p.category === post.category && p.slug !== post.slug && p.published)
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [post, allPosts]);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "/api/placeholder/1200/630";
    
    if (imagePath.startsWith('http')) return imagePath;
    
    const baseUrl = API_URL.replace('/api/blog', '');
    return `${baseUrl}/uploads/images/${imagePath}`;
  };

  const getAuthorImageUrl = (imagePath: string) => {
    if (!imagePath || imagePath === 'default-author.jpg') {
      return "/api/placeholder/100/100";
    }
    
    if (imagePath.startsWith('http')) return imagePath;
    
    const baseUrl = API_URL.replace('/api/blog', '');
    return `${baseUrl}/uploads/images/${imagePath}`;
  };

  const handleLike = () => {
    if (!post || liked) return;
    
    setLiked(true);
    setPost({
      ...post,
      likes: post.likes + 1,
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    const text = post?.excerpt || '';
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded-xl mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/components/Blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get category counts for sidebar
  const getCategoryCount = (category: string) => {
    return allPosts.filter(p => p.category === category && p.published).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="/components/Blog"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
              
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-base md:text-lg font-bold overflow-hidden">
                  <img 
                    src={getAuthorImageUrl(post.authorImage)} 
                    alt={post.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white">${post.author.charAt(0)}</span>`;
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-xs md:text-sm opacity-80">Author</div>
                </div>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/30"></div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                <span>{post.date}</span>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/30"></div>

              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                <span>{post.readTime}</span>
              </div>

              <div className="hidden md:block h-8 w-px bg-white/30"></div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FaEye className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                  <span>{post.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="w-4 h-4 md:w-5 md:h-5 opacity-80" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Article Content */}
          <article className="lg:col-span-2">
            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-xl md:shadow-2xl">
              {post.image ? (
                <img
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <FaTag class="w-16 h-16 md:w-24 md:h-24 text-white/50" />
                        </div>
                      `;
                    }
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FaTag className="w-16 h-16 md:w-24 md:h-24 text-white/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-xs md:text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Excerpt */}
            <div className="mb-8 md:mb-12">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed border-l-3 md:border-l-4 border-blue-500 pl-4 md:pl-6 py-2 italic">
                {post.excerpt}
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-sm md:prose-lg max-w-none mb-8 md:mb-12">
              <div className="text-gray-700 leading-relaxed space-y-4 md:space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full transition-all flex-1 sm:flex-none ${
                    liked
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaHeart className={`w-4 h-4 md:w-5 md:h-5 ${liked ? 'animate-pulse' : ''}`} />
                  <span className="text-sm md:text-base">{liked ? 'Liked' : 'Like'} ({post.likes})</span>
                </button>

                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full transition-all flex-1 sm:flex-none ${
                    bookmarked
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FaBookmark className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <span className="text-gray-600 font-medium text-sm md:text-base text-center sm:text-left">Share:</span>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-9 h-9 md:w-10 md:h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-9 h-9 md:w-10 md:h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="w-9 h-9 md:w-10 md:h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 md:space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xl md:text-2xl font-bold text-white overflow-hidden">
                  <img 
                    src={getAuthorImageUrl(post.authorImage)} 
                    alt={post.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white">${post.author.charAt(0)}</span>`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{post.author}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                  Expert in {post.category} with years of experience in the construction industry.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-xs md:text-sm text-gray-500">{post.featured ? 'Featured Author' : 'Industry Expert'}</span>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                  <FaTag className="text-blue-600" /> Related Articles
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      href={`/components/Blog/${relatedPost.slug}`}
                      key={relatedPost.id}
                      className="group block"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg md:rounded-xl flex items-center justify-center">
                          <FaTag className="text-blue-600 w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm md:text-base">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mt-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-emerald-100 shadow-lg">
              <div className="text-emerald-600 text-2xl md:text-3xl mb-2 md:mb-3">💌</div>
              <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">Never Miss an Update</h3>
              <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4">
                Subscribe to our newsletter for the latest insights in construction & infrastructure.
              </p>
              <div className="space-y-2 md:space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 md:px-4 md:py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                />
                <button className="w-full px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Popular Categories</h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  'Road Construction',
                  'Sustainable Building',
                  'Technology',
                  'Project Management',
                  'Material Trading',
                ].map((category) => (
                  <Link
                    href={`/components/Blog?category=${encodeURIComponent(category)}`}
                    key={category}
                    className="flex items-center justify-between p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group"
                  >
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm md:text-base">
                      {category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {getCategoryCount(category)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPostPage;