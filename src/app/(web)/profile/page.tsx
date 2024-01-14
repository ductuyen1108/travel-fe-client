'use client';

import { Stack } from '@mui/material';
import UserInforHeader from './components/UserInforHeader';
import SideBar from './components/Sidebar';
import Container from '@/common/config/container';
import Content from './components/Content';
import Navbar from '@/common/components/navbar';
import Footer from '@/common/components/footer';
import { useGetProfile } from './common/hooks/useGetProfile';
import { useSelector } from '@/common/redux/store';

const Profile = () => {
  const { profile } = useSelector((state) => state.authLogin);
  return (
    <section>
      <Navbar />
      <Stack>
        <UserInforHeader profileInfo={profile} />
        <Container sx={{ mt: '150px', mb: '50px' }}>
          <Stack width={'100%'} direction={{ sm: 'row', xs: 'column' }} spacing={2}>
            <SideBar />
            <Content />
          </Stack>
        </Container>
      </Stack>
      <Footer />
    </section>
  );
};

export default Profile;
