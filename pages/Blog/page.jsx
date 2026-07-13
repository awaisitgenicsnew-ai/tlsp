"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogApi } from '../../lib/api';
import { Calendar, User, Tag } from 'lucide-react';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await blogApi.getAll({ status: 'published' }, null);
      console.log('Blogs response:', response);
      if (response.success) {
        console.log('Setting blogs:', response.data);
        setBlogs(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        colors={{
          top: WHITE_SCHEME,
          scrolled: {
            bg: "#000000",
            border: "rgba(255,255,255,0.1)",
            text: "#ffffff",
            subText: "rgba(255,255,255,0.8)",
            link: "rgba(255,255,255,0.9)",
            linkHover: "#ffffff",
            buttonBorder: "#ffffff",
            buttonText: "#ffffff",
            buttonHoverBg: "#ffffff",
            buttonHoverText: "#000000",
          }
        }} 
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2a2620] via-[#3d3529] to-[#2a2620] py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-5 md:px-20 text-center">
            <span className="inline-block px-4 py-2 mb-6 font-sans text-sm tracking-[0.2em] text-[#d4a574] uppercase border border-[#d4a574]/30 rounded-full">
              Insights & Updates
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[#d4a574]">Blog</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest Dubai property market insights, investment tips, and exclusive updates from PLT Properties.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-5 py-16 md:px-20">

          {loading ? (
            <div className="text-center py-16 font-sans text-lg text-black/60">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16 font-sans text-lg text-black/60">No blogs published yet.</div>
          ) : (
            <>
              {/* Featured Blogs Section */}
              <section className="mb-20">
                <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2a2620]">Latest Blogs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogs.slice(0, 3).map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.slug}`}
                      className="group block"
                    >
                      <div className="overflow-hidden rounded-xl mb-4">
                        {blog.image && (
                          <img
                            src={`https://backend-production-1c502.up.railway.app/api${blog.image}`}
                            alt={blog.imageAlt || blog.title}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="text-xs font-medium text-[#9c7a3c] tracking-wide mb-2">{blog.categories?.[0]?.name || 'Real Estate'}</p>
                      <h3 className="font-display text-lg text-[#1c2b39] leading-snug group-hover:text-[#9c7a3c] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </section>

              {/* All Blogs List Section */}
              {blogs.length > 3 && (
                <section className="mb-20">
                  <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 mb-4 font-sans text-sm tracking-[0.2em] text-[#d4a574] uppercase">
                      Archive
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2a2620] mb-4">More Articles</h2>
                    <p className="font-sans text-base text-black/60 max-w-2xl mx-auto">
                      Browse through our complete collection of property insights and market analysis.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {blogs.slice(3).map((blog) => (
                      <article 
                        key={blog.id} 
                        className="group flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-100 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#faf8f5] hover:to-white hover:border-[#d4a574]/30 hover:shadow-lg"
                        onClick={() => router.push(`/blog/${blog.slug}`)}
                      >
                        {blog.image && (
                          <div className="w-full md:w-48 h-40 md:h-auto overflow-hidden rounded-xl flex-shrink-0">
                            <img
                              src={`https://backend-production-1c502.up.railway.app/api${blog.image}`}
                              alt={blog.imageAlt || blog.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="flex items-center gap-1.5 font-sans text-xs text-[#d4a574] font-medium uppercase tracking-wider">
                              <Calendar size={12} />
                              {formatDate(blog.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-bold text-[#2a2620] mb-2 leading-snug group-hover:text-[#d4a574] transition-colors duration-300">{blog.title}</h3>
                          {blog.shortDescription && (
                            <p className="font-sans text-sm text-black/60 leading-relaxed line-clamp-2">{blog.shortDescription}</p>
                          )}
                        </div>
                        <div className="flex items-center justify-center md:justify-end">
                          <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center text-[#d4a574] group-hover:bg-[#d4a574] group-hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-12 rounded-2xl text-center">
                <h2 className="font-display text-3xl font-bold text-white mb-3">Newsletter</h2>
                <p className="font-sans text-base text-white/80 mb-8">Subscribe to our newsletter for the latest property insights and updates.</p>
                <form className="flex gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-5 py-3.5 border-none rounded-lg font-sans text-base"
                  />
                  <button type="submit" className="px-7 py-3.5 bg-gradient-to-r from-[#d4a574] to-[#c9956c] text-white border-none rounded-lg font-sans text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">Subscribe</button>
                </form>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const WHITE_SCHEME = {
  bg: 'white',
  text: 'var(--ink)',
  logo: 'var(--ink)',
  navBg: 'white',
  navText: 'var(--ink)',
  border: 'rgba(0, 0, 0, 0.1)'
};
