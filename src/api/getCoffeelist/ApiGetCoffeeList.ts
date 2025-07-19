import axios, { AxiosError } from 'axios';
import { CoffeeModel } from './CoffeeModel';
 

const API_URL = 'https://api.sampleapis.com/coffee/hot';

export const fetchCoffeeData = async (): Promise<CoffeeModel[]> => {
  try {
    const response = await axios.get<CoffeeModel[]>(API_URL);
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching coffee data:', error);
    throw new Error(
      error instanceof AxiosError
        ? error.response?.data?.message || 'Failed to fetch coffee data'
        : 'An unexpected error occurred'
    );
  }
};