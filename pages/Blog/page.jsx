"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
      if (response.success) {
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
      <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
      
      <main className="pt-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-6xl mx-auto px-5 py-16 md:px-20">
          <div className="mb-16">
            <h1 className="font-display text-5xl font-bold text-[#2a2620] mb-4">Blogs</h1>
          </div>

          {loading ? (
            <div className="text-center py-16 font-sans text-lg text-black/60">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16 font-sans text-lg text-black/60">No blogs published yet.</div>
          ) : (
            <>
              <div className="mb-16">
                <h2 className="font-display text-2xl font-semibold text-[#2a2620] mb-8">Latest Dubai Property Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.slice(0, 3).map((blog) => (
                    <article 
                      key={blog.id} 
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                      onClick={() => router.push(`/blog/${blog.slug}`)}
                    >
                      {blog.image && (
                        <div className="w-full h-52 overflow-hidden">
                          <img 
                            src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}${blog.image}`} 
                            alt={blog.imageAlt || blog.title} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex gap-3 mb-3 flex-wrap">
                          <span className="flex items-center gap-1.5 font-sans text-sm text-black/50">
                            <Calendar size={14} />
                            {formatDate(blog.createdAt)}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-[#2a2620] mb-3 leading-relaxed">{blog.title}</h3>
                        {blog.shortDescription && (
                          <p className="font-sans text-base text-black/70 leading-relaxed line-clamp-2">{blog.shortDescription}</p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {blogs.length > 3 && (
                <div className="mb-16">
                  <h2 className="font-display text-2xl font-semibold text-[#2a2620] mb-8">More Blogs</h2>
                  <div className="flex flex-col gap-5">
                    {blogs.slice(3).map((blog) => (
                      <article 
                        key={blog.id} 
                        className="flex justify-between items-center p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 hover:border-[#c9a876]"
                        onClick={() => router.push(`/blog/${blog.slug}`)}
                      >
                        <div className="flex-1">
                          <div className="flex gap-3 mb-2 flex-wrap">
                            <span className="flex items-center gap-1.5 font-sans text-sm text-black/50">
                              <Calendar size={14} />
                              {formatDate(blog.createdAt)}
                            </span>
                          </div>
                          <h3 className="font-display text-lg font-semibold text-[#2a2620] mb-2 leading-relaxed">{blog.title}</h3>
                          {blog.shortDescription && (
                            <p className="font-sans text-sm text-black/60 leading-relaxed line-clamp-2">{blog.shortDescription}</p>
                          )}
                        </div>
                        <div className="text-3xl text-[#c9a876] ml-5 transition-transform duration-300 hover:translate-x-1">→</div>
                      </article>
                    ))}
                  </div>
                </div>
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
