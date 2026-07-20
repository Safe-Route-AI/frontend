import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSafeRoute = async (origin, destination) => {
  const response = await api.post('/api/routes', {
    origin,
    destination,
  });

  return response.data;
};

export default api;
