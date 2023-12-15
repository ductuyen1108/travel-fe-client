'use client';

import '../styles/stylesNav.css';
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { navigation } from '../contant';
import { GRADIENT_COLOR } from '@/common/constants/colors';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const NavMenu = () => {
  const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
  const router = useRouter();
  const pathName = usePathname();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  useEffect(() => {
    const activeNav = navigation.find((navItem) => navItem.path === pathName);
    if (activeNav) {
      setActiveNavItem(activeNav.text);
    } else {
      setActiveNavItem(null);
    }
  }, [pathName, navigation]);

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
    </Box>
  );
};

export default NavMenu;
