import React from "react";
import "./styles.css";

const ChargingServiceCard = ({
  category,
  title,
  description,
  ctaMessage,
  imageSrc,
  isTextOnLeft,
}) => {
  return (
    <section className='chargingService-card'>
      <div className={`chargingService-card__wrapper ${
            isTextOnLeft ? "text-left" : "text-right"
          }`}>

        <div
          className="chargingService-card-text"
        >
          <div className={`chargingService-card-label ${isTextOnLeft ? "green" : "blue"}`}>{category}</div>
          <div className='chargingService-card-title'>
            <span className='chargingService-card-title-part1'>
              Je souhaite installer une
            </span>
            <br />
            <span className='chargingService-card-title-part2'>{title}</span>
          </div>

          <p className='chargingService-card-description'>{description}</p>
          <button className='greenButton'>{ctaMessage}</button>

        </div>

        <div className='chargingService-card-image-container'>
          <img
            src={imageSrc}
            alt='borne-Service-description'
            className={`chargingService-card-image ${
              isTextOnLeft ? "on-right" : "on-left"
            }`}
          />
        </div>

      </div>
    </section>
  );
};

export default ChargingServiceCard;
