import axios from 'axios';
// config
import { HOST_API } from '../config/hostApi';
import { store } from '../redux/store';
import { setAccessToken, setIsExpiredToken, setProfile } from '@/app/(web)/login/common/auth.slice';

const axiosClient = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'Application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    const { accessToken } = store?.getState().authLogin;
    if (response?.data?.debugInfo?.status === 401 && accessToken) {
      store.dispatch(setAccessToken(''));
      store.dispatch(setProfile(undefined));
      store.dispatch(setIsExpiredToken(true));
      return;
    }
    return Promise.reject(error);
  },
);
axiosClient.interceptors.request.use(async (config) => {
  const token = store?.getState().authLogin.accessToken;

  if (token) {
    try {
      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {}
  }
  return {
    ...config,
  };
});

export default axiosClient;
