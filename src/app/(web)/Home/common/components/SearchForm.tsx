'use client';

import { Box, Button, Grid, Icon } from '@mui/material';
import { GRADIENT_COLOR, GRAY_700 } from '@/common/constants/colors';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { useForm } from 'react-hook-form';
import { IDataFilterTour, ISubmitFilterTour } from '../interface';
import { useDispatch } from '@/common/redux/store';
import { setDataFilter } from '../slice';
import Iconify from '@/common/components/iconify/Iconify';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { handleSubmit } = methods;
  const onSubmit = (data: ISubmitFilterTour) => {
    const dataFilter: IDataFilterTour = {
      cityName: data.cityName,
      startPrice: data.startPrice,
      startDate: data.startDate,
      endPrice: data.endPrice,
    };
    console.log('dataFilter', dataFilter);
    dispatch(setDataFilter(dataFilter));
    push('/tours');
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} style={{ position: 'relative' }}>
      <Box mb={3}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          <Grid item sm={3} xs={12}>
            <Box sx={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
              <RHFTextField
                name="cityName"
                label="Nhập địa điểm"
                InputProps={{
                  endAdornment: (
                    <Iconify icon={'solar:city-bold'} sx={{ width: '20px', height: '20px', color: GRAY_700 }} />
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box sx={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
              <RHFTextField name="startDate" label="Ngày bắt đầu" />
            </Box>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box sx={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
              <RHFTextField
                name="startPrice"
                label="Giá thấp nhất"
                InputProps={{
                  endAdornment: (
                    <Iconify icon={'solar:tag-price-linear'} sx={{ width: '20px', height: '20px', color: GRAY_700 }} />
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box sx={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
              <RHFTextField
                name="endPrice"
                label="Giá cao nhất"
                InputProps={{
                  endAdornment: (
                    <Iconify icon={'solar:tag-price-linear'} sx={{ width: '20px', height: '20px', color: GRAY_700 }} />
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Button
        startIcon={<Iconify icon={'charm:search'} />}
        variant="contained"
        type="submit"
        sx={{
          padding: '10px 40px',
          backgroundImage: GRADIENT_COLOR,
          borderRadius: '8px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'fit-content',
        }}
      >
        Tìm kiếm
      </Button>
    </FormProvider>
  );
};

export default SearchForm;
