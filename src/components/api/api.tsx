import axios, { AxiosResponse } from 'axios';

export const getNewsApi = async (): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=30',
    );
    if (response.data.length === 0) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoreNewsApi = async (data: number): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${data}&_limit=30`,
    );
    if (response.data.length === 0) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};
