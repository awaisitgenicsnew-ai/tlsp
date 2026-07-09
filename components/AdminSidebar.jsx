"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  LogOut,
  Menu,
  X,
  FileText,
  User,
  Tag
} from 'lucide-react';

export default function AdminSidebar({ activePage = 'dashboard' }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { id: 'contacts', label: 'Contacts', icon: Users, path: '/admin/contacts' },
    { id: 'blogs', label: 'Blogs', icon: FileText, path: '/admin/blogs' },
    { id: 'authors', label: 'Authors', icon: User, path: '/admin/authors' },
    { id: 'categories', label: 'Categories', icon: Tag, path: '/admin/categories' },
  ];

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login';
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
          background: linear-gradient(135deg, #d4a574 0%, #c9956c 100%);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.4);
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(212, 165, 116, 0.5);
        }

        .admin-sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 300px;
          height: 100vh;
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
        }

        .sidebar-header {
          padding: 32px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(201, 149, 108, 0.1) 100%);
        }

        .sidebar-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 6px;
          background: linear-gradient(135deg, #d4a574 0%, #e8c4a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sidebar-subtitle {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 500;
        }

        .sidebar-nav {
          flex: 1;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #d4a574 0%, #c9956c 100%);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          border-radius: 0 4px 4px 0;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          transform: translateX(4px);
        }

        .nav-item:hover::before {
          transform: scaleY(1);
        }

        .nav-item.active {
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, rgba(201, 149, 108, 0.15) 100%);
          color: #e8c4a0;
          font-weight: 600;
        }

        .nav-item.active::before {
          transform: scaleY(1);
        }

        .sidebar-footer {
          padding: 24px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }

        .logout-button {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: transparent;
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: rgba(239, 68, 68, 0.8);
          cursor: pointer;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          width: 100%;
        }

        .logout-button:hover {
          background: rgba(239, 68, 68, 0.15);
          border-color: #ef4444;
          color: #ef4444;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
        }

        .sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
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
