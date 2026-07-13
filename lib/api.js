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
    console.log('Fetching from:', url);
    const response = await fetch(url, config);

    // Try to parse JSON, if it fails, get text
    let data;
    try {
      data = await response.json();
      console.log('API Response data:', data);
    } catch (e) {
      const text = await response.text();
      console.log('API Response text:', text);
      data = { message: text };
    }

    if (!response.ok) {
      console.log('Response not OK, status:', response.status, 'data:', data);
      if (data.errors && data.errors.length > 0) {
        const errorMessages = data.errors.map(err => `${err.field}: ${err.message}`).join(', ');
        throw new Error(`Validation failed: ${errorMessages}`);
      }
      if (data.message) {
        throw new Error(data.message);
      }
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.detail) {
        throw new Error(data.detail);
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    console.error('Error details:', error.message);
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

/**
 * Category API methods
 */
export const categoryApi = {
  /**
   * Get all categories
   */
  async getAll(token) {
    return apiRequest('/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Get category by ID
   */
  async getById(id, token) {
    return apiRequest(`/categories/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Create category
   */
  async create(categoryData, token) {
    return apiRequest('/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(categoryData),
    });
  },

  /**
   * Update category
   */
  async update(id, categoryData, token) {
    return apiRequest(`/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(categoryData),
    });
  },

  /**
   * Delete category
   */
  async delete(id, token) {
    return apiRequest(`/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

/**
 * Author API methods
 */
export const authorApi = {
  /**
   * Get all authors
   */
  async getAll(token) {
    return apiRequest('/authors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Get author by ID
   */
  async getById(id, token) {
    return apiRequest(`/authors/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Create author
   */
  async create(authorData, token) {
    const isFormData = authorData instanceof FormData;
    return apiRequest('/authors', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      body: isFormData ? authorData : JSON.stringify(authorData),
    });
  },

  /**
   * Update author
   */
  async update(id, authorData, token) {
    const isFormData = authorData instanceof FormData;
    return apiRequest(`/authors/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      body: isFormData ? authorData : JSON.stringify(authorData),
    });
  },

  /**
   * Delete author
   */
  async delete(id, token) {
    return apiRequest(`/authors/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

/**
 * Blog API methods
 */
export const blogApi = {
  /**
   * Get all blogs with optional filters (public endpoint - no token required)
   */
  async getAll(params = {}, token = null) {
    const queryString = new URLSearchParams(params).toString();
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return apiRequest(`/blogs${queryString ? `?${queryString}` : ''}`, {
      method: 'GET',
      headers,
    });
  },

  /**
   * Get blog by ID
   */
  async getById(id, token) {
    return apiRequest(`/blogs/id/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Get blog by slug
   */
  async getBySlug(slug, token) {
    return apiRequest(`/blogs/slug/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },

  /**
   * Create blog
   */
  async create(blogData, token) {
    const isFormData = blogData instanceof FormData;
    return apiRequest('/blogs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      body: isFormData ? blogData : JSON.stringify(blogData),
    });
  },

  /**
   * Update blog
   */
  async update(id, blogData, token) {
    const isFormData = blogData instanceof FormData;
    return apiRequest(`/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      body: isFormData ? blogData : JSON.stringify(blogData),
    });
  },

  /**
   * Delete blog
   */
  async delete(id, token) {
    return apiRequest(`/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  },
};

export default apiRequest;
