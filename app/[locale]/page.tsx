import HomeHero from "./components/Home/HomeHero";
import HomeAbout from "./components/Home/HomeAbout";
import HomeServices from "./components/Home/HomeServices";
import HomeReferences from "./components/Home/HomeReferences";
import ContactForm from "./components/Contacts/ContactForm";
import CallToAction from "./components/CallToAction/CallToAction";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeReferences />
      <ContactForm />
      <CallToAction title="Biztonságban a jövő – válasszon minket!" />
    </main>
  );
};

export default Home;
