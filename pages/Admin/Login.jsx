"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header">
            <h1 className="login-title">Admin Login</h1>
            <p className="login-subtitle">PLT Properties</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter username"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="form-input"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        .login-container {
          min-height: 100vh;
          background: var(--dark);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .login-box {
          background: white;
          padding: 40px;
          border-radius: 0;
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .login-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .login-subtitle {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          color: var(--tan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .error-message {
          background: #ef4444;
          color: white;
          padding: 12px;
          margin-bottom: 20px;
          text-align: center;
          font-family: var(--font-sans);
          font-size: 0.875rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--ink);
        }

        .form-input {
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 0;
          font-size: 1rem;
          font-family: var(--font-sans);
          transition: all 0.3s ease;
          background: white;
          color: var(--ink);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--tan);
          box-shadow: 0 0 0 3px rgba(138, 60, 34, 0.1);
        }

        .submit-button {
          background: var(--tan);
          color: white;
          padding: 14px;
          border: none;
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-family: var(--font-sans);
        }

        .submit-button:hover:not(:disabled) {
          background: #7a341e;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
