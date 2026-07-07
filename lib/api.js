/**
 * API Service for communicating with the backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Generic API request handler
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      if (data.errors && data.errors.length > 0) {
        const errorMessages = data.errors.map(err => `${err.field}: ${err.message}`).join(', ');
        throw new Error(data.message || `Validation failed: ${errorMessages}`);
      }
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * Lead API methods
 */
export const leadApi = {
  /**
   * Submit a new lead
   */
  async createLead(leadData) {
    return apiRequest('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData),
    });
  },
};

/**
 * Auth API methods (for admin panel)
 */
export const authApi = {
  /**
   * Admin login
   */
  async login(credentials) {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  /**
   * Get admin profile
   */
  async getProfile(token) {
    return apiRequest('/auth/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

/**
 * Admin Lead API methods
 */
export const adminLeadApi = {
  /**
   * Get all leads with pagination, search, and filter
   */
  async getAllLeads(params = {}, token) {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/leads${queryString ? `?${queryString}` : ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Get lead statistics
   */
  async getStats(token) {
    return apiRequest('/admin/leads/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Get lead by ID
   */
  async getById(id, token) {
    return apiRequest(`/admin/leads/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Update lead
   */
  async updateLead(id, updateData, token) {
    return apiRequest(`/admin/leads/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    });
  },

  /**
   * Delete lead
   */
  async deleteLead(id, token) {
    return apiRequest(`/admin/leads/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

export default apiRequest;
