'use client';

import { FormProvider, RHFTextField } from '@/common/components/hook-form';
import { RHFUploadSingleFile } from '@/common/components/hook-form/RHFUpload';
import { GRAY_800 } from '@/common/constants/colors';
import { fData } from '@/common/utils/formatNumber';
import { FormHelperText, Paper, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

const FormCreatePost = () => {
  const methods = useForm({});
  const {
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = methods;
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          'image',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );
      }
    },
    [setValue],
  );
  const onSubmit = () => {};
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadiusL: '15px',
        padding: 3,
        width: { sm: '35%', xs: '100%' },
        height: 'fit-content',
        position: 'sticky',
        top: 0,
      }}
    >
      <Typography sx={{ fontSize: '18px', color: GRAY_800, fontWeight: 500, mb: '16px' }}>
        Đăng bài viết lên diễn đàn tại đây
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1.5}>
          <RHFTextField name="" multiline minRows={2} maxRows={2} label="Tiêu đề" />
          <RHFTextField name="" label="Mô tả ngắn" />
          <RHFTextField name="" multiline minRows={3} maxRows={6} label="Nội dung" />
          <RHFUploadSingleFile
            name="image"
            maxSize={3145728}
            onDrop={handleDrop}
            accept={{ 'image/*': [] }}
            isContainImg
            helperText={
              <>
                <FormHelperText sx={{ color: 'red', paddingLeft: '16px', marginTop: 1 }}>
                  {errors?.image?.message}
                </FormHelperText>
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Cho phép *.png
                  <br />
                  Dung lượng lớn nhất: {fData(3145728)}
                </Typography>
              </>
            }
          />
        </Stack>
      </FormProvider>
    </Paper>
  );
};

export default FormCreatePost;
