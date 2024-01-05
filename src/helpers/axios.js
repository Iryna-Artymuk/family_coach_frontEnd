import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://family-coach.onrender.com/api',
  //baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('family_coach_access_token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
