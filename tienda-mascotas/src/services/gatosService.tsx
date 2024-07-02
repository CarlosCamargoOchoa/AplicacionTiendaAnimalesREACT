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
    const response = await fetch(endpoint);
    if (!response) {
      throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
