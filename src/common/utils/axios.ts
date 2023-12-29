import axios from 'axios';
// config
import { HOST_API } from '../config/hostApi';

// ----------------------------------------------------------------------

const token = localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'Application/json',
    Authorization: token ? 'Bearer ' + token : '',
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error: any) => {
    return Promise.reject(error?.response?.data);
  },
);
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
  };
});

export default axiosClient;
