import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3200',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  const token = userData && JSON.parse(userData).token

  config.headers.Authorization = `Bearer ${token}`;
  return config
});
