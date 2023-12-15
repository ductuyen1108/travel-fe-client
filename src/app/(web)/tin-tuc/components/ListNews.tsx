import Container from '@/common/config/container';
import { Grid, Box, Pagination } from '@mui/material';
import NewsItem from '../common/components/NewsItem';

const ListNews = () => {
  return (
    <Container
      sx={{
        mt: '50px',
        mb: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container columnSpacing={4} rowSpacing={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((it) => (
          <Grid key={it} item md={4}>
            <NewsItem />
          </Grid>
        ))}
      </Grid>
      <Pagination count={10} variant="outlined" color="primary" />
    </Container>
  );
};

export default ListNews;
