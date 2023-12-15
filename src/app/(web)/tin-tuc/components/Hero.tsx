import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/images/tin-tuc/hero.jpg) no-repeat center/cover, lightgray 50%`,
        height: '550px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Khám phá nhiều bài viết hay" color="#fff" />
          <DescPage
            text="Thông qua các bài viết được cập nhật liên tục, du khách có thể nắm bắt thêm được nhiều thông tin hữu ích về du lịch."
            color="#fff"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
