import { useQuery } from 'react-query';
import { IParamTour } from '../interface';
import { QUERY_KEYS } from '@/common/constants/queryKey.constants';
import { getListTours } from '../service';

export const useGetListTours = (params: IParamTour) => {
  const { data: listTourData, isLoading } = useQuery([QUERY_KEYS.LIST_TOURS], () => getListTours(params));

  return { listTourData, isLoading };
};
