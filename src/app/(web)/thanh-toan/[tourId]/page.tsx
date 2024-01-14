'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { GRAY_500, GRAY_600, GRAY_800, PRIMARY_LIGHT, PRIMARY_MAIN } from '@/common/constants/colors';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, Paper, Typography, Button, FormLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IDataPayment, IResPayment, ISubmitDataPayment } from '../common/interface';
import { randomText } from '@/common/utils/randomText';
import { useSelector } from '@/common/redux/store';
import { usePayment } from '../common/hooks/usePayment';
import { useRouter } from 'next/navigation';

const PaymentMomo = ({ params }: { params: { tourId: number } }) => {
  const { push } = useRouter();
  const { dataPayment } = useSelector((state) => state.payment);
  const methods = useForm<ISubmitDataPayment>({
    defaultValues: dataPayment,
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = methods;
  const { mutate } = usePayment({
    onSuccess: (result: IResPayment) => {
      console.log('result', result);
      push(result.payUrl);
    },
    onError: () => {},
  });
  const onSubmit = (data: ISubmitDataPayment) => {
    const dataPaymenOnlinet: IDataPayment = {
      orderId: randomText(data.orderId),
      orderInfo: `dtTravel_${data.orderInfo}`,
      amount: data.totalPeople >= 5 ? params.tourId * data.totalPeople * 0.9 : params.tourId * data.totalPeople,
      autoCapture: true,
      lang: 'vi',
      extraData: '',
      requestType: 'captureWallet',
      paymentMethod: 'momo',
      userInfo: {
        name: data.userName,
        email: data.userEmail,
        phoneNumber: data.userPhoneNumber,
      },
      items: [
        {
          id: 'string',
          currency: 'string',
          name: 'string',
          purchaseAmount: 1,
          quantity: 1,
          totalAmount: 1,
        },
      ],
    };
    console.log('data thanh toan', dataPaymenOnlinet);
    mutate(dataPaymenOnlinet);
  };
  return (
    <Stack
      sx={{ backgroundImage: 'linear-gradient(135deg, #64b3f4 10%, #c2e59c 100%)' }}
      width={'100vw'}
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
    >
      <Box
        component={'img'}
        src="/images/momo.png"
        width={'100px'}
        height={'100px'}
        alt="momo-logo"
        sx={{ borderRadius: '12px', position: 'absolute', top: 75, zIndex: 100 }}
      />

      <Stack
        spacing={2}
        component={Paper}
        elevation={2}
        padding={'55px 40px 40px 40px'}
        sx={{ borderRadius: '10px', position: 'relative' }}
        alignItems={'center'}
        justifyContent={'center'}
        width={'60%'}
      >
        <Typography sx={{ fontSize: '20px', color: PRIMARY_MAIN, fontWeight: 600 }}>
          THANH TOÁN QUA VÍ ĐIỆN TỬ MOMO
        </Typography>
        {dataPayment.totalPeople >= 5 && (
          <Box
            padding={2}
            sx={{ background: '#FF173D', color: '#fff', position: 'absolute', borderRadius: '10px', top: 0, right: 10 }}
          >
            Đã giảm giá 10%
          </Box>
        )}
        <FormProvider methods={methods} style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} direction={{ sm: 'row', xs: 'column' }}>
            <Stack spacing={2} width={'100%'} sx={{ border: '1px solid #dce0e0', borderRadius: '10px', padding: 2 }}>
              <Typography sx={{ fontSize: '18px', color: GRAY_600, fontWeight: 400, textAlign: 'center' }}>
                Thông tin tour du lịch
              </Typography>
              <Stack spacing={1.5}>
                <RHFTextField name="orderInfo" label="Tên tour du lịch" />
                <RHFTextField name="orderId" label="Mã giao dịch" />
                <RHFTextField name="totalPeople" label="Số người tham gia" />
              </Stack>
            </Stack>
            <Stack spacing={2} width={'100%'} sx={{ border: '1px solid #dce0e0', borderRadius: '10px', padding: 2 }}>
              <Typography sx={{ fontSize: '18px', color: GRAY_600, fontWeight: 400, textAlign: 'center' }}>
                Thông tin khách hàng
              </Typography>
              <Stack spacing={1.5}>
                <RHFTextField fullWidth name="userName" label="Họ và tên" />
                <RHFTextField fullWidth name="userPhoneNumber" label="Số điện thoại" />
                <RHFTextField fullWidth name="userEmail" label="Email" />
              </Stack>
            </Stack>
          </Stack>
          <Stack mt={2} direction={'row'} alignItems={'end'} width={'100%'} justifyContent={'space-between'}>
            <Typography sx={{ fontSize: '14px', color: PRIMARY_LIGHT, fontWeight: 300 }}>
              Vui lòng kiểm tra các thông tin trước khi thanh toán!
            </Typography>
            <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-end'}>
              <Typography sx={{ fontSize: '30px', color: GRAY_800, fontWeight: 600 }}>Tổng tiền:</Typography>
              <Typography sx={{ fontSize: '30px', color: '#e84118', fontWeight: 600 }}>
                {(dataPayment.totalPeople >= 5
                  ? params.tourId * dataPayment.totalPeople * 0.9
                  : params.tourId * dataPayment.totalPeople
                ).toLocaleString('vi-VN')}{' '}
                đ
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={4} mt={2}>
            <Button variant="outlined" fullWidth onClick={() => push('/')}>
              Hủy
            </Button>
            <LoadingButton type="submit" variant="contained" fullWidth sx={{}}>
              Thanh toán
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default PaymentMomo;
