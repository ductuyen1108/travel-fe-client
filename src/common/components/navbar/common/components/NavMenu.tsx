'use client';

import '../styles/stylesNav.css';
import { useEffect, useState, memo } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { navigation } from '../contant';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGetCurrent } from '../hooks/useGetCurrent';
import Iconify from '@/common/components/iconify/Iconify';
import useDeepEffect from '@/common/hooks/useDeepEffect';
import ModalLogin from './ModalLogin';
import { useGetProfile } from '@/app/(web)/profile/common/hooks/useGetProfile';
import { useDispatch, useSelector } from '@/common/redux/store';
import { setAccessToken, setProfile } from '@/app/(web)/login/common/auth.slice';
import { setShowModalLogin } from '../slice';

const NavMenu = () => {
  const pathName = usePathname();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { useDeepCompareEffect } = useDeepEffect();
  const dispatch = useDispatch();

  useDeepCompareEffect(() => {
    const activeNav = navigation.find((navItem) => navItem.path === pathName);
    if (activeNav) {
      setActiveNavItem(activeNav.text);
    } else {
      setActiveNavItem(null);
    }
  }, [pathName, navigation]);

  const { profile } = useSelector((state) => state.authLogin);

  console.log('profile', profile);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(setAccessToken(''));
    dispatch(setProfile(undefined));
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
      {navigation.map((navItem) => (
        <Link
          key={navItem.path}
          href={navItem.path}
          className={pathName === navItem.path || activeNavItem === navItem.text ? 'nav-active' : 'nav-before'}
          onClick={() => setActiveNavItem(navItem.text)}
        >
          {navItem.text}
        </Link>
      ))}
      {profile ? (
        <Link
          href={'/dien-dan'}
          className={pathName === '/dien-dan' || activeNavItem === 'Diễn đàn' ? 'nav-active' : 'nav-before'}
          onClick={() => setActiveNavItem('Diễn đàn')}
        >
          Diễn đàn
        </Link>
      ) : (
        <Typography
          sx={{ color: '#000', fontWeight: 400, fontSize: '16px', cursor: 'pointer' }}
          onClick={() => dispatch(setShowModalLogin(true))}
        >
          Diễn đàn
        </Typography>
      )}
      {profile ? (
        <>
          <Box
            component={'img'}
            src={profile?.avatar?.url ? profile?.avatar?.url : '/images/avatar-pld.jpeg'}
            alt={profile?.name}
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
        <ModalLogin />
      )}
    </Box>
  );
};

export default memo(NavMenu);
