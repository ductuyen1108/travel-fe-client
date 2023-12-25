'use client';

import '../styles/stylesNav.css';
import { useEffect, useState, memo } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { navigation } from '../contant';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGetCurrent } from '../hooks/useGetCurrent';
import Iconify from '@/common/components/iconify/Iconify';

const NavMenu = () => {
  const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
  const pathName = usePathname();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const activeNav = navigation.find((navItem) => navItem.path === pathName);
    if (activeNav) {
      setActiveNavItem(activeNav.text);
    } else {
      setActiveNavItem(null);
    }
  }, [pathName, navigation]);

  const { currentData } = useGetCurrent();
  console.log('current', currentData);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
      {navigation.map((navItem) => (
        <Link
          key={navItem.path}
          href={navItem.path}
          className={
            currentScrollPos > 0
              ? pathName === navItem.path || activeNavItem === navItem.text
                ? 'nav-active'
                : 'nav-before'
              : pathName === navItem.path || activeNavItem === navItem.text
              ? 'nav-active'
              : 'nav'
          }
          onClick={() => setActiveNavItem(navItem.text)}
        >
          {navItem.text}
        </Link>
      ))}
      {currentData ? (
        <>
          <Box
            component={'img'}
            src={currentData?.avatar ? currentData?.avatar : '/images/mudryk.jpg'}
            alt={currentData?.name}
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              boxShadow: '0px 3.1px 12.4px 0px rgba(0, 0, 0, 0.25)',
              border: '2px solid #fff',
              flexShrink: 0,
              cursor: 'pointer',
            }}
            onClick={handleOpenUserMenu}
          />
          <Menu
            sx={{ mt: '45px', padding: '8px 10px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem
              component={Link}
              href="/profile"
              onClick={() => setAnchorElUser(null)}
              sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <Iconify icon={'iconamoon:profile-circle'} />
              <Typography textAlign="center">Thông tin cá nhân</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Iconify icon={'solar:logout-2-broken'} color={'red'} />
              <Typography textAlign="center" color="red">
                Đăng xuất
              </Typography>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button component={Link} href="/login" variant="contained" sx={{ borderRadius: '24px' }}>
          Đăng nhập
        </Button>
      )}
    </Box>
  );
};

export default memo(NavMenu);
