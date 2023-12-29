'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TourItem from '../../tours/common/components/TourItem';
import { IconButton, Stack, Tooltip } from '@mui/material';
import PostItem from '../../dien-dan/components/PostItem';
import { useGetListPost } from '../../dien-dan/common/hooks/useGetListPost';
import { useGetProfile } from '../common/hooks/useGetProfile';
import { useGetListBookTour } from '../common/hooks/useGetListBookTour';
import PostItemLoading from '../../dien-dan/components/PostItemLoading';
import Iconify from '@/common/components/iconify/Iconify';
import useShowSnackbar from '@/common/hooks/useShowSnackbar';
import { useDeleteBookTour } from '../../tours/[title]/common/hooks/useDeleteBookTour';
import { useDeletePost } from '../../dien-dan/common/hooks/useDeletePost';
import EmptyData from '@/common/components/EmptyData';

export default function TabContent() {
  const [value, setValue] = React.useState('1');
  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();
  const { profileData } = useGetProfile();
  const { dataNewsPost, isLoadingData } = useGetListPost({ userId: profileData?.userId || 0 });
  const { listBookTourData, isLoadingBookTourData } = useGetListBookTour({});

  const { mutate: mutateDeleteTour } = useDeleteBookTour({
    onSuccess: () => {
      showSuccessSnackbar('Xóa tour đã đặt thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa tour đã đặt thất bại');
    },
  });

  const { mutate: mutateDeletePost } = useDeletePost({
    onSuccess: () => {
      showSuccessSnackbar('Xóa bài viết thành công');
    },
    onError: () => {
      showErrorSnackbar('Xóa bài viết thất bại');
    },
  });

  const handleDeleteBookTour = (id: number) => {
    console.log('id: ', id);
    showSuccessSnackbar('Xóa tour đã đặt thành công');
  };

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
                <Box position={'relative'}>
                  <PostItem key={item.id} postDetail={item} />
                  <Tooltip
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                    }}
                    title="Xóa bài viết"
                  >
                    <IconButton onClick={() => handleDeletePost(item.id)}>
                      <Iconify icon={'fluent:delete-12-regular'} color={'#333'} />
                    </IconButton>
                  </Tooltip>
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
                <Box key={item?.id} position={'relative'}>
                  <TourItem
                    rate={4.5}
                    id={item?.tour?.id}
                    country={item?.tour?.city?.cityName}
                    numberOfDays={5}
                    price={item?.tour?.tourDetail?.price}
                    thumbnail={item?.tour?.image?.url}
                    title={item?.tour?.title}
                    totalReviews={2}
                  />
                  {/* <IconButton
                    sx={{
                      background: 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)',
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      borderRadius: '50%',
                      ':hover': { background: 'linear-gradient(135deg, #FEB692 10%, #EA5455 100%)' },
                    }}
                    onClick={() => handleDeleteBookTour(item.id)}
                  >
                    <Iconify icon={'fluent:delete-12-regular'} color={'#fff'} />
                  </IconButton> */}
                </Box>
              ))
            )}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
