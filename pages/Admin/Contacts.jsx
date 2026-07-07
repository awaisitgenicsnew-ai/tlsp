"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminContacts() {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getCookie = (name) => {
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

    fetchContacts();
  }, [router]);

  const fetchContacts = async () => {
    try {
      const token = getCookie('token');
      console.log('Fetching contacts with token:', token);
      const response = await fetch('http://localhost:8000/api/admin/leads', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setContacts(data.data?.leads || []);
      } else {
        console.error('Fetch failed:', data);
        setError(data.message || 'Failed to fetch contacts');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = getCookie('token');
      const response = await fetch(`http://localhost:8000/api/admin/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchContacts();
      } else {
        setError('Failed to update status');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  const deleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this contact?')) return;

    try {
      const token = getCookie('token');
      const response = await fetch(`http://localhost:8000/api/admin/leads/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchContacts();
      } else {
        setError('Failed to delete contact');
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return '#3b82f6';
      case 'contacted':
        return '#f59e0b';
      case 'qualified':
        return '#8b5cf6';
      case 'closed':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar activePage="contacts" />
      
      <main className="admin-main">
        <div className="admin-content">
          <div className="page-header">
            <h1 className="page-title">Contacts</h1>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="contacts-table-wrapper">
              <table className="contacts-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="no-data">No contacts found</td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone || '-'}</td>
                        <td>{contact.subject}</td>
                        <td>
                          <select
                            value={contact.status}
                            onChange={(e) => updateStatus(contact.id, e.target.value)}
                            className="status-select"
                            style={{ color: getStatusColor(contact.status) }}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                        <td>
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="delete-button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .admin-main {
          flex: 1;
          margin-left: 280px;
          padding: 40px;
        }

        .admin-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 30px;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--ink);
        }

        .error-message {
          background: #ef4444;
          color: white;
          padding: 12px;
          margin-bottom: 20px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
        }

        .loading {
          text-align: center;
          padding: 40px;
          font-family: var(--font-sans);
          color: rgba(0, 0, 0, 0.6);
        }

        .contacts-table-wrapper {
          background: white;
          border-radius: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          overflow-x: auto;
        }

        .contacts-table {
          width: 100%;
          border-collapse: collapse;
        }

        .contacts-table thead {
          background: var(--dark);
          color: white;
        }

        .contacts-table th {
          padding: 16px;
          text-align: left;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contacts-table td {
          padding: 16px;
          border-bottom: 1px solid #e5e7eb;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--ink);
        }

        .contacts-table tbody tr:hover {
          background: #f9fafb;
        }

        .no-data {
          text-align: center;
          padding: 40px;
          color: rgba(0, 0, 0, 0.6);
        }

        .status-select {
          padding: 8px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 0;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          cursor: pointer;
          background: white;
        }

        .delete-button {
          background: #ef4444;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 0;
          font-size: 0.875rem;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: all 0.3s ease;
        }

        .delete-button:hover {
          background: #dc2626;
        }

        @media (max-width: 768px) {
          .admin-main {
            margin-left: 0;
            padding: 20px;
            padding-top: 80px;
          }

          .page-title {
            font-size: 2rem;
          }

          .contacts-table {
            font-size: 0.875rem;
          }

          .contacts-table th,
          .contacts-table td {
            padding: 12px 8px;
          }
        }
      `}</style>
    </div>
  );
}
