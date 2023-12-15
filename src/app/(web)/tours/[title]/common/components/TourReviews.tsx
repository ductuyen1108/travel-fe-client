import { Avatar, Box, Stack, Typography } from '@mui/material';
import RatingReview from './RatingReview';

const TourReviews = () => {
  return (
    <Box>
      <Box sx={{ py: '30px', borderBottom: '1px dashed #dce0e0' }}>
        <Stack spacing={3} direction={'row'}>
          <Avatar
            src="/images/tours/hero.jpg"
            alt=""
            sx={{ width: '70px', height: '70px', boxShadow: '0 0px 15px rgba(0,0,0,.3)' }}
          />
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#000' }}>Jessica Medina</Typography>
            <Typography sx={{ fontSize: '11px', fontWeight: 500, color: '#999' }}>
              December 15, 2016 at 4:26 pm
            </Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 300, color: '#000', py: '10px' }}>
              Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe.
              Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.
              Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike
              design.
            </Typography>
            <RatingReview accomodation={4.5} destination={5} meals={3.5} transport={5} valueOfMoney={5} overall={4.5} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default TourReviews;
