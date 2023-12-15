'use client';

import { useState, useEffect } from 'react';
import Container from '@/common/config/container';
import { GRADIENT_COLOR } from '@/common/constants/colors';
import { Box, Typography } from '@mui/material';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Headroom from 'react-headroom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const shouldHide = currentScrollPos > 0;

    setIsScrolled(shouldHide);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Headroom style={{ zIndex: 100 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: isScrolled ? '#fff' : 'transparent',
          borderBottom: isScrolled ? '1px solid #dce0e0' : 'none',
          boxShadow: isScrolled ? '0 1px 10px rgba(0,0,0,.1)' : 'none',
          transition: 'background-color 0.3s ease',
          height: '70px',
          py: '10px',
        }}
      >
        <Container>
          <Box
            sx={{
              display: { ld: 'flex', md: 'flex', sm: 'none', xs: 'none' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography
                sx={{
                  fontSize: '25px',
                  fontWeight: 700,
                  backgroundImage: GRADIENT_COLOR,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                DT-Travel
              </Typography>
            </Link>
            <NavMenu />
          </Box>
          <MobileMenu />
        </Container>
      </Box>
    </Headroom>
  );
};

export default Navigation;
