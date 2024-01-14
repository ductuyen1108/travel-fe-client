'use client';

import { useState } from 'react';
import { Box, Typography, Stack, Button, IconButton, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useRouter } from 'next/navigation';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import FormatPrice from '@/common/config/price';
import { IBookTour } from '../../tours/[title]/common/interface';
import { convertStatusTour } from '@/common/utils/convertData';
import { useDeleteBookTour } from '../../tours/[title]/common/hooks/useDeleteBookTour';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import Iconify from '@/common/components/iconify/Iconify';
import { useDispatch } from '@/common/redux/store';
import { setDataPayment } from '../../thanh-toan/common/slice';
import { randomText } from '@/common/utils/randomText';

interface TourItemProps {
  prop: IBookTour;
}

const TourBookItem = ({ prop }: TourItemProps) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: mutateDeleteTour } = useDeleteBookTour({
    onSuccess: () => {
      showSuccessSnackbar('Xóa tour đã đặt thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa tour đã đặt thất bại');
    },
  });
  const handleDeleteBookTour = (id: number) => {
    console.log('id: ', id);
    mutateDeleteTour(id);
    setOpen(false);
  };

  const handlePayment = () => {
    dispatch(
      setDataPayment({
        orderId: randomText(prop?.tour?.title),
        orderInfo: prop?.tour?.title,
        totalPeople: 3,
        userEmail: prop?.email,
        userName: prop.name,
        userPhoneNumber: prop?.phoneNumber,
      }),
    );
    push(`/thanh-toan/${prop?.tour?.tourDetail?.price}`);
  };

  return (
    <Box
      sx={{
        border: '1px solid #dce0e0',
        borderRadius: '5px',
        ':hover': {
          boxShadow: '0 22px 40px rgba(0,0,0,.15)',
          transform: 'translateY(-4px)',
          transitionDuration: '0.2s',
        },
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        sx={{
          backgroundImage: `url(${prop?.tour?.image?.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '280px',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            background: '#FF4A52',
            padding: '3px 10px',
            position: 'absolute',
            bottom: 20,
            transform: isHover ? 'scale(1.2)' : 'unset',
            transitionDuration: '0.2s',
          }}
        >
          <Typography sx={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>
            {FormatPrice({ price: prop?.tour?.tourDetail?.price })}
          </Typography>
        </Box>
        <IconButton
          sx={{
            background: 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)',
            position: 'absolute',
            top: 10,
            right: 10,
            borderRadius: '50%',
            ':hover': { background: 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)' },
          }}
          onClick={() => setOpen(true)}
        >
          <Iconify icon={'fluent:delete-12-regular'} color={'#fff'} />
        </IconButton>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Bạn có chắc chắn muốn xóa tour này?'}</DialogTitle>
        <DialogActions>
          <Button variant="contained" color="error" onClick={() => handleDeleteBookTour(prop?.id)}>
            Xóa
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ p: '15px' }}>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000',
            ':hover': { color: PRIMARY_MAIN, cursor: 'pointer' },
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 1,
          }}
        >
          {prop?.tour?.title}
        </Typography>
        <Typography sx={{ fontSize: '15px', fontWeight: 400, color: '#222', pt: '10px', pb: '15px' }}>
          {prop?.tour?.city?.cityName}
        </Typography>
        <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
          <Box
            sx={{
              padding: 1.5,
              background: prop?.status === 'UNPAID' ? '#ff4d4d' : '#72EDF2',
              borderRadius: '10px',
              fontSize: '12px',
              color: '#FFFFFF',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            {convertStatusTour(prop?.status)}
          </Box>
          {prop?.status === 'UNPAID' && (
            <Button variant="outlined" sx={{ py: 1, borderRadius: '12px' }} onClick={handlePayment}>
              Thanh toán
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default TourBookItem;
