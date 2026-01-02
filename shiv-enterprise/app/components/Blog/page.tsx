"use client";

import React, { useEffect, useState } from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaBookOpen,
  FaChartLine,
  FaTools,
  FaLeaf,
  FaBuilding,
  FaEdit,
  FaImage,
  FaEye,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";

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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    totalPosts: 0,
    featuredPosts: 0,
    totalViews: 0,
    totalLikes: 0
  });

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/blog";

  const blogCategories = [
    "All",
    "Road Construction",
    "Material Trading",
    "Sustainable Building",
    "Project Management",
    "Industry News",
    "Technology",
    "Safety Standards",
    "Infrastructure",
    "Innovation",
  ];

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch posts
        const postsResponse = await fetch(`${API_URL}/posts`);
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const postsData = await postsResponse.json();
        
        if (postsData.success) {
          setPosts(postsData.posts || []);
        }

        // Fetch stats
        const statsResponse = await fetch(`${API_URL}/stats`);
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          if (statsData.success) {
            setStats(statsData.stats);
          }
        }

        // Check admin status
        const token = localStorage.getItem('admin_token');
        if (token) {
          const adminCheck = await fetch(`${API_URL}/admin/check`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (adminCheck.ok) {
            const adminData = await adminCheck.json();
            setIsAdmin(adminData.authenticated || false);
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  /* ================= HELPER FUNCTIONS ================= */
  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "/api/placeholder/800/400";
    
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) return imagePath;
    
    // If it's from Flask backend
    const baseUrl = API_URL.replace('/api/blog', '');
    return `${baseUrl}/uploads/images/${imagePath}`;
  };

  const getAuthorImageUrl = (imagePath: string) => {
    if (!imagePath || imagePath === 'default-author.jpg') {
      return "/api/placeholder/40/40";
    }
    
    // If it's from Flask backend
    const baseUrl = API_URL.replace('/api/blog', '');
    return `${baseUrl}/uploads/images/${imagePath}`;
  };

  /* ================= FILTER LOGIC ================= */
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter((p) => p.featured);
  const recentPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  /* ================= ADMIN FUNCTIONS ================= */
  const handleAdminLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
    window.location.reload();
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 text-gray-900">
      <Header />

      {/* Admin Access Buttons */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        {!isAdmin ? (
          <Link
            href="/components/Blog/admin/login"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaEdit className="w-4 h-4" />
            <span className="text-sm font-medium">Admin Login</span>
          </Link>
        ) : (
          <>
            <Link
              href="/components/Blog/admin"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaEdit className="w-4 h-4" />
              <span className="text-sm font-medium">Admin Panel</span>
            </Link>
            <button
              onClick={handleAdminLogout}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* ================= HERO ================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0%)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              KNOWLEDGE HUB
            </span>
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Shiv Enterprises{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Insights
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert perspectives, industry trends, and innovative solutions in construction & infrastructure
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-lg"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <span className="text-sm text-gray-500">Filters</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{stats.totalPosts}</div>
              <div className="text-sm text-gray-600 mt-1">Total Articles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-100 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600">{stats.featuredPosts}</div>
              <div className="text-sm text-gray-600 mt-1">Featured</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-purple-100 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">{allTags.length}</div>
              <div className="text-sm text-gray-600 mt-1">Topics</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-100 shadow-lg">
              <div className="text-3xl font-bold text-orange-600">
                {stats.totalViews.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mt-1">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-emerald-700">FEATURED ARTICLES</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Editor's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Picks</span>
              </h2>
              
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deep dives into the most important topics in construction and infrastructure
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link href={`/components/Blog/${post.slug}`} key={post.id}>
                  <article className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20"></div>
                      {post.image ? (
                        <img 
                          src={getImageUrl(post.image)} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <FaImage className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-4xl" />
                      )}
                    </div>
                    
                    {/* Gradient Corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${index === 0 ? 'from-blue-600 to-cyan-600' : index === 1 ? 'from-emerald-600 to-green-600' : 'from-purple-600 to-pink-600'} rounded-bl-3xl`}></div>
                    
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      index === 0 ? 'bg-blue-100 text-blue-700' : 
                      index === 1 ? 'bg-emerald-100 text-emerald-700' : 
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold mt-4 mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
                          <img 
                            src={getAuthorImageUrl(post.authorImage)} 
                            alt={post.author}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-white text-xs font-bold">${post.author.charAt(0)}</span>`;
                              }
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaEye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FaHeart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>{post.readTime}</span>
                          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${index === 0 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : index === 1 ? 'bg-gradient-to-r from-emerald-600 to-green-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= MAIN BLOG ================= */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
          {/* POSTS */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <FaFilter className="text-white w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Latest <span className="text-blue-600">Articles</span>
              </h3>
              <div className="text-sm text-gray-600">
                Showing <span className="font-bold text-blue-600">{filteredPosts.length}</span> of {posts.length} articles
              </div>
            </div>

            {/* Posts Grid */}
            {loading ? (
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
                    <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <FaSearch className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No articles found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link href={`/components/Blog/${post.slug}`} key={post.id}>
                    <article className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20"></div>
                        {post.image ? (
                          <img 
                            src={getImageUrl(post.image)} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <FaImage className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-3xl" />
                        )}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === 'Road Construction' ? 'bg-blue-100 text-blue-700' :
                          post.category === 'Sustainable Building' ? 'bg-emerald-100 text-emerald-700' :
                          post.category === 'Material Trading' ? 'bg-orange-100 text-orange-700' :
                          post.category === 'Technology' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {post.category}
                        </span>
                        <div className="text-xs text-gray-500">{post.readTime}</div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Author and Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center overflow-hidden ${
                            index % 3 === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                            index % 3 === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                            'bg-gradient-to-r from-purple-500 to-pink-500'
                          }`}>
                            <img 
                              src={getAuthorImageUrl(post.authorImage)} 
                              alt={post.author}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<span class="text-white text-xs font-bold">${post.author.charAt(0)}</span>`;
                                }
                              }}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.author}</div>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <FaCalendarAlt className="w-3 h-3" />
                                {post.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <FaEye className="w-3 h-3" />
                                {post.views}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                          <FaArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Hover Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                        index % 3 === 0 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        index % 3 === 1 ? 'bg-gradient-to-r from-emerald-600 to-green-600' :
                        'bg-gradient-to-r from-purple-600 to-pink-600'
                      } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            {/* About Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 shadow-lg">
              <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                <FaBuilding className="text-blue-600" /> About Our Blog
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Welcome to the Shiv Enterprises knowledge hub. We share insights, innovations, and industry expertise from India's construction leaders.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                <span>Learn More About Us</span>
                <FaArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                <FaBookOpen className="text-emerald-600" /> Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((p, idx) => (
                  <Link href={`/components/Blog/${p.slug}`} key={p.id}>
                    <div className="group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                          idx === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          idx === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                          'bg-gradient-to-r from-orange-500 to-yellow-500'
                        }`}>
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {p.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <FaCalendarAlt className="w-3 h-3" />
                            <span>{p.date}</span>
                          </div>
                        </div>
                      </div>
                      {idx < recentPosts.length - 1 && <div className="h-px bg-gray-100 mt-4"></div>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                <FaTag className="text-purple-600" /> Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 12).map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg text-white bg-gradient-to-r ${
                      idx % 4 === 0 ? 'from-blue-500 to-cyan-500' :
                      idx % 4 === 1 ? 'from-emerald-500 to-green-500' :
                      idx % 4 === 2 ? 'from-purple-500 to-pink-500' :
                      'from-orange-500 to-red-500'
                    } hover:shadow-md transition-shadow duration-300 cursor-pointer`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 shadow-lg">
              <h3 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                <FaChartLine className="text-indigo-600" /> Blog Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Posts</span>
                  <span className="font-bold text-indigo-600">{stats.totalPosts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Featured Posts</span>
                  <span className="font-bold text-emerald-600">{stats.featuredPosts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Categories</span>
                  <span className="font-bold text-purple-600">{blogCategories.length - 1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Views</span>
                  <span className="font-bold text-orange-600">
                    {stats.totalViews.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 shadow-lg">
              <div className="text-emerald-600 text-4xl mb-3">📬</div>
              <h3 className="font-bold mb-2 text-gray-900">Stay Updated</h3>
              <p className="text-gray-700 text-sm mb-4">
                Get the latest construction insights delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 text-sm"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-shadow duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;