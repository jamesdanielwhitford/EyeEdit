import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ServicesSection from './components/ServicesSection';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <LandingSection />
        <ServicesSection />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
