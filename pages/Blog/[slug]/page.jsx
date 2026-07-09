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
  const { slug } = params;

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
      <div className="blog-page">
        <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
        <div className="loading-state">Loading blog...</div>
        <Footer />
        <style jsx global>{`
          .blog-page { min-height: 100vh; background: #ffffff; }
          .loading-state { 
            text-align: center; 
            padding: 100px 20px; 
            font-family: var(--font-sans); 
            font-size: 1.125rem; 
            color: rgba(0, 0, 0, 0.6); 
          }
        `}</style>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-page">
        <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
        <div className="blog-container">
          <button onClick={() => router.push('/blog')} className="back-button">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
          <div className="error-state">Blog not found.</div>
        </div>
        <Footer />
        <style jsx global>{`
          .blog-page { min-height: 100vh; background: #ffffff; }
          .blog-container { max-width: 1200px; margin: 0 auto; padding: 100px 20px; }
          .back-button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-family: var(--font-sans);
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 32px;
            transition: all 0.3s ease;
          }
          .back-button:hover { transform: translateY(-2px); }
          .error-state {
            text-align: center;
            padding: 60px 20px;
            font-family: var(--font-sans);
            font-size: 1.125rem;
            color: rgba(0, 0, 0, 0.6);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
      
      <main className="blog-main">
        <div className="blog-container">
          <button onClick={() => router.push('/blog')} className="back-button">
            <ArrowLeft size={20} />
            Back to Blogs
          </button>

          <article className="blog-article">
            {blog.image && (
              <div className="blog-hero-image">
                <img src={blog.image} alt={blog.imageAlt || blog.title} />
              </div>
            )}

            <div className="blog-article-content">
              <div className="blog-meta">
                <span className="blog-date">
                  <Calendar size={16} />
                  {formatDate(blog.createdAt)}
                </span>
                {blog.author && (
                  <span className="blog-author">
                    <User size={16} />
                    {blog.author.name}
                  </span>
                )}
              </div>

              <h1 className="blog-title">{blog.title}</h1>

              {blog.categories && blog.categories.length > 0 && (
                <div className="blog-categories">
                  {blog.categories.map((category) => (
                    <span key={category.id} className="category-tag">
                      <Tag size={14} />
                      {category.name}
                    </span>
                  ))}
                </div>
              )}

              {blog.shortDescription && (
                <p className="blog-excerpt">{blog.shortDescription}</p>
              )}

              <div 
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: blog.mainContent }}
              />
            </div>
          </article>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .blog-page {
          min-height: 100vh;
          background: #ffffff;
        }

        .blog-main {
          padding-top: 80px;
          min-height: calc(100vh - 80px);
        }

        .blog-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 40px;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
        }

        .blog-article {
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        .blog-hero-image {
          width: 100%;
          height: 400px;
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 40px;
        }

        .blog-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-article-content {
          padding: 0;
        }

        .blog-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .blog-date,
        .blog-author {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: rgba(0, 0, 0, 0.5);
        }

        .blog-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .blog-categories {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .category-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(201, 149, 108, 0.1) 100%);
          color: #c9956c;
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .blog-excerpt {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.7);
          line-height: 1.7;
          margin-bottom: 40px;
          font-style: italic;
        }

        .blog-body {
          font-family: var(--font-sans);
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.8);
        }

        .blog-body h2 {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--ink);
          margin: 40px 0 20px;
        }

        .blog-body h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--ink);
          margin: 32px 0 16px;
        }

        .blog-body p {
          margin-bottom: 20px;
        }

        .blog-body ul,
        .blog-body ol {
          margin: 20px 0;
          padding-left: 24px;
        }

        .blog-body li {
          margin-bottom: 12px;
        }

        .blog-body img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 32px 0;
        }

        .blog-body blockquote {
          border-left: 4px solid #d4a574;
          padding: 20px 24px;
          margin: 32px 0;
          background: rgba(212, 165, 116, 0.05);
          font-style: italic;
        }

        .blog-body a {
          color: #c9956c;
          text-decoration: underline;
        }

        .blog-body a:hover {
          color: #d4a574;
        }

        @media (max-width: 768px) {
          .blog-title {
            font-size: 2rem;
          }

          .blog-excerpt {
            font-size: 1.125rem;
          }

          .blog-body {
            font-size: 1rem;
          }

          .blog-hero-image {
            height: 250px;
          }

          .blog-container {
            padding: 40px 20px;
          }
        }
      `}</style>
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
