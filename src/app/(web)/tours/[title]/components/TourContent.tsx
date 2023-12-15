import Container from '@/common/config/container';
import { Grid, Box } from '@mui/material';
import TourDetails from '../common/components/TourDetails';
import TourReviews from '../common/components/TourReviews';
import FormTourReview from '../common/components/FormTourReview';
import SimilarTours from '../common/components/SimilarTours';
import TourSubmitForm from '../common/components/TourSubmitForm';
import MoreInfor from '../common/components/MoreInfor';

const TourContent = () => {
  return (
    <Box my="50px">
      <Container>
        <Grid container columnSpacing={5} rowSpacing={5}>
          <Grid item sm={8} xs={12}>
            <TourDetails />
            {[1, 2, 3, 4].map((item) => (
              <TourReviews key={item} />
            ))}
            <FormTourReview />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TourSubmitForm />
            <MoreInfor />
          </Grid>
        </Grid>
      </Container>
      <SimilarTours />
    </Box>
  );
};

export default TourContent;
