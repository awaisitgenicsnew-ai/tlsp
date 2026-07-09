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
    <div className="blog-page">
      <Navbar top={WHITE_SCHEME} scrolled={WHITE_SCHEME} />
      
      <main className="blog-main">
        <div className="blog-container">
          <div className="blog-header">
            <h1 className="blog-title">Our Blog</h1>
            <p className="blog-subtitle">Insights, news, and updates from PLT Properties</p>
          </div>

          {loading ? (
            <div className="loading-state">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="empty-state">No blogs published yet.</div>
          ) : (
            <div className="blog-grid">
              {blogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className="blog-card"
                  onClick={() => router.push(`/blog/${blog.slug}`)}
                >
                  {blog.image && (
                    <div className="blog-image">
                      <img src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}${blog.image}`} alt={blog.imageAlt || blog.title} />
                    </div>
                  )}
                  
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">
                        <Calendar size={14} />
                        {formatDate(blog.createdAt)}
                      </span>
                      {blog.author && (
                        <span className="blog-author">
                          <User size={14} />
                          {blog.author.name}
                        </span>
                      )}
                    </div>

                    <h2 className="blog-card-title">{blog.title}</h2>
                    
                    {blog.shortDescription && (
                      <p className="blog-excerpt">{blog.shortDescription}</p>
                    )}

                    {blog.categories && blog.categories.length > 0 && (
                      <div className="blog-categories">
                        {blog.categories.map((category) => (
                          <span key={category.id} className="category-tag">
                            <Tag size={12} />
                            {category.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="read-more">Read More</button>
                  </div>
                </article>
              ))}
            </div>
          )}
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .blog-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .blog-subtitle {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.6);
        }

        .loading-state,
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          font-family: var(--font-sans);
          font-size: 1.125rem;
          color: rgba(0, 0, 0, 0.6);
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 32px;
        }

        .blog-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid #e5e7eb;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .blog-image {
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .blog-content {
          padding: 28px;
        }

        .blog-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .blog-date,
        .blog-author {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.5);
        }

        .blog-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .blog-excerpt {
          font-family: var(--font-sans);
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-categories {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .category-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(201, 149, 108, 0.1) 100%);
          color: #c9956c;
          border-radius: 20px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .read-more {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
        }

        @media (max-width: 768px) {
          .blog-title {
            font-size: 2.25rem;
          }

          .blog-subtitle {
            font-size: 1rem;
          }

          .blog-grid {
            grid-template-columns: 1fr;
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
