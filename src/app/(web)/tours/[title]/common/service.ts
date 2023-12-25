import { API_BOOK_TOUR } from '@/common/constants/api.constants';
import axiosClient from '@/common/utils/axios';
import { IBookTourForm } from './interface';

export const bookTour = (params: IBookTourForm) => {
  return axiosClient.post(API_BOOK_TOUR, params);
};
