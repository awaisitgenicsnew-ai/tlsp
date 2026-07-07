"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function AdminSidebar({ activePage = 'dashboard' }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { id: 'contacts', label: 'Contacts', icon: Users, path: '/admin/contacts' },
  ];

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/admin/login';
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Admin Panel</h2>
          <p className="sidebar-subtitle">PLT Properties</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-button">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <style jsx global>{`
        .mobile-menu-button {
          display: none;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1001;
          background: var(--tan);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 0;
          cursor: pointer;
        }

        .admin-sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 280px;
          height: 100vh;
          background: var(--dark);
          color: white;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: transform 0.3s ease;
        }

        .sidebar-header {
          padding: 30px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .sidebar-subtitle {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .sidebar-nav {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          border-radius: 0;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .nav-item.active {
          background: var(--tan);
          color: white;
        }

        .sidebar-footer {
          padding: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logout-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          border-radius: 0;
          transition: all 0.3s ease;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          width: 100%;
        }

        .logout-button:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ef4444;
        }

        .sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .admin-sidebar {
            transform: translateX(-100%);
          }

          .admin-sidebar.mobile-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
