import "./styles.css";
import Header from "../Header";
import HomeSection from "../HomeSection";
import InstallationLocation from "../InstallationLocation";
import ClientCarousel from "../ClientCarousel";
import ServiceProcess from "../ServiceProcess";
import EVChargingTime from "../EVChargingTime";
import EVChargingGrants from "../EVChargingGrants";
import CertifiedInstallersSection from "../CertifiedInstallersSection";
function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      <ClientCarousel />
      <InstallationLocation />
      <ServiceProcess />
      <EVChargingTime/>
      <EVChargingGrants />
      <CertifiedInstallersSection/>
    </>
  );
}

export default Home;
