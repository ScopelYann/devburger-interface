import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3200',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  const token = userData && JSON.parse(userData).token

  config.headers.Authorization = `Bearer ${token}`;
  return config
});
