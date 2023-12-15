import Container from '@/common/config/container';
import { TitlePage } from '@/common/config/text';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '550px',
        display: 'flex',
        pb: '70px',
        alignItems: 'flex-end',
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/tin-tuc/hero.jpg) no-repeat center/cover, lightgray 50%',
      }}
    >
      <Container>
        <TitlePage text="Memorial Day to Someone Told Me to Travel" color="#fff" />
        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#fff', textTransform: 'uppercase' }}>
          DECEMBER 10, 2016
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
