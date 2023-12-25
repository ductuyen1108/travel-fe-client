import Navbar from '@/common/components/navbar';
import Hero from './components/Hero';
import ListNews from './components/ListNews';
import Footer from '@/common/components/footer';

const Page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <ListNews />
      <Footer />
    </section>
  );
};

export default Page;
