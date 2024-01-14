import { ICallback } from '@/app/(web)/tours/common/interface';
import { useMutation } from 'react-query';
import { sendMessage } from '../service';

export const useSendMessage = (callback: ICallback) => {
  return useMutation(sendMessage, {
    onSuccess: () => {
      callback.onSuccess && callback.onSuccess();
    },
    onError: () => {
      callback.onError && callback.onError();
    },
  });
};
