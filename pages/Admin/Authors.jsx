"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { authorApi } from '../../lib/api';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function Authors() {
  const router = useRouter();
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingAuthor, setEditingAuthor] = useState(null);
  const [formData, setFormData] = useState({ name: '', bio: '', image: null });
  const [error, setError] = useState('');

  const getCookie = (name) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    const token = getCookie('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchAuthors();
  }, [router]);

  const fetchAuthors = async () => {
    try {
      const token = getCookie('token');
      const response = await authorApi.getAll(token);
      if (response.success) {
        setAuthors(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch authors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = getCookie('token');
      const data = new FormData();
      data.append('name', formData.name);
      data.append('bio', formData.bio);
      
      if (formData.image instanceof File) {
        data.append('image', formData.image);
      } else if (formData.image && typeof formData.image === 'string') {
        data.append('image', formData.image);
      }

      if (editingAuthor) {
        await authorApi.update(editingAuthor.id, data, token);
      } else {
        await authorApi.create(data, token);
      }
      setShowModal(false);
      setEditingAuthor(null);
      setFormData({ name: '', bio: '', image: null });
      fetchAuthors();
    } catch (err) {
      setError(err.message || 'Failed to save author');
    }
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
    setFormData({ name: author.name, bio: author.bio || '', image: author.image || null });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this author?')) return;

    try {
      const token = getCookie('token');
      await authorApi.delete(id, token);
      fetchAuthors();
    } catch (err) {
      setError(err.message || 'Failed to delete author');
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar activePage="authors" />
      
      <main className="admin-main">
        <div className="admin-content">
          <div className="page-header">
            <h1 className="page-title">Authors</h1>
            <button 
              onClick={() => {
                setEditingAuthor(null);
                setFormData({ name: '', bio: '', image: null });
                setShowModal(true);
              }}
              className="add-button"
            >
              <Plus size={20} />
              Add Author
            </button>
          </div>

          {loading ? (
            <div className="loading-state">Loading authors...</div>
          ) : (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Bio</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {authors.map((author) => (
                    <tr key={author.id}>
                      <td>{author.name}</td>
                      <td>{author.bio ? author.bio.substring(0, 100) + '...' : '-'}</td>
                      <td>
                        {author.image ? (
                          <img src={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}${author.image}`} alt={author.name} className="author-thumbnail" />
                        ) : '-'}
                      </td>
                      <td>
                        <button 
                          onClick={() => handleEdit(author)}
                          className="action-button edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(author.id)}
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
              <div className="modal">
                <div className="modal-header">
                  <h2>
                    {editingAuthor ? 'Edit Author' : 'Add Author'}
                  </h2>
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      setEditingAuthor(null);
                      setFormData({ name: '', bio: '', image: '' });
                      setError('');
                    }}
                    className="close-button"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                  {error && <div className="error-message">{error}</div>}
                  
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Author name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={4}
                      placeholder="Author bio"
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

                  <div className="modal-actions">
                    <button type="button" onClick={() => setShowModal(false)} className="cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="submit-button">
                      {editingAuthor ? 'Update' : 'Create'}
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

        .author-thumbnail {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 0;
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
        }

        .modal {
          background: white;
          width: 100%;
          max-width: 500px;
          border-radius: 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
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

        .form-group {
          margin-bottom: 20px;
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
        .form-group textarea {
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
        .form-group textarea:focus {
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
        }
      `}</style>
    </div>
  );
}
