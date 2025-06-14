import Advance from '@shared/components/landing-page/Advance';
import Benefits from '@shared/components/landing-page/Benefits';
import Features from '@shared/components/landing-page/Features';
import Footer from '@shared/components/landing-page/Footer';
import Hero from '@shared/components/landing-page/Hero';
import NavBar from '@shared/components/landing-page/Navbar';
import NewsLetter from '@shared/components/landing-page/NewsLetter';

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
