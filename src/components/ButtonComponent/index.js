import React from "react";
import "./styles.css";

const ButtonComponent = () => {
  

  return (
<div className="cta-button">
<div className="btn-container">
    <button onClick={() => {
            console.log("test bouton");
          }}>
      <span className="text">Nous Contacter</span>
      <div className="icon-container">
        <div className="icon icon--left">
          <svg>
            <use xlinkHref="#arrow-right" />
          </svg>
        </div>
        <div className="icon icon--right">
          <svg>
            <use xlinkHref="#arrow-right" />
          </svg>
        </div>
      </div>
    </button>
  </div>
  <svg style={{ display: "none" }}>
    <symbol id="arrow-right" viewBox="0 0 20 10">
      <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
    </symbol>
  </svg>
  </div>
  );
};

export default ButtonComponent;
