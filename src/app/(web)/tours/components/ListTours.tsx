'use client';

import Container from '@/common/config/container';
import { Grid, Pagination, Stack } from '@mui/material';
import TourItem from '../common/components/TourItem';
import { useGetListTours } from '../../Home/common/hooks/usegetListTours';

const ListTours = () => {
  const { listTourData, isLoading } = useGetListTours({ page: 1, limit: 4 });
  return (
    <Container my={'50px'}>
      <Grid container columnSpacing={4} rowSpacing={4}>
        {listTourData?.tours.map((tour) => (
          <Grid key={tour.title} item sm={4} xs={12}>
            <TourItem
              thumbnail={tour.thumbnail}
              price={tour.details.information.price}
              title={tour.title}
              country={tour.country.name}
              totalReviews={tour.reviews.totalReviews}
              numberOfDays={tour.details.schedule.numberOfDays}
            />
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent={'center'} mt="50px" alignItems={'center'}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </Container>
  );
};

export default ListTours;
