import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { Box, Stack } from '@mui/material';
import { IProfile } from '../common/interface';

interface Props {
  profileInfo?: IProfile;
}

const UserInforHeader = ({ profileInfo }: Props) => {
  return (
    <Stack sx={{ position: 'relative' }}>
      <Box
        component={'img'}
        src="/images/walpaper.jpg"
        alt="wall-paper"
        sx={{ objectFit: 'cover' }}
        width={'100%'}
        height={'auto'}
      />
      <Container sx={{ position: 'absolute', bottom: -115, left: { sm: 110, xs: 0 } }}>
        <Stack direction={'row'} spacing={3} alignItems={'center'}>
          <Box
            component={'img'}
            src={profileInfo?.avatar?.url || '/images/luffy.jpg'}
            alt="wall-paper"
            sx={{
              objectFit: 'cover',
              border: '2px solid #fff',
              borderRadius: '50%',
              boxShadow: '0px 3.1px 12.4px 0px rgba(0, 0, 0, 0.25)',
              flexShrink: 0,
            }}
            width={'168px'}
            height={'168px'}
          />
          <TitlePage text={profileInfo?.name || 'User update'} color="#212B36" />
        </Stack>
      </Container>
    </Stack>
  );
};

export default UserInforHeader;
