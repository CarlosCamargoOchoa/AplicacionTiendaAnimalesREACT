import axios from 'axios';

const API_URL = 'https://http.cat/';

const gatosService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const fetchData = async (endpoint: string) => {
  try {
    const response = await gatosService.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
