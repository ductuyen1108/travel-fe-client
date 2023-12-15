import { Paper, Stack, Box, SxProps, InputBase, Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaidIcon from '@mui/icons-material/Paid';
import SearchIcon from '@mui/icons-material/Search';
import { GRADIENT_COLOR } from '@/common/constants/colors';

const styledPaper: SxProps = {
  backgroundColor: '#ecf0f1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '24px',
};

const SearchForm = () => {
  return (
    <Paper
      component="form"
      sx={{
        padding: '30px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      <Stack direction={{ md: 'row', sm: 'column', xs: 'column' }} spacing={3}>
        <Box>
          <Typography mb="5px">Điểm đến của bạn:</Typography>
          <Paper sx={styledPaper} elevation={0}>
            <InputBase
              sx={{ m: '5px 10px 5px 25px', width: '100%' }}
              placeholder="Nhập địa điểm"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <LocationOnIcon sx={{ color: 'gray', mr: '20px' }} />
          </Paper>
        </Box>
        <Box>
          <Typography mb="5px">Ngày bắt đầu:</Typography>
          <Paper sx={styledPaper} elevation={0}>
            <InputBase
              sx={{ m: '5px 25px 5px 25px', width: '100%' }}
              placeholder="Nhập ngày đi"
              type="date"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>
        </Box>
        <Box>
          <Typography mb="5px">Giá:</Typography>
          <Paper sx={styledPaper} elevation={0}>
            <InputBase
              sx={{ m: '5px 25px 5px 25px', width: '100%' }}
              placeholder="Nhập giá"
              type="number"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <PaidIcon sx={{ color: 'gray', mr: '20px' }} />
          </Paper>
        </Box>
      </Stack>
      <Button
        startIcon={<SearchIcon />}
        variant="contained"
        sx={{
          mb: '-50px',
          padding: '10px 20px',
          backgroundImage: GRADIENT_COLOR,
          width: 'fit-content',
          borderRadius: '24px',
        }}
      >
        TÌM KIẾM
      </Button>
    </Paper>
  );
};

export default SearchForm;
