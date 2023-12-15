'use client';

import { Box, Typography, Stack, InputBase, Button, Grid, styled, Rating } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendOutlined from '@mui/icons-material/SendOutlined';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FormTourReview = () => {
  return (
    <Box mt="30px" component="form">
      <Typography sx={{ fontSize: '18px', color: '#000', fontWeight: 600 }}>Viết đánh giá</Typography>
      <Stack spacing={3} sx={{ py: '30px', borderTop: '1px solid #dce0e0' }}>
        <InputBase
          required
          multiline
          minRows={5}
          maxRows={7}
          fullWidth
          sx={{ borderRadius: '5px', border: '1px solid #dce0e0', p: '10px 15px' }}
          placeholder="Bình luận"
        />
        <Stack spacing={3} direction={'row'}>
          <InputBase
            required
            fullWidth
            sx={{ borderRadius: '5px', border: '1px solid #dce0e0', p: '5px 15px' }}
            placeholder="Họ và tên"
          />
          <InputBase
            fullWidth
            type="email"
            sx={{ borderRadius: '5px', border: '1px solid #dce0e0', p: '5px 15px' }}
            placeholder="Email"
          />
        </Stack>
        <Stack spacing={2} direction={'row'} alignItems={'center'}>
          <Typography sx={{ fontSize: '15px', fontWeight: 300, color: '#000' }}>Ảnh đại diện:</Typography>
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            sx={{ p: '8px 20px', width: 'fit-content' }}
          >
            Chọn file ảnh
            <VisuallyHiddenInput type="file" />
          </Button>
        </Stack>
        <Box>
          <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#000', mb: '30px' }}>
            Đánh giá của bạn về dịch vụ của chúng tôi:
          </Typography>
          <Grid container rowSpacing={3}>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Chỗ ở</Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Điểm đến</Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Bữa ăn phục vụ</Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>
                  Phương tiện di chuyển
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Giá trị tour</Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
            <Grid item container md={6}>
              <Grid item sm={6} xs={6}>
                <Typography sx={{ fontSize: '14px', color: '#222', fontWeight: '500' }}>Tổng thể</Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Rating defaultValue={0} precision={0.5} size="small" sx={{ color: '#2ea2cc' }} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Button
          type="submit"
          variant="contained"
          startIcon={<SendOutlined />}
          sx={{ width: 'fit-content', p: '10px 20px', marginTop: '20px' }}
        >
          Gửi đánh giá
        </Button>
      </Stack>
    </Box>
  );
};

export default FormTourReview;
