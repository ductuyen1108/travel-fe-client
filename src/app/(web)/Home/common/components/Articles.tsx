import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Grid } from '@mui/material';
import NewsItem from '@/app/(web)/tin-tuc/common/components/NewsItem';

const Articles = () => {
  return (
    <Box sx={{ my: '100px' }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Bài viết & Mẹo" color="#000000" />
          <DescPage text="Khám phá một số bài viết hay nhất về các địa điểm trên Việt Nam" color="#8D9199" />
        </Box>
        <Grid container columnSpacing={3} rowSpacing={3} mt="50px">
          {[1, 2, 3].map((item) => (
            <Grid key={item} item md={4}>
              <NewsItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles;
