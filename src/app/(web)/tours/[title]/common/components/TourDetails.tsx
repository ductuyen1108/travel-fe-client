import parse from 'html-react-parser';
import { Box, Stack, Grid, Typography, SxProps, Rating } from '@mui/material';
import { TitlePage } from '@/common/config/text';
import Iconify from '@/common/components/iconify/Iconify';
import RatingReview from './RatingReview';

const styledStack: SxProps = {
  justifyContent: 'center',
  alignItems: 'center',
};

const styledTypo: SxProps = {
  fontSize: '14px',
  fontWeight: 400,
  color: '#222222',
};

const styledIcon = { width: '40px', height: '40px', color: '#222' };

const styledBoxInforTour: SxProps = { py: '20px', borderTop: '1px solid #dce0e0' };

const TourDetails = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <TitlePage text="Grand Switzerland" color="#000" />
        <Grid
          container
          sx={{ mt: '20px', py: '25px', borderTop: '1px dashed #dce0e0', borderBottom: '1px dashed #dce0e0' }}
          rowSpacing={3}
        >
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'fluent:clock-24-regular'} style={styledIcon} />
              <Typography sx={styledTypo}>6 ngày</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'fa-regular:id-card'} style={styledIcon} />
              <Typography sx={styledTypo}>12+</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'uil:schedule'} style={styledIcon} />
              <Typography sx={styledTypo}>May, Jun, Jul</Typography>
            </Stack>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Stack spacing={1} sx={styledStack}>
              <Iconify icon={'ph:user-light'} style={styledIcon} />
              <Typography sx={styledTypo}>Khả dụng 50</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {parse(
          'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.',
        )}
      </Box>
      <Stack mt="50px">
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Khởi hành từ:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              Bến xe Gia Lâm, Hà Nội
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Ngày / Giờ khởi hành:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              8 giờ sáng ngày 20/11/2023
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Thời gian chuyến đi:
            </Grid>
            <Grid item sm={8} xs={12} sx={{ fontWeight: 300 }}>
              3 ngày 2 đêm
            </Grid>
          </Grid>
        </Box>
        <Box sx={styledBoxInforTour}>
          <Grid container rowSpacing={2}>
            <Grid item sm={4} xs={12} sx={{ fontSize: '16px' }}>
              Bản đồ địa điểm:
            </Grid>
            <Grid item sm={8} xs={12}>
              <iframe
                title="Google Map"
                width="100%"
                height="300px"
                frameBorder="0"
                style={{ border: '2px solid #dce0e0' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5876993158727!2d105.86325327513217!3d20.275927181191687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31367eb022ad8d53%3A0x8b48ec715231c285!2zQsOhaSDEkMOtbmggUGFnb2Rh!5e0!3m2!1svi!2s!4v1700836182922!5m2!1svi!2s"
                allowFullScreen
              />
            </Grid>
          </Grid>
        </Box>
        <Stack>
          <Typography sx={{ fontSize: '18px', color: '#000', fontWeight: 600 }}>4 Đánh giá</Typography>
          <Box sx={{ py: '30px', borderTop: '1px solid #dce0e0', borderBottom: '1px solid #dce0e0', mt: '10px' }}>
            <RatingReview
              accomodation={4.5}
              destination={4.5}
              meals={4.5}
              transport={4.5}
              valueOfMoney={4.5}
              overall={4.5}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TourDetails;
