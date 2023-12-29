import { useMutation, useQueryClient } from 'react-query';
import { login } from '../service';
import { ILoginCallback } from '../interface';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';

export const useLogin = (callback: ILoginCallback) => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (result) => {
      queryClient
        .getQueryCache()
        .findAll([QUERY_KEYS.CURRENT])
        .forEach(({ queryKey }) => {
          queryClient.invalidateQueries(queryKey);
        });
      callback.onSuccess(result);
    },
    onError: (err: any) => {
      callback.onError(err);
    },
  });
};
