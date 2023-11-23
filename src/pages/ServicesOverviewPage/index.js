import "./styles.css";
import Header from "../../components/Header";
import MainHeroSection from "../../components/MainHeroSection";
import ChargingServiceCard from "../../components/ChargingServiceCard";
import Footer from "../../components/Footer";


function ServicesOverviewPage() {
  
  const mainHeroSectionProps = {
    whiteTitle: "Réinventez votre quotidien :",
    greenTitle: "rechargez facilement.",
    description:
      "Chargez votre avenir avec nos bornes de recharges innovantes. " +
      "Facilitez votre passage à l'électrique et simplifiez votre quotidien.",
    ctaText: "Faire Installer une Borne",
    ctaLink: "/form",
  };

  const serviceCardProps1 = {
    category: "Pour les particuliers",
    title: "borne à mon domicile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaMessage: "En savoir plus",
    imageSrc: "/../../assets/images/Installateur.png",
    isTextOnLeft: true,
  };

  const serviceCardProps2 = {
    category: "Pour les copropriétés",
    title: "borne en copropriété",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaMessage: "Découvrir nos offres",
    imageSrc: "url_vers_l_image_professionnels.jpg",
    isTextOnLeft: false,
  };

  const serviceCardProps3 = {
    category: "Pour les professionnels",
    title: "borne en entreprise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ctaMessage: "Découvrir nos offres",
    imageSrc: "url_vers_l_image_professionnels.jpg",
    isTextOnLeft: true,
  };

  return (
    <>
      <Header />
      <MainHeroSection {...mainHeroSectionProps} />
      <ChargingServiceCard {...serviceCardProps1} />
      <ChargingServiceCard {...serviceCardProps2} />
      <ChargingServiceCard {...serviceCardProps3} />
      <Footer />
    </>
  );
}

export default ServicesOverviewPage;
