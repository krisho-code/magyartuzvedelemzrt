import HomeHero from "./components/Home/HomeHero";
import HomeAbout from "./components/Home/HomeAbout";
import HomeServices from "./components/Home/HomeServices";
// ...existing code...
import ContactForm from "./components/Contacts/ContactForm";
import CallToAction from "./components/CallToAction/CallToAction";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <ContactForm />
      <CallToAction title="Biztonságban a jövő – válasszon minket!" />
    </main>
  );
};

export default Home;
