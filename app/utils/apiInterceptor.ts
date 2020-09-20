import axios, { AxiosResponse, AxiosError } from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const client = axios.create({
  baseURL: BASE_URL,
});

const onSuccess = (response: AxiosResponse) => response;
const onError = async (error: AxiosError) => {
  if (error.message === 'Network Error') {
    console.error('NETWORK ERROR');

    return Promise.reject({
      message: 'Network error!',
      type: 'clientError',
      errros: null,
      status: 1,
    });
  }

  const response = error?.response?.data ? error.response.data : null;

  return Promise.reject({
    ...response,
  });
};

client.interceptors.response.use(onSuccess, onError);
client.defaults.headers['Cache-Control'] = 'no-cache';

export default client;
