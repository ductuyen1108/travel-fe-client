import { API_CONTACT } from '@/common/constants/api.constants';
import axiosClient from '@/common/utils/axios';

export interface IParamsContact {
  name: string;
  phoneNumber: string;
  email: string;
  company: string;
  message: string;
}

export const sendMessage = (data: IParamsContact) => {
  return axiosClient.post(API_CONTACT, data);
};
