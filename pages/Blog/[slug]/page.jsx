"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogApi } from '../../../lib/api';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const { slug } = params || {};

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await blogApi.getBySlug(slug, null);
      if (response.success) {
        setBlog(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch blog:', err);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
        <div className="text-center py-25 font-sans text-lg text-black/60">Loading blog...</div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
        <div className="max-w-6xl mx-auto px-5 py-25 md:px-20">
          <button onClick={() => router.push('/blog')} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#c9956c] text-white border-none rounded-lg font-sans text-sm font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
          <div className="text-center py-25 font-sans text-lg text-black/60">Blog not found.</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
      
      <main className="pt-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto px-5 py-16 md:px-20">
          <button onClick={() => router.push('/blog')} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#c9956c] text-white border-none rounded-lg font-sans text-sm font-semibold cursor-pointer mb-10 transition-all duration-300 hover:-translate-y-0.5">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>

          <article className="bg-white rounded-2xl overflow-hidden">
            {blog.image && (
              <div className="w-full h-96 overflow-hidden rounded-2xl mb-10">
                <img 
                  src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}${blog.image}`} 
                  alt={blog.imageAlt || blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-0">
              <div className="flex gap-5 mb-6 flex-wrap">
                <span className="flex items-center gap-2 font-sans text-base text-black/50">
                  <Calendar size={16} />
                  {formatDate(blog.createdAt)}
                </span>
                {blog.author && (
                  <span className="flex items-center gap-2 font-sans text-base text-black/50">
                    <User size={16} />
                    {blog.author.name}
                  </span>
                )}
              </div>

              <h1 className="font-display text-5xl font-bold text-[#2a2620] mb-6 leading-tight">{blog.title}</h1>

              {blog.categories && blog.categories.length > 0 && (
                <div className="flex gap-2.5 flex-wrap mb-8">
                  {blog.categories.map((category) => (
                    <span key={category.id} className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[rgba(212,165,116,0.1)] to-[rgba(201,149,108,0.1)] text-[#c9956c] rounded-full font-sans text-sm font-medium">
                      <Tag size={14} />
                      {category.name}
                    </span>
                  ))}
                </div>
              )}

              {blog.shortDescription && (
                <p className="font-sans text-xl text-black/70 leading-relaxed mb-10 italic">{blog.shortDescription}</p>
              )}

              <div 
                className="font-sans text-lg leading-relaxed text-black/80 prose prose-headings:font-display prose-headings:text-2xl prose-headings:font-bold prose-headings:text-[#2a2620] prose-headings:mt-10 prose-headings:mb-5 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-5 prose-ul:my-5 prose-ul:pl-6 prose-li:mb-3 prose-img:max-w-full prose-img:h-auto prose-img:rounded-xl prose-img:my-8 prose-blockquote:border-l-4 prose-blockquote:border-[#d4a574] prose-blockquote:px-6 prose-blockquote:py-5 prose-blockquote:my-8 prose-blockquote:bg-[rgba(212,165,116,0.05)] prose-blockquote:italic prose-a:text-[#c9956c] prose-a:underline hover:prose-a:text-[#d4a574]"
                dangerouslySetInnerHTML={{ __html: blog.mainContent }}
              />
            </div>
          </article>
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
