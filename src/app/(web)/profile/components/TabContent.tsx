'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TourItem from '../../tours/common/components/TourItem';
import { Stack } from '@mui/material';
import NewsCreatedByUser from './NewsCreatedByUser';

export default function TabContent() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Bài viết đã đăng" value="1" sx={{ textTransform: 'none' }} />
            <Tab label="Tour đã book" value="2" sx={{ textTransform: 'none' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack spacing={2}>
            {[1, 2, 3, 4, 5].map((item) => (
              <NewsCreatedByUser />
            ))}
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={3}>
            {[1, 2, 3, 4, 5].map((item) => (
              <TourItem
                key={item}
                id={1}
                country="Hà Nội"
                numberOfDays={5}
                price={10500000}
                thumbnail="/images/home/destinations/ha-noi.jpg"
                title="Du lịch Hồ Gươm"
                totalReviews={7}
              />
            ))}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
