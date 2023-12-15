import Articles from './(web)/Home/common/components/Articles';
import Destination from './(web)/Home/common/components/Destinations';
import Hero from './(web)/Home/common/components/Hero';
import Partners from './(web)/Home/common/components/Partners';
import Tours from './(web)/Home/common/components/Tours';
import WhyChoose from './(web)/Home/common/components/WhyChoose';

export default function Home() {
  return (
    <section>
      <Hero />
      <Partners />
      <Destination />
      <WhyChoose />
      <Tours />
      <Articles />
    </section>
  );
}
