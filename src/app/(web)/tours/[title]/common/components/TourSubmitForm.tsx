'use client';

import { Box, Stack, Typography, InputBase, Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IBookTourForm } from '../interface';
import { bookTourSchema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';

const TourSubmitForm = () => {
  const methods = useForm<IBookTourForm>({
    resolver: yupResolver(bookTourSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
  const onSubmit: SubmitHandler<IBookTourForm> = (data) => console.log(data);
  return (
    <Box>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ background: 'rgba(0,0,0,.8)', p: '10px 15px 10px 15px', borderRadius: '5px 5px 0 0' }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 600, color: '#fff' }}>2.500.000 đ</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#fff' }}>Mỗi Người</Typography>
      </Stack>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} sx={{ borderRadius: '0 0 5px 5px', p: '30px 20px', border: '1px solid #dce0e0' }}>
          <RHFTextField name="name" label="Họ và tên" />
          <RHFTextField name="email" label="Địa chỉ email" />
          <RHFTextField name="phoneNumber" label="Số điện thoại" />
          <RHFTextField name="startDate" label="Ngày khởi hành (mm/dd/yyyy)" />
          <RHFTextField name="numberOfPeople" label="Số người" />
          <LoadingButton type="submit" variant="contained" sx={{ py: '8px' }}>
            Đặt tour
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Box>
  );
};

export default TourSubmitForm;
