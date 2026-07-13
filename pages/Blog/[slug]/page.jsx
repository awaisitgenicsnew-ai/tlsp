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
      
      {/* HERO BANNER */}
      <header className="relative h-[420px] md:h-[480px] flex items-end overflow-hidden">
        {blog.image && (
          <img 
            src={`https://backend-production-1c502.up.railway.app/api${blog.image}`} 
            alt={blog.imageAlt || blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pb-12 w-full text-white">
          <p className="text-xs md:text-sm font-medium text-[#d9c9a3] tracking-wide mb-3">{formatDate(blog.createdAt)}</p>
          <h1 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl mb-4">
            {blog.title}
          </h1>
          {blog.author && (
            <p className="text-sm md:text-base text-white/80">By {blog.author.name}</p>
          )}
        </div>
      </header>

      {/* BREADCRUMB */}
      <nav className="max-w-6xl mx-auto px-6 md:px-10 py-5 text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-2">
          <li><a href="/" className="hover:text-[#9c7a3c] transition-colors">Home</a></li>
          <li aria-hidden="true">&rsaquo;</li>
          <li><a href="/blog" className="hover:text-[#9c7a3c] transition-colors">Blog</a></li>
          <li aria-hidden="true">&rsaquo;</li>
          <li className="text-[#1c2b39] font-medium">{blog.title}</li>
        </ol>
      </nav>

      {/* ARTICLE BODY */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 pb-20">
        <style jsx global>{`
          .prose-custom p {
            font-size: 16px;
            margin-bottom: 1.25rem;
            line-height: 1.8;
          }
          .prose-custom h2 {
            font-size: 32px;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          .prose-custom h3 {
            font-size: 28px;
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          .prose-custom h4 {
            font-size: 24px;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
          }
          .prose-custom ul {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          .prose-custom ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }
          .prose-custom li {
            font-size: 16px;
            margin-bottom: 0.5rem;
            line-height: 1.7;
          }
          .prose-custom table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            font-size: 16px;
          }
          .prose-custom table th {
            background-color: #f9fafb;
            padding: 0.75rem 1rem;
            text-align: left;
            font-weight: 600;
            border: 1px solid #e5e7eb;
          }
          .prose-custom table td {
            padding: 0.75rem 1rem;
            border: 1px solid #e5e7eb;
          }
          .prose-custom table tr:nth-child(even) {
            background-color: #f9fafb;
          }
        `}</style>
        <article className="prose-custom text-[#374151] text-[15px] md:text-base">
          {blog.shortDescription && (
            <p className="mb-6 text-lg text-[#374151] leading-relaxed">{blog.shortDescription}</p>
          )}

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

          <div 
            className="prose-custom text-[#374151] text-[15px] md:text-base"
            dangerouslySetInnerHTML={{ __html: blog.mainContent }}
          />
        </article>

        {/* SHARE / BACK */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <button onClick={() => router.push('/blog')} className="inline-flex items-center gap-2 text-sm font-medium text-[#1c2b39] hover:text-[#9c7a3c] transition-colors">
            <span aria-hidden="true">&larr;</span> Back to Blog
          </button>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>Share:</span>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#9c7a3c] transition-colors">LinkedIn</a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#9c7a3c] transition-colors">X</a>
            <a href={`mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} className="hover:text-[#9c7a3c] transition-colors">Email</a>
          </div>
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
