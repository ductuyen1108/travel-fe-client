import { useMutation } from 'react-query';
import { changePasswordProfile } from '../service';
import { ICallback } from '@/app/(web)/tours/common/interface';

export const useChangePassword = (callback: ICallback) => {
  return {
    ...useMutation(changePasswordProfile, {
      onSuccess: (data) => {
        callback.onSuccess(data);
      },
      onError: (err: any) => {
        callback.onError(err);
      },
    }),
  };
};
