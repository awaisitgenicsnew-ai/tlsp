"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { categoryApi } from '../../lib/api';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function Categories() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', slug: '' });
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
    fetchCategories();
  }, [token, router]);

  const fetchCategories = async () => {
    try {
      const response = await categoryApi.getAll(token);
      if (response.success) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (editingCategory) {
        await categoryApi.update(editingCategory.id, formData, token);
      } else {
        await categoryApi.create(formData, token);
      }
      setShowModal(false);
      setEditingCategory(null);
      setFormData({ name: '', slug: '' });
      fetchCategories();
    } catch (err) {
      setError(err.message || 'Failed to save category');
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, slug: category.slug });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      await categoryApi.delete(id, token);
      fetchCategories();
    } catch (err) {
      setError(err.message || 'Failed to delete category');
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    setFormData({ name, slug });
  };

  return (
    <div className="admin-layout">
      <AdminSidebar activePage="categories" />
      
      <main className="admin-main">
        <div className="admin-content">
          <div className="page-header">
            <h1 className="page-title">Categories</h1>
            <button 
              onClick={() => {
                setEditingCategory(null);
                setFormData({ name: '', slug: '' });
                setShowModal(true);
              }}
              className="add-button"
            >
              <Plus size={20} />
              Add Category
            </button>
          </div>

          {loading ? (
            <div className="loading-state">Loading categories...</div>
          ) : (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.name}</td>
                      <td>{category.slug}</td>
                      <td>
                        <button 
                          onClick={() => handleEdit(category)}
                          className="action-button edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(category.id)}
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
                    {editingCategory ? 'Edit Category' : 'Add Category'}
                  </h2>
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      setEditingCategory(null);
                      setFormData({ name: '', slug: '' });
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
                      onChange={handleNameChange}
                      required
                      placeholder="Category name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Slug</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                      placeholder="category-slug"
                    />
                  </div>

                  <div className="modal-actions">
                    <button type="button" onClick={() => setShowModal(false)} className="cancel-button">
                      Cancel
                    </button>
                    <button type="submit" className="submit-button">
                      {editingCategory ? 'Update' : 'Create'}
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

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 0;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          box-sizing: border-box;
          color: #000000;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--tan);
          box-shadow: 0 0 0 3px rgba(210, 180, 140, 0.1);
        }

        .form-group input::placeholder {
          color: #000000;
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
