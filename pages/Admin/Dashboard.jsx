"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';
import { adminLeadApi } from '../../lib/api';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    qualified: 0,
    closed: 0
  });
  const [loading, setLoading] = useState(true);

  const getCookie = (name) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    const token = getCookie('token');
    const adminData = getCookie('admin');
    
    console.log('Dashboard - Token:', token);
    console.log('Dashboard - Admin data:', adminData);
    
    if (!token || !adminData) {
      console.log('Redirecting to login - missing token or admin data');
      router.push('/admin/login');
      return;
    }

    try {
      setAdmin(JSON.parse(adminData));
      fetchStats();
    } catch (err) {
      console.error('Error parsing admin data:', err);
      router.push('/admin/login');
    }
  }, [router]);

  const fetchStats = async () => {
    try {
      const token = getCookie('token');
      console.log('Fetching stats with token:', token);
      const response = await adminLeadApi.getStats(token);
      console.log('Stats response:', response);

      if (response.success) {
        console.log('Setting stats:', response.data.stats);
        setStats(response.data.stats);
      } else {
        console.log('Stats response not successful');
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar activePage="dashboard" />
      
      <main className="flex-1 p-10 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 p-8 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient from-[rgba(212,165,116,0.1)] to-transparent pointer-events-none"></div>
            <h1 className="font-display text-4xl font-bold text-white mb-2 relative z-10">Dashboard</h1>
            {admin && <p className="font-sans text-lg text-white/70 relative z-10">Welcome, {admin.name}</p>}
          </div>

          {loading ? (
            <div className="text-center py-10 font-sans text-gray-600">Loading statistics...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-md flex gap-5">
                <div className="w-14 h-14 bg-[var(--tan)] text-white flex items-center justify-center rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-gray-600 mb-1">Total Leads</p>
                  <p className="font-display text-3xl font-bold text-[var(--ink)]">{stats.total}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md flex gap-5">
                <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-gray-600 mb-1">New</p>
                  <p className="font-display text-3xl font-bold text-[var(--ink)]">{stats.new}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md flex gap-5">
                <div className="w-14 h-14 bg-amber-500 text-white flex items-center justify-center rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-gray-600 mb-1">Contacted</p>
                  <p className="font-display text-3xl font-bold text-[var(--ink)]">{stats.contacted}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md flex gap-5">
                <div className="w-14 h-14 bg-purple-500 text-white flex items-center justify-center rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-gray-600 mb-1">Qualified</p>
                  <p className="font-display text-3xl font-bold text-[var(--ink)]">{stats.qualified}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md flex gap-5">
                <div className="w-14 h-14 bg-emerald-500 text-white flex items-center justify-center rounded-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm text-gray-600 mb-1">Closed</p>
                  <p className="font-display text-3xl font-bold text-[var(--ink)]">{stats.closed}</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-5">Quick Actions</h2>
            <div className="flex gap-3">
              <button 
                onClick={() => router.push('/admin/contacts')}
                className="bg-[var(--tan)] text-white px-6 py-3 border-none rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 font-sans hover:bg-[#7a341e]"
              >
                View All Leads
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
