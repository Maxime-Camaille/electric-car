import "./styles.css";
import Header from "../../components/Header";
import MainHeroSection from "../../components/MainHeroSection";
import ChargingServiceCard from "../../components/ChargingServiceCard";
import Footer from "../../components/Footer";
import BlogSection from "../../components/BlogSection";
import illustrationParticulier from "../../assets/images/homme-chargeant-voiture-electrique-pres-maison.jpg";
import illustrationCopropriété from "../../assets/images/hommes-discutant-en chargeant-une-voiture-electrique.jpg";
import illustrationEntreprise from "../../assets/images/deux-voitures-electriques-charge-station-entreprise.jpg";

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
      "Investir dans une borne électrique pour votre domicile va au-delà de la simple commodité. Vous bénéficiez d'une recharge rapide et efficace directement chez vous, éliminant les tracas liés aux stations de recharge publiques.",
    ctaMessage: "Installez votre borne",
    imageSrc: illustrationParticulier,
    isTextOnLeft: true,
  };

  const serviceCardProps2 = {
    category: "Pour les copropriétés",
    title: "borne en copropriété",
    description:
      "Offrez à vos résidents le confort de la recharge électrique à domicile. Transformez votre copropriété en un lieu de vie moderne et durable. Nos solutions d'installation de bornes électriques sont conçues pour s'intégrer parfaitement à votre espace.",
    ctaMessage: "Je demande mon devis",
    imageSrc: illustrationCopropriété,
    isTextOnLeft: false,
  };

  const serviceCardProps3 = {
    category: "Pour les professionnels",
    title: "borne en entreprise",
    description:
      "Facilitez la transition de votre flotte automobile vers l'électrique. Nos experts travaillent avec vous pour concevoir une infrastructure de recharge adaptée à vos besoins spécifiques, offrant une solution pratique pour vos employés et illustrant votre engagement envers les solutions novatrices.",
    ctaMessage: "Nous contacter maintenant",
    imageSrc: illustrationEntreprise,
    isTextOnLeft: true,
  };

  return (
    <>
      <Header />
      <MainHeroSection {...mainHeroSectionProps} />
      <ChargingServiceCard {...serviceCardProps1} />
      <ChargingServiceCard {...serviceCardProps2} />
      <ChargingServiceCard {...serviceCardProps3} />
      <BlogSection />
      <Footer />
    </>
  );
}

export default ServicesOverviewPage;
