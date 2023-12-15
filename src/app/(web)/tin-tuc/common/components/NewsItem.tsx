'use client';

import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';

const NewsItem = () => {
  const { push } = useRouter();
  return (
    <Box
      sx={{
        borderRadius: '5px',
        border: '1px solid #dce0e0',
        ':hover': {
          boxShadow: '0 22px 40px rgba(0,0,0,.15)',
          transform: 'translateY(-4px)',
          transitionDuration: '0.2s',
        },
      }}
    >
      <Link href="/tin-tuc/hai-phong">
        <Image
          src="/images/home/destinations/ha-noi.jpg"
          alt=""
          width={1000}
          height={950}
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <Box sx={{ padding: '25px' }}>
        <Typography sx={{ fontSize: '12px', color: '#000000', fontWeight: 500 }}>DECEMBER 10, 2023</Typography>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#000000',
            fontWeight: 600,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            ':hover': { color: PRIMARY_MAIN, cursor: 'pointer' },
            mt: '5px',
          }}
          onClick={() => push('/tin-tuc/hai-phong')}
        >
          Memorial Day to Someone Told Me to Travel
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 400,
            color: '#222222',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            my: '15px',
          }}
        >
          Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.
          Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth
          art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi.
        </Typography>
        <Button variant="text" endIcon={<KeyboardArrowRightIcon />} onClick={() => push('/tin-tuc/haiphong')}>
          Xem bài viết
        </Button>
      </Box>
    </Box>
  );
};

export default NewsItem;
