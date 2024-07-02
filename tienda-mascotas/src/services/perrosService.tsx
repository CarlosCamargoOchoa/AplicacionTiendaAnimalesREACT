import axios from 'axios';

const API_URL = 'https://api.thedogapi.com/v1/images/';

const perrosService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    "x-api-key": "live_F9f1vbtHWpCg8E6XAQfnJqmoYXf9f5jHMRUGwap6fYMGt48rU8Bm5X5ewJJuSXJD"
  },
});

export const fetchData = async () => {
  try {
    const response = await perrosService.get('search');
    if (!response) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};