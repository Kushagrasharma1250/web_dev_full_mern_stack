import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth services
export const authService = {
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  login: (email, password) =>
    api.post('/auth/login', { email, password }),
  getCurrentUser: () =>
    api.get('/auth/me'),
};

// Task services
export const taskService = {
  getTasks: () =>
    api.get('/tasks'),
  getTask: (id) =>
    api.get(`/tasks/${id}`),
  createTask: (title, description, status, dueDate) =>
    api.post('/tasks', { title, description, status, dueDate }),
  updateTask: (id, data) =>
    api.put(`/tasks/${id}`, data),
  deleteTask: (id) =>
    api.delete(`/tasks/${id}`),
};

export default api;
