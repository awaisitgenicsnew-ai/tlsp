"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import AdminSidebar from '@/components/AdminSidebar';
import { blogApi, authorApi, categoryApi } from '../../lib/api';
import { Plus, Edit, Trash2 } from 'lucide-react';

const Editor = dynamic(() => import('@tinymce/tinymce-react').then(mod => mod.Editor), { ssr: false });

export default function Blogs() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    metaTitle: '',
    metaDescription: '',
    slug: '',
    title: '',
    shortDescription: '',
    image: null,
    imageAlt: '',
    metaKeywords: '',
    mainContent: '',
    authorId: '',
    status: 'draft',
    categoryIds: [],
  });
  const [error, setError] = useState('');

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const token = getCookie('token');

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchData();
  }, [token, router]);

  const fetchData = async () => {
    try {
      const [blogsRes, authorsRes, categoriesRes] = await Promise.all([
        blogApi.getAll({}, token),
        authorApi.getAll(token),
        categoryApi.getAll(token),
      ]);

      if (blogsRes.success) setBlogs(blogsRes.data);
      if (authorsRes.success) setAuthors(authorsRes.data);
      if (categoriesRes.success) setCategories(categoriesRes.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = new FormData();
      data.append('metaTitle', formData.metaTitle);
      data.append('metaDescription', formData.metaDescription);
      data.append('slug', formData.slug);
      data.append('title', formData.title);
      data.append('shortDescription', formData.shortDescription);
      data.append('imageAlt', formData.imageAlt);
      data.append('metaKeywords', formData.metaKeywords);
      data.append('mainContent', formData.mainContent);
      data.append('authorId', formData.authorId);
      data.append('status', formData.status);
      data.append('categoryIds', JSON.stringify(formData.categoryIds));
      
      if (formData.image instanceof File) {
        data.append('image', formData.image);
      }

      if (editingBlog) {
        await blogApi.update(editingBlog.id, data, token);
      } else {
        await blogApi.create(data, token);
      }
      setShowModal(false);
      setEditingBlog(null);
      resetFormData();
      fetchData();
    } catch (err) {
      setError(err.message || 'Failed to save blog');
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      slug: blog.slug,
      title: blog.title,
      shortDescription: blog.shortDescription || '',
      image: null,
      imageAlt: blog.imageAlt || '',
      metaKeywords: blog.metaKeywords || '',
      mainContent: blog.mainContent,
      authorId: blog.authorId || '',
      status: blog.status,
      categoryIds: blog.categories?.map(c => c.id) || [],
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await blogApi.delete(id, token);
      fetchData();
    } catch (err) {
      setError(err.message || 'Failed to delete blog');
    }
  };

  const resetFormData = () => {
    setFormData({
      metaTitle: '',
      metaDescription: '',
      slug: '',
      title: '',
      shortDescription: '',
      image: null,
      imageAlt: '',
      metaKeywords: '',
      mainContent: '',
      authorId: '',
      status: 'draft',
      categoryIds: [],
    });
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    setFormData({ ...formData, title, slug });
  };

  const handleCategoryToggle = (categoryId) => {
    const newCategoryIds = formData.categoryIds.includes(categoryId)
      ? formData.categoryIds.filter(id => id !== categoryId)
      : [...formData.categoryIds, categoryId];
    setFormData({ ...formData, categoryIds: newCategoryIds });
  };

  return (
    <div className="admin-layout">
      <AdminSidebar activePage="blogs" />
      
      <main className="admin-main">
        <div className="admin-content">
          <div className="page-header">
            <h1 className="page-title">Blogs</h1>
            <button 
              onClick={() => {
                setEditingBlog(null);
                resetFormData();
                setShowModal(true);
              }}
              className="add-button"
            >
              <Plus size={20} />
              Add Blog
            </button>
          </div>

          {loading ? (
            <div className="loading-state">Loading blogs...</div>
          ) : (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Categories</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog.id}>
                      <td>{blog.title}</td>
                      <td>{blog.author?.name || '-'}</td>
                      <td>
                        <span className={`status-badge ${blog.status}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td>
                        {blog.categories?.map(c => c.name).join(', ') || '-'}
                      </td>
                      <td>
                        <button 
                          onClick={() => handleEdit(blog)}
                          className="action-button edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(blog.id)}
                          className="action-button delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {showModal && (
            <div className="modal-overlay">
              <div className="modal modal-large">
                <div className="modal-header">
                  <h2>
                    {editingBlog ? 'Edit Blog' : 'Add Blog'}
                  </h2>
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      setEditingBlog(null);
                      resetFormData();
                      setError('');
                    }}
                    className="close-button"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                  {error && <div className="error-message">{error}</div>}
                  
                  <div className="form-row">
                    <div className="form-group half">
                      <label>Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={handleTitleChange}
                        required
                        placeholder="Blog title"
                      />
                    </div>

                    <div className="form-group half">
                      <label>Slug *</label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        required
                        placeholder="blog-slug"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label>Author</label>
                      <select
                        value={formData.authorId}
                        onChange={(e) => setFormData({ ...formData, authorId: e.target.value })}
                      >
                        <option value="">Select author</option>
                        {authors.map((author) => (
                          <option key={author.id} value={author.id}>
                            {author.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group half">
                      <label>Status</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Categories</label>
                    <div className="checkbox-group">
                      {categories.map((category) => (
                        <label key={category.id} className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formData.categoryIds.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                          />
                          {category.name}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Short Description</label>
                    <textarea
                      value={formData.shortDescription}
                      onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                      rows={3}
                      placeholder="Brief description for preview"
                    />
                  </div>

                  <div className="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Image Alt Text</label>
                    <input
                      type="text"
                      value={formData.imageAlt}
                      onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                      placeholder="Image description for accessibility"
                    />
                  </div>

                  <div className="form-group">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      placeholder="SEO title"
                    />
                  </div>

                  <div className="form-group">
                    <label>Meta Description</label>
                    <textarea
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      rows={2}
                      placeholder="SEO description"
                    />
                  </div>

                  <div className="form-group">
                    <label>Meta Keywords</label>
                    <input
                      type="text"
                      value={formData.metaKeywords}
                      onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>

                  <div className="form-group">
                    <label>Main Content *</label>
                    <Editor
                      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                      value={formData.mainContent}
                      onEditorChange={(content) => setFormData({ ...formData, mainContent: content })}
                      init={{
                        height: 400,
                        menubar: true,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="button" onClick={() => setShowModal(false)} className="cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="submit-button">
                      {editingBlog ? 'Update' : 'Create'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #ffffff;
        }

        .admin-main {
          flex: 1;
          margin-left: 300px;
          padding: 40px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .admin-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 32px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          position: relative;
          z-index: 1;
        }

        .add-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%);
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
          position: relative;
          z-index: 1;
        }

        .add-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 165, 116, 0.4);
        }

        .loading-state {
          text-align: center;
          padding: 40px;
          font-family: var(--font-sans);
          color: rgba(0, 0, 0, 0.6);
        }

        .data-table {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .data-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table th {
          background: #f8f9fa;
          padding: 16px;
          text-align: left;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--ink);
          border-bottom: 2px solid var(--tan);
        }

        .data-table td {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--ink);
        }

        .data-table tr:last-child td {
          border-bottom: none;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 0;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.draft {
          background: #f3f4f6;
          color: #6b7280;
        }

        .status-badge.published {
          background: #d1fae5;
          color: #059669;
        }

        .status-badge.archived {
          background: #fef3c7;
          color: #d97706;
        }

        .action-button {
          padding: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-right: 8px;
        }

        .action-button.edit {
          color: #3b82f6;
        }

        .action-button.edit:hover {
          background: #eff6ff;
        }

        .action-button.delete {
          color: #ef4444;
        }

        .action-button.delete:hover {
          background: #fef2f2;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
          padding: 20px;
        }

        .modal {
          background: white;
          width: 100%;
          max-width: 500px;
          border-radius: 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-large {
          max-width: 900px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          background: white;
          z-index: 10;
        }

        .modal-header h2 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--ink);
        }

        .close-button {
          background: transparent;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1;
        }

        .modal-form {
          padding: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group.half {
          margin-bottom: 0;
        }

        .form-group label {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 0;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          box-sizing: border-box;
          color: #000000;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--tan);
          box-shadow: 0 0 0 3px rgba(210, 180, 140, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #000000;
        }

        .form-group textarea {
          resize: vertical;
        }

        .checkbox-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--ink);
          cursor: pointer;
        }

        .checkbox-label input {
          width: auto;
        }

        .error-message {
          background: #fef2f2;
          color: #ef4444;
          padding: 12px;
          border-radius: 0;
          margin-bottom: 20px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
          position: sticky;
          bottom: 0;
          background: white;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .cancel-button {
          padding: 12px 24px;
          background: white;
          border: 1px solid #d1d5db;
          color: var(--ink);
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 0;
          transition: all 0.3s ease;
        }

        .cancel-button:hover {
          background: #f9fafb;
        }

        .submit-button {
          padding: 12px 24px;
          background: var(--tan);
          color: white;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 0;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: #7a341e;
        }

        @media (max-width: 768px) {
          .admin-main {
            margin-left: 0;
            padding: 20px;
            padding-top: 80px;
          }

          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .page-title {
            font-size: 2rem;
          }

          .data-table {
            overflow-x: auto;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .modal {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
