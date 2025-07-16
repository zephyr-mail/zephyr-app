import axios from 'axios';

export const proxy = axios.create({
  baseURL: 'https://hf.luisworks.dev',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
})


export const http = axios.create({
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});
