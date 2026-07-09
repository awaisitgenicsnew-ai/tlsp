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
        className="hidden md:flex fixed top-5 left-5 z-[1001] items-center justify-center bg-gradient-to-r from-[#d4a574] to-[#c9956c] text-white border-none p-3.5 rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 w-[300px] h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white flex flex-col z-[1000] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-xl ${isMobileOpen ? 'md:translate-x-0 translate-x-0' : 'md:translate-x-0 -translate-x-full'}`}>
        <div className="p-8 px-7 border-b border-white/8 bg-gradient-to-br from-[rgba(212,165,116,0.15)] to-[rgba(201,149,108,0.1)]">
          <h2 className="font-display text-[1.75rem] font-bold mb-1.5 bg-gradient-to-r from-[#d4a574] to-[#e8c4a0] bg-clip-text text-transparent">Admin Panel</h2>
          <p className="font-sans text-xs text-white/50 uppercase tracking-[0.15em] font-medium">PLT Properties</p>
        </div>

        <nav className="flex-1 p-7 px-5 flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-3.5 px-4.5 py-3.5 bg-transparent border-none cursor-pointer rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-sans text-base font-medium text-left relative overflow-hidden ${isActive ? 'bg-gradient-to-br from-[rgba(212,165,116,0.2)] to-[rgba(201,149,108,0.15)] text-[#e8c4a0] font-semibold' : 'text-white/65 hover:bg-white/8 hover:text-white hover:translate-x-1'}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-6 px-5 border-t border-white/8 bg-black/20">
          <button onClick={handleLogout} className="flex items-center gap-3.5 px-4.5 py-3.5 bg-transparent border border-red-500/30 text-red-500/80 cursor-pointer rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-sans text-base font-medium w-full hover:bg-red-500/15 hover:border-red-500 hover:text-red-500 hover:-translate-y-0.5 hover:shadow-lg">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
