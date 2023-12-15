'use client';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Typography } from '@mui/material';
import TourItem from '@/app/(web)/tours/common/components/TourItem';

const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const SimilarTours = () => {
  return (
    <Box sx={{ my: '50px' }}>
      <Box sx={{ maxWidth: '1350px', mx: 'auto', width: '100%', px: '20px' }}>
        <Typography sx={{ px: '25px', fontSize: '20px', fontWeight: 600, color: '#000' }}>Tour tương tự</Typography>
        <Box>
          <Swiper
            style={{ padding: '10px 25px 40px 25px' }}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {datas.map((data) => (
              <SwiperSlide key={data.id} style={{ width: '100%' }}>
                <TourItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default SimilarTours;
