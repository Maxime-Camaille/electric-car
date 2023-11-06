import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import video from "../../assets/images/video1.mp4";

function HomeSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Libérez tout le potentiel de votre borne de recharge",
    "Rechargez en toute confiance chez vous",
    "Une voiture chargée, quand vous en avez besoin.",
    "Une recharge rapide pour une mobilité sereine !",
    "Le futur de l'énergie est chez vous !",
    "Le confort de la recharge électrique chez vous !",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className='HomeSection' id='/'>
      <video
        className='video'
        src={video}
        autoPlay
        loop
        muted
        playbackRate={0.5}
      />

      <div className='bigHeader-container'>
        <h1>
          Votre installateur de borne de recharge pour voiture électrique.
        </h1>
        <h2 className='wrap'>
          {text}
          <span className='clignotement'></span>
        </h2>
        <button class='greenButton'>Découvrez nos solutions</button>
      </div>

      <div class='icon-scroll'></div>
    </section>
  );
}

export default HomeSection;
