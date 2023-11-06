import React from "react";
import aiwaysLogo from "../../assets/images/brandLogo/aiways.svg";
import audiLogo from "../../assets/images/brandLogo/audi.svg";
import bentleyLogo from "../../assets/images/brandLogo/bentley.svg";
import bmwLogo from "../../assets/images/brandLogo/bmw.svg";
import bydLogo from "../../assets/images/brandLogo/byd.svg";
import cadillacLogo from "../../assets/images/brandLogo/cadillac.svg";
import chevroletLogo from "../../assets/images/brandLogo/chevrolet.svg";
import citroenLogo from "../../assets/images/brandLogo/citroen.svg";
import cupraLogo from "../../assets/images/brandLogo/cupra.svg";
import daciaLogo from "../../assets/images/brandLogo/dacia.svg";
import dsLogo from "../../assets/images/brandLogo/ds.svg";
import ferrariLogo from "../../assets/images/brandLogo/ferrari.svg";
import fiatLogo from "../../assets/images/brandLogo/fiat.svg";
import fiskerLogo from "../../assets/images/brandLogo/fisker.svg";
import fordLogo from "../../assets/images/brandLogo/ford.svg";
import hondaLogo from "../../assets/images/brandLogo/honda.svg";
import hyundaiLogo from "../../assets/images/brandLogo/hyundai.svg";
import jaguarLogo from "../../assets/images/brandLogo/jaguar.svg";
import jeepLogo from "../../assets/images/brandLogo/jeep.svg";
import kiaLogo from "../../assets/images/brandLogo/kia.svg";
import landRoverLogo from "../../assets/images/brandLogo/landRover.svg";
import lexusLogo from "../../assets/images/brandLogo/lexus.svg";
import maseratiLogo from "../../assets/images/brandLogo/maserati.svg";
import mazdaLogo from "../../assets/images/brandLogo/mazda.svg";
import mercedesBenzLogo from "../../assets/images/brandLogo/mercedesBenz.svg";
import mgLogo from "../../assets/images/brandLogo/mg.svg";
import miniLogo from "../../assets/images/brandLogo/mini.svg";
import mitsubishiLogo from "../../assets/images/brandLogo/mitsubishi.svg";
import nissanLogo from "../../assets/images/brandLogo/nissan.svg";
import opelLogo from "../../assets/images/brandLogo/opel.svg";
import peugeotLogo from "../../assets/images/brandLogo/peugeot.svg";
import polestarLogo from "../../assets/images/brandLogo/polestar.svg";
import porscheLogo from "../../assets/images/brandLogo/porsche.svg";
import renaultLogo from "../../assets/images/brandLogo/renault.svg";
import seatLogo from "../../assets/images/brandLogo/seat.svg";
import seresLogo from "../../assets/images/brandLogo/seres.svg";
import skodaLogo from "../../assets/images/brandLogo/skoda.svg";
import smartLogo from "../../assets/images/brandLogo/smart.svg";
import subaruLogo from "../../assets/images/brandLogo/subaru.svg";
import suzukiLogo from "../../assets/images/brandLogo/suzuki.svg";
import teslaLogo from "../../assets/images/brandLogo/tesla.svg";
import toyotaLogo from "../../assets/images/brandLogo/toyota.svg";
import volkswagenLogo from "../../assets/images/brandLogo/volkswagen.svg";
import volvoLogo from "../../assets/images/brandLogo/volvo.svg";

import "./styles.css";

const ClientCarousel = () => {
  const brands = [
    { name: "aiways", logo: aiwaysLogo },
    { name: "audi", logo: audiLogo },
    { name: "bentley", logo: bentleyLogo },
    { name: "bmw", logo: bmwLogo },
    { name: "byd", logo: bydLogo },
    { name: "cadillac", logo: cadillacLogo },
    { name: "chevrolet", logo: chevroletLogo },
    { name: "citroen", logo: citroenLogo },
    { name: "cupra", logo: cupraLogo },
    { name: "dacia", logo: daciaLogo },
    { name: "ds", logo: dsLogo },
    { name: "ferrari", logo: ferrariLogo },
    { name: "fiat", logo: fiatLogo },
    { name: "fisker", logo: fiskerLogo },
    { name: "ford", logo: fordLogo },
    { name: "honda", logo: hondaLogo },
    { name: "hyundai", logo: hyundaiLogo },
    { name: "jaguar", logo: jaguarLogo },
    { name: "jeep", logo: jeepLogo },
    { name: "kia", logo: kiaLogo },
    { name: "landRover", logo: landRoverLogo },
    { name: "lexus", logo: lexusLogo },
    { name: "maserati", logo: maseratiLogo },
    { name: "mazda", logo: mazdaLogo },
    { name: "mercedesBenz", logo: mercedesBenzLogo },
    { name: "mg", logo: mgLogo },
    { name: "mini", logo: miniLogo },
    { name: "mitsubishi", logo: mitsubishiLogo },
    { name: "nissan", logo: nissanLogo },
    { name: "opel", logo: opelLogo },
    { name: "peugeot", logo: peugeotLogo },
    { name: "polestar", logo: polestarLogo },
    { name: "porsche", logo: porscheLogo },
    { name: "renault", logo: renaultLogo },
    { name: "seat", logo: seatLogo },
    { name: "seres", logo: seresLogo },
    { name: "skoda", logo: skodaLogo },
    { name: "smart", logo: smartLogo },
    { name: "subaru", logo: subaruLogo },
    { name: "suzuki", logo: suzukiLogo },
    { name: "tesla", logo: teslaLogo },
    { name: "toyota", logo: toyotaLogo },
    { name: "volkswagen", logo: volkswagenLogo },
    { name: "volvo", logo: volvoLogo },
  ];

  return (
    <div className="logos">
      <div className="logos-slide">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} />
        ))}
      </div>

      <div className="logos-slide">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
