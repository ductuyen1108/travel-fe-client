import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { Box, Typography } from '@mui/material';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
      <video
        src="/videos/video.mp4"
        muted
        autoPlay
        loop
        typeof="video.mp4"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.9,
          objectFit: 'cover',
        }}
      ></video>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', mixBlendMode: 'overlay' }}></Box>
      <Box sx={{ position: 'relative', zIndex: 10, py: { md: '250px', sm: '200px', xs: '100px' } }}>
        <Container>
          <Box sx={{ textAlign: 'center', mb: '20px' }}>
            <TitlePage text="Bạn muốn đi đâu?" color="white" />
            <Typography sx={{ fontSize: { md: '16px', sm: '16px', xs: '12px' }, color: 'white', fontWeight: 500 }}>
              Những chuyến đi, trải nghiệm và địa điểm. Tất cả trong một dịch vụ
            </Typography>
          </Box>
          <SearchForm />
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
