'use client';

import { GRAY_500, GRAY_600, GRAY_700, GRAY_800, PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PostItem = () => {
  const [openDetail, setOpenDetail] = useState(false);

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <>
      <Stack
        sx={{
          padding: '24px',
          borderRadius: '15px',
          border: '1px solid rgba(145, 158, 171, 0.24)',
          ':hover': {
            border: `1px solid ${PRIMARY_MAIN}`,
          },
          cursor: 'pointer',
        }}
        onClick={() => setOpenDetail(true)}
      >
        <Stack spacing={3} direction={'row'} alignItems={'center'}>
          <Box
            component={'img'}
            src="/images/home/destinations/ha-noi.jpg"
            alt=""
            width={'100px'}
            height={'100px'}
            sx={{ borderRadius: '10px', objectFit: 'cover' }}
          />
          <Stack spacing={1}>
            <Typography
              sx={{
                fontSize: '20px',
                color: PRIMARY_MAIN,
                fontWeight: 500,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                WebkitLineClamp: 2,
              }}
            >
              Nhạc của Vũ. được nhiều người dùng để cầu hôn.
            </Typography>
            <Typography sx={{ fontSize: '16px', color: GRAY_800, fontWeight: 500 }}>
              Nhạc của Vũ. được nhiều người dùng để cầu hôn. Và đây là cách "Hoàng Tử Indie" cầu hôn vợ của mình.
            </Typography>
            <Typography sx={{ fontSize: '14px', color: GRAY_500, fontWeight: 500 }}>
              15/1/2024 - Đăng bởi Tuyên
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Dialog
        open={openDetail}
        onClose={handleCloseDetail}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        sx={{ '& .MuiDialog-paper': { maxWidth: '1000px !important' } }}
      >
        <DialogTitle sx={{ fontSize: '18px', color: GRAY_800, fontWeight: 500 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} direction={{ sm: 'row', xs: 'column-reverse' }}>
            <Stack spacing={2}>
              <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
                <Box
                  component={'img'}
                  src="/images/home/destinations/ha-noi.jpg"
                  alt=""
                  width={'60px'}
                  height={'60px'}
                  sx={{ objectFit: 'cover', borderRadius: '50%', border: '2px solid #fff', flexShrink: 0 }}
                />
                <Stack>
                  <Typography sx={{ fontSize: '16px', color: GRAY_800, fontWeight: 400 }}>Duc Tuyen</Typography>
                  <Typography sx={{ fontSize: '14px', color: GRAY_500, fontWeight: 400 }}>
                    ductuyen@gmail.com
                  </Typography>
                </Stack>
              </Stack>
              <Typography sx={{ fontSize: '16px', color: GRAY_800, fontWeight: 300 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veniam assumenda esse dicta odio, sed
                dolore aliquam velit et ad quisquam? Quibusdam quis quasi facilis perspiciatis quia nesciunt ab natus!
              </Typography>
              <Typography sx={{ fontSize: '12px', color: GRAY_500, fontWeight: 300 }}>Đăng ngày: 12/1/2024</Typography>
            </Stack>
            <Box
              component={'img'}
              src="/images/home/destinations/ha-noi.jpg"
              alt=""
              width={{ sm: '30%', xs: '100%' }}
              height={'auto'}
              sx={{ objectFit: 'cover', borderRadius: '10px' }}
            />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostItem;
