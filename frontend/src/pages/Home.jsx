import HomeHero from "../components/home/HomeHero";
import HomeOfferings from "../components/home/HomeOfferings";
import HomeWhyChooseUs from "../components/home/HomeWhyChooseUs";
import HomeBrands from "../components/home/HomeBrands";
import HomePaintingHelp from "../components/home/HomePaintingHelp";
import HomeQuoteCTA from "../components/home/HomeQuoteCTA";


const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <HomeHero />
      <HomeOfferings />
      <HomeWhyChooseUs />
      <HomeBrands />
      <HomePaintingHelp />
      <HomeQuoteCTA />
    </main>
  );
};

export default Home;