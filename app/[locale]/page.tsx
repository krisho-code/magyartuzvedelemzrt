import HomeHero from "./components/Home/HomeHero";
import HomeAbout from "./components/Home/HomeAbout";
import HomeServices from "./components/Home/HomeServices";
import HomeReferences from "./components/Home/HomeReferences";
import ContactForm from "./components/ContactForm";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeReferences />
      <ContactForm />
    </main>
  );
};

export default Home;
