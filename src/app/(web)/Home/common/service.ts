import axiosClient from '@/common/utils/axios';
import { IParamTour, IResTour } from './interface';
import { API_TOUR } from '@/common/constants/api.constants';

export const getListTours = (params: IParamTour) => {
  return axiosClient.get<IResTour>(API_TOUR, {
    params: params,
  });
};
