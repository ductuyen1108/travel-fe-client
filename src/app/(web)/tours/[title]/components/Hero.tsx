import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/tours/hero.jpg) no-repeat center/cover, lightgray 50%`,
        height: '550px',
        display: 'flex',
        alignItems: 'center',
      }}
    ></Box>
  );
};

export default Hero;
