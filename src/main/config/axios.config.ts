import axios from 'axios';

export const proxy = axios.create({
  baseURL: 'https://expressjs-proxy.onrender.com',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});
