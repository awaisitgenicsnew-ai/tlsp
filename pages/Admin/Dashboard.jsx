"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [stats, setStats] = useState({
    totalContacts: 0,
    pendingContacts: 0,
    respondedContacts: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminData = localStorage.getItem('admin');
    
    if (!token || !adminData) {
      router.push('/admin/login');
      return;
    }

    setAdmin(JSON.parse(adminData));
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const contacts = await response.json();
        setStats({
          totalContacts: contacts.length,
          pendingContacts: contacts.filter(c => c.status === 'pending').length,
          respondedContacts: contacts.filter(c => c.status === 'responded').length
        });
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar activePage="dashboard" />
      
      <main className="admin-main">
        <div className="admin-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Dashboard</h1>
            {admin && <p className="welcome-text">Welcome, {admin.username}</p>}
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Total Contacts</p>
                <p className="stat-value">{stats.totalContacts}</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon pending">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Pending</p>
                <p className="stat-value">{stats.pendingContacts}</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon responded">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="stat-content">
                <p className="stat-label">Responded</p>
                <p className="stat-value">{stats.respondedContacts}</p>
              </div>
            </div>
          </div>

          <div className="recent-activity">
            <h2 className="section-title">Quick Actions</h2>
            <div className="action-buttons">
              <button 
                onClick={() => router.push('/admin/contacts')}
                className="action-button"
              >
                View All Contacts
              </button>
            </div>
          </div>
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
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          margin-bottom: 40px;
        }

        .dashboard-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .welcome-text {
          font-family: var(--font-sans);
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.6);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 0;
          display: flex;
          gap: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          background: var(--tan);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
        }

        .stat-icon.pending {
          background: #f59e0b;
        }

        .stat-icon.responded {
          background: #10b981;
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 4px;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
        }

        .recent-activity {
          background: white;
          padding: 24px;
          border-radius: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 20px;
        }

        .action-buttons {
          display: flex;
          gap: 12px;
        }

        .action-button {
          background: var(--tan);
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
        }

        .action-button:hover {
          background: #7a341e;
        }

        @media (max-width: 768px) {
          .admin-main {
            margin-left: 0;
            padding: 20px;
            padding-top: 80px;
          }

          .dashboard-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
