import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import srcImageMainHeroSection from "../../assets/images/femme-rechargeant-sa-voiture-electrique.jpg";

function MainHeroSection({
  whiteTitle,
  greenTitle,
  description,
  ctaText,
  ctaLink,
}) {
  return (
    <section className='main-hero-section'>
      <img
        src={srcImageMainHeroSection}
        alt='background-main-hero-banner'
        className='main-hero-background-image'
      />
      <div className='main-hero-content'>
        <h1 className='main-hero-title'>
          <span className='white-text'>{whiteTitle}</span>
          <br />
          <span className='green-text'>{greenTitle}</span>
        </h1>
        <p className='main-hero-description'>{description}</p>
        <Link to={ctaLink} className='greenButton'>
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

export default MainHeroSection;
