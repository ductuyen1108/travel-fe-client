'use client';

import Container from '@/common/config/container';
import { DescPage, TitlePage } from '@/common/config/text';
import { Box, Grid } from '@mui/material';
import NewsItem from '@/app/(web)/tin-tuc/common/components/NewsItem';
import { useGetLatestNews } from '@/app/(web)/tin-tuc/common/hooks/useGetLatestNews';

const Articles = () => {
  const { listLatestNews } = useGetLatestNews({ numberOfNews: 3 });
  return (
    <Box sx={{ my: '100px' }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <TitlePage text="Bài viết & Mẹo" color="#000000" />
          <DescPage text="Khám phá một số bài viết hay nhất về các địa điểm trên Việt Nam" color="#8D9199" />
        </Box>
        <Grid container columnSpacing={3} rowSpacing={3} mt="50px">
          {listLatestNews?.map((item) => (
            <Grid key={item.id} item md={4}>
              <NewsItem detail={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles;
