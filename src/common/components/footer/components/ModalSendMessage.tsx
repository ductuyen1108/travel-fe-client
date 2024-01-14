'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box, Stack, Typography } from '@mui/material';
import { GRAY_700 } from '@/common/constants/colors';
import { FormProvider, RHFTextField } from '../../hook-form';
import { useForm } from 'react-hook-form';
import { schemaSendMessage } from '../common/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useSendMessage } from '../common/hooks/useSendMessage';
import { IParamsContact } from '../common/service';
import { LoadingButton } from '@mui/lab';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalSendMessage() {
  const [open, setOpen] = React.useState(false);
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { mutate, isLoading } = useSendMessage({
    onSuccess: () => {
      showSuccessSnackbar('Gửi thư góp ý thành công!');
      reset({ name: '', company: '', email: '', message: '', phoneNumber: '' });
      setOpen(false);
    },
    onError: () => {
      showErrorSnackbar('Gửi thư góp ý thất bại!');
    },
  });

  const methods = useForm({
    resolver: yupResolver(schemaSendMessage),
  });
  const {
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitting },
  } = methods;

  const onSubmit = (data: IParamsContact) => {
    const dataSendMessage: IParamsContact = {
      name: data.name,
      company: data.company,
      email: data.email,
      message: data.message,
      phoneNumber: data.phoneNumber,
    };
    mutate(dataSendMessage);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset({ name: '', company: '', email: '', message: '', phoneNumber: '' });
  };

  return (
    <React.Fragment>
      <Typography
        sx={{ fontSize: '16px', fontWeight: 400, color: GRAY_700, cursor: 'pointer' }}
        onClick={handleClickOpen}
      >
        Hòm thư góp ý
      </Typography>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogTitle sx={{ fontSize: '24px', fontWeight: 600, textAlign: 'center' }}>
          Hãy góp ý với chúng tôi để DT Travel ngày càng phát triển hơn nhé!
        </DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box padding={'24px 32px'}>
            <Stack spacing={2}>
              <RHFTextField name="name" label="Họ và tên" />
              <RHFTextField name="phoneNumber" label="Số điện thoại" />
              <RHFTextField name="email" label="Email" />
              <RHFTextField name="company" label="Công ty" />
              <RHFTextField name="message" label="Lời nhắn" />
            </Stack>
            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} mt={2}>
              <Button variant="outlined" onClick={handleClose} sx={{ width: '100px' }}>
                Hủy
              </Button>
              <LoadingButton loading={isSubmitting} variant="contained" type="submit" sx={{ width: '100px' }}>
                Gửi
              </LoadingButton>
            </Stack>
          </Box>
        </FormProvider>
      </Dialog>
    </React.Fragment>
  );
}
