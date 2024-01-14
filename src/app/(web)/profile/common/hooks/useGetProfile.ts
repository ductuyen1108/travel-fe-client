import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { useQuery } from 'react-query';
import { getProfile } from '../service';
import { useDispatch } from '@/common/redux/store';
import { setProfile } from '@/app/(web)/login/common/auth.slice';

export const useGetProfile = (enabled: boolean) => {
  const dispatch = useDispatch();
  const {
    data: profileData,
    isLoading: isLoadingData,
    refetch: refetchDatauser,
  } = useQuery([QUERY_KEYS.PROFILE], () => getProfile(), {
    enabled: enabled,
    onSuccess: (result) => {
      dispatch(setProfile(result));
    },
  });

  return { profileData, isLoadingData, refetchDatauser };
};
