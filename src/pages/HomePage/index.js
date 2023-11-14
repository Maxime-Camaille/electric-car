import "./styles.css";
import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import InstallationLocation from "../../components/InstallationLocation";
import ClientCarousel from "../../components/ClientCarousel";
import ServiceProcess from "../../components/ServiceProcess";
import EVChargingTime from "../../components/EVChargingTime";
import EVChargingGrants from "../../components/EVChargingGrants";
import CertifiedInstallersSection from "../../components/CertifiedInstallersSection";
import Footer from "../../components/Footer";
import BlogSection from "../../components/BlogSection";

function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />
      <ClientCarousel />
      <InstallationLocation />
      <ServiceProcess />
      <EVChargingTime />
      <EVChargingGrants />
      <CertifiedInstallersSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default HomePage;
