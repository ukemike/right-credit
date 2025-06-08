import Advance from '~/lib/components/landing-page/Advance';
import Benefits from '~/lib/components/landing-page/Benefits';
import Features from '~/lib/components/landing-page/Features';
import Footer from '~/lib/components/landing-page/Footer';
import Hero from '~/lib/components/landing-page/Hero';
import NavBar from '~/lib/components/landing-page/Navbar';
import NewsLetter from '~/lib/components/landing-page/NewsLetter';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Benefits />
      <Advance />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
