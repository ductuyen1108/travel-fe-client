'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import Iconify from '@/common/components/iconify/Iconify';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IDataLogin, IFormLogin, IResLogin } from './common/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from './common/schema';
import { LoadingButton } from '@mui/lab';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useLogin } from './common/hooks/useLogin';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { push } = useRouter();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate, isLoading } = useLogin({
    onSuccess: (result: IResLogin) => {
      localStorage.setItem('token', result?.accessToken);
      showSuccessSnackbar('Đăng nhập thành công');
      push('/');
    },
    onError: (err: any) => {
      showErrorSnackbar(err?.response?.data?.message);
    },
  });

  const methods = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    formState: { errors, dirtyFields },
  } = methods;

  const onSubmit = (data: IFormLogin) => {
    const dataLogin: IDataLogin = {
      phoneNumber: data.phoneNumber,
      password: data.password,
    };
    mutate(dataLogin);
  };
  return (
    <Stack
      sx={{ position: 'relative', zIndex: 100, marginBottom: '-400px' }}
      direction={{ sm: 'row', xs: 'column' }}
      spacing={{ sm: 'unset', xs: 5 }}
    >
      <Stack
        width={{ sm: '60%', xs: '100%' }}
        height={{ sm: '100vh', xs: '50vh' }}
        sx={{ objectFit: 'cover' }}
        src={'/images/home/destinations/ha-noi.jpg'}
        alt={`banner`}
        component={'img'}
      />
      <Stack width={{ sm: '40%', xs: '100%' }} sx={{ background: '#fff' }} justifyContent={'center'} spacing={2}>
        <Stack alignItems={'center'} justifyContent={'center'} spacing={1}>
          <Stack
            sx={{ padding: '10px', border: `1px solid ${PRIMARY_MAIN}`, borderRadius: '50%', width: 'fit-content' }}
          >
            <Iconify
              icon={'fluent:lock-closed-16-regular'}
              sx={{ width: '40px', height: '40px', color: PRIMARY_MAIN }}
            />
          </Stack>
          <Typography sx={{ fontSize: '32px', fontWeight: 600, color: PRIMARY_MAIN }}>Đăng nhập</Typography>
        </Stack>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', padding: '0 24px' }}>
          <Stack spacing={2} width={'100%'}>
            <RHFTextField
              sx={{ '& .MuiFormLabel': { top: 0 } }}
              label="Số điện thoại"
              name="phoneNumber"
              size="medium"
            />
            <RHFTextField sx={{ '& .MuiFormLabel': { top: 0 } }} label="Mật khẩu" name="password" size="medium" />
          </Stack>
          <Stack direction={'row'} spacing={3} mt="30px">
            <LoadingButton type="submit" variant="contained" fullWidth sx={{ padding: '10px' }}>
              Đăng nhập
            </LoadingButton>
            <LoadingButton variant="outlined" fullWidth sx={{ padding: '10px' }}>
              Đăng ký
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default Login;
