import Iconify from '@/common/components/iconify/Iconify';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Stack, Typography } from '@mui/material';
import { useGetProfile } from '../common/hooks/useGetProfile';
import { convertDate, convertGender } from '@/common/utils/convertData';
import { useCallback, useState } from 'react';
import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { useForm } from 'react-hook-form';
import { useGetDistrictByProvinceId, useGetProvinces, useGetWardByDistrictId } from '../common/hooks/useGetAddress';
import RHFSelectPagination from '@/common/components/hook-form/RHFSelectPagination';
import RHFDatePicker from '@/common/components/hook-form/RHFDatePicker';
import { IDataFormEditProfile, ISubmitEditProfile } from '../common/interface';
import useDeepEffect from '@/common/hooks/useDeepEffect';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useEditProfile } from '../common/hooks/useEditProfile';
import ModalChangePassword from './ModalChangePassword';
import { useSelector } from '@/common/redux/store';

const SideBar = () => {
  const { profile } = useSelector((state) => state.authLogin);
  const { profileData } = useGetProfile(true);
  const [open, setOpen] = useState(false);
  const { useDeepCompareEffect } = useDeepEffect();
  const { showSuccessSnackbar, showErrorSnackbar } = useShowSnackbar();
  const { mutate: mutateEdit } = useEditProfile({
    onSuccess: () => {
      showSuccessSnackbar('Chỉnh sửa thông tin cá nhân thành công');
    },
    onError: () => {
      showErrorSnackbar('Chỉnh sửa thông tin cá nhân thất bại');
    },
  });
  const methods = useForm<ISubmitEditProfile>({
    defaultValues: {
      address: profile?.address,
      birthDate: profile?.birthDate,
      email: profile?.email,
      name: profile?.name,
    },
  });
  const { handleSubmit, reset, watch } = methods;

  const { dataProvinces } = useGetProvinces();
  const { dataDistrict } = useGetDistrictByProvinceId(watch<any>('provinceId')?.code);
  const { dataWard } = useGetWardByDistrictId(watch<any>('districtId')?.code);

  const onSubmit = (data: ISubmitEditProfile) => {
    const dataEdit: IDataFormEditProfile = {
      address: data.address,
      avatarId: profile?.avatar?.id || 0,
      birthDate: data.birthDate,
      districtId: data.districtId?.code,
      provinceId: data.provinceId?.code,
      email: data.email,
      name: data.name,
      wardId: data.wardId?.code,
    };
    mutateEdit(dataEdit);
  };

  useDeepCompareEffect(() => {
    if (profile) {
      const dataVN = {
        address: profile?.address,
        birthDate: profile?.birthDate,
        email: profile?.email,
        name: profile?.name,
      };
      reset(dataVN);
    }
  }, [profile]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: { sm: '30%', xs: '100%' },
        borderRadius: '10px',
        position: 'sticky',
        top: 5,
        height: 'fit-content',
      }}
    >
      <Stack spacing={2} padding={3}>
        <Typography sx={{ fontSize: { sm: '24px', xs: '18px' }, fontWeight: 600, color: '#212B36' }}>
          Giới thiệu
        </Typography>
        <InforItem icon="ic:baseline-location-on" content={profileData?.address || 'chưa cập nhật'} title="Sống tại" />
        <InforItem
          icon="fe:birthday-cake"
          content={convertDate({ data: profileData?.birthDate || '' })}
          title="Ngày sinh"
        />
        <InforItem icon="ic:outline-email" content={profileData?.email || 'chưa cập nhật'} title="Email" />
        <Button variant="contained" sx={{ borderRadius: '10px' }} onClick={handleClickOpen}>
          Chỉnh sửa thông tin cá nhân
        </Button>
        <ModalChangePassword />
        <Dialog open={open} onClose={handleClose}>
          <Stack spacing={2} p={3}>
            <DialogTitle>{'Chỉnh sửa thông tin cá nhân'}</DialogTitle>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <RHFTextField name="name" label="Họ và tên" />
                <RHFTextField name="email" label="Email" />
                <RHFDatePicker name="birthDate" label={'Ngày sinh'} size="small" />
                <RHFTextField name="address" label="Địa chỉ cụ thể" />
                <RHFSelectPagination
                  name="provinceId"
                  options={dataProvinces || []}
                  labelProp="name"
                  label={'Tỉnh / Thành phố'}
                  disableClear
                  size="small"
                />
                <RHFSelectPagination
                  name="districtId"
                  options={dataDistrict || []}
                  labelProp="name"
                  label={'Quận / Huyện'}
                  disableClear
                  size="small"
                />
                <RHFSelectPagination
                  name="wardId"
                  options={dataWard || []}
                  labelProp="name"
                  label={'Phường/ Xã'}
                  disableClear
                  size="small"
                />
              </Stack>
              <DialogActions>
                <Button variant="outlined" onClick={handleClose}>
                  Hủy
                </Button>
                <Button type="submit" variant="contained" onClick={handleClose} autoFocus>
                  Xác nhận
                </Button>
              </DialogActions>
            </FormProvider>
          </Stack>
        </Dialog>
      </Stack>
    </Paper>
  );
};

const InforItem = ({ icon, content, title }: { icon: string; content: string; title: string }) => {
  return (
    <Stack alignItems={'center'} spacing={2} direction={'row'}>
      <Iconify icon={icon} sx={{ width: '24px', height: '24px' }} />
      <Typography>
        {title} <strong>{content}</strong>
      </Typography>
    </Stack>
  );
};

export default SideBar;
