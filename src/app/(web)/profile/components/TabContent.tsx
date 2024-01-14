'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Dialog, DialogActions, DialogTitle, IconButton, Stack, Tooltip } from '@mui/material';
import PostItem from '../../dien-dan/components/PostItem';
import { useGetListPost } from '../../dien-dan/common/hooks/useGetListPost';
import { useGetProfile } from '../common/hooks/useGetProfile';
import { useGetListBookTour } from '../common/hooks/useGetListBookTour';
import PostItemLoading from '../../dien-dan/components/PostItemLoading';
import Iconify from '@/common/components/iconify/Iconify';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useDeletePost } from '../../dien-dan/common/hooks/useDeletePost';
import EmptyData from '@/common/components/EmptyData';
import TourBookItem from './TourBookItem';
import { useSelector } from '@/common/redux/store';

export default function TabContent() {
  const [value, setValue] = React.useState('1');
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { profile } = useSelector((state) => state.authLogin);
  const { dataNewsPost, isLoadingData } = useGetListPost({ userId: profile?.userId || 0 });
  const { listBookTourData, isLoadingBookTourData } = useGetListBookTour({});

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate: mutateDeletePost } = useDeletePost({
    onSuccess: () => {
      showSuccessSnackbar('Xóa bài viết thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa bài viết thất bại');
    },
  });

  const handleDeletePost = (id: number) => {
    console.log('id: ', id);
    mutateDeletePost({ ids: [id] });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Bài viết đã đăng" value="1" sx={{ textTransform: 'none' }} />
            <Tab label="Tour đã book" value="2" sx={{ textTransform: 'none' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack spacing={2}>
            {isLoadingData ? (
              <PostItemLoading />
            ) : dataNewsPost?.items?.length === 0 ? (
              <EmptyData />
            ) : (
              dataNewsPost?.items?.map((item) => (
                <Box key={item.id} position={'relative'}>
                  <PostItem postDetail={item} />
                  <Tooltip
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                    }}
                    title="Xóa bài viết"
                  >
                    <IconButton onClick={() => setOpen(true)}>
                      <Iconify icon={'fluent:delete-12-regular'} color={'#333'} />
                    </IconButton>
                  </Tooltip>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{'Bạn có chắc chắn muốn xóa bài viết này?'}</DialogTitle>
                    <DialogActions>
                      <Button variant="contained" color="error" onClick={() => handleDeletePost(item.id)}>
                        Xóa
                      </Button>
                      <Button variant="outlined" onClick={handleClose} autoFocus>
                        Hủy
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              ))
            )}
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={3}>
            {listBookTourData?.items?.length === 0 ? (
              <EmptyData />
            ) : (
              listBookTourData?.items?.map((item) => (
                <TourBookItem
                  key={item.id}
                  prop={{
                    email: item?.email,
                    id: item?.id,
                    name: item?.name,
                    phoneNumber: item?.phoneNumber,
                    status: 'PAID',
                    tour: item?.tour,
                  }}
                />
              ))
            )}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
