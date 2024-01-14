import { useMutation, useQueryClient } from 'react-query';
import { login } from '../service';
import { ILoginCallback } from '../interface';

export const useLogin = (callback: ILoginCallback) => {
  return useMutation(login, {
    onSuccess: (result) => {
      callback.onSuccess(result);
    },
    onError: (err: any) => {
      callback.onError(err);
    },
  });
};
