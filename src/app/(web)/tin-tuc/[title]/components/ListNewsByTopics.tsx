'use client';

import { PRIMARY_MAIN } from '@/common/constants/colors';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ListNewsByTopic = () => {
  const { push } = useRouter();
  return (
    <Box sx={{ background: '#fff', border: '1px solid #dce0e0', borderRadius: '5px', padding: '24px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Tin tức liên quan</Typography>
      <Box sx={{ pt: '15px', borderTop: '1px solid #dce0e0', mt: '5px' }}>
        <Grid container rowSpacing={3}>
          {[1, 2, 3, 4, 5].map((it) => (
            <Grid key={it} item>
              <Box sx={{ display: 'flex', gap: '20px', alignItems: 'normal' }}>
                <Link href="#">
                  <Image
                    src="/images/tin-tuc/hero.jpg"
                    alt=""
                    width={1000}
                    height={800}
                    style={{ borderRadius: '12px', width: '95px', height: '80px' }}
                  />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#222',
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 2,
                      ':hover': {
                        cursor: 'pointer',
                        color: PRIMARY_MAIN,
                      },
                    }}
                    onClick={() => push('/tin-tuc/hai-phong')}
                  >
                    Memorial Day to Someone Told Me to Travel
                  </Typography>
                  <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#999999', textTransform: 'uppercase' }}>
                    December 10, 2023
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ListNewsByTopic;
