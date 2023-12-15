'use client';

import { Box, Grid } from '@mui/material';
import Hero from './components/Hero';
import NewsDetails from './components/NewsDetails';
import Container from '@/common/config/container';
import SubcribeForm from './components/SubcribeForm';
import ListNewsByTopic from './components/ListNewsByTopics';
import ConnectUs from './components/ConnectUs';

const Page = ({ params }: { params: { title: string } }) => {
  return (
    <section>
      <Hero />
      <Container sx={{ my: '50px' }}>
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid item md={8}>
            <NewsDetails />
          </Grid>
          <Grid item md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <SubcribeForm />
              <ListNewsByTopic />
              <ConnectUs />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Page;
