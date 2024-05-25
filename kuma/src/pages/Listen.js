import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Pages.css";

const Listen = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const paragraphes = [
    "Ji ma masa dôn",
    "Tulon-ka-yɛlɛ bɛ dugu diya",
    "N’i ye diɲɛ yaala, n’i ma fɛn sôrô, i na fɛn caman dôn. ",
    "Dôni Dôni, kônôni be gnaga da",
    "Ni misiden ma se ka jara mina, misi kôni be se k'a mina.",
  ];

  const afficherSuivant = () => {
    if (index < paragraphes.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(paragraphes[index]);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);

      utterance.onend = () => {
        setIsPlaying(false);
      };
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div>
      {/* Div contenant les boutons */}
      <div className="button-container">
        <Nav.Link href="/Contribute" className="button1">
          {t("bSpeak")}
        </Nav.Link>
        <Nav.Link href="/Listen" className="button2">
          {t("bListen")}
        </Nav.Link>
        <Nav.Link href="/Write" className="button3">
          {t("bWrite")}
        </Nav.Link>
      </div>
      <div className="contribution-wrapper">
        <div className="contribution-speak">
          <div className="cards-and-pills">
            <div className="cards-and-instructions">
              {paragraphes.map((paragraphe, idx) => (
                <p
                  key={idx}
                  className="texte"
                  style={{ display: idx === index ? "block" : "none" }}
                >
                  {paragraphe}
                </p>
              ))}
              <button className="Btn" onClick={afficherSuivant}>
                Next
                <svg viewBox="0 0 320 512" className="svg">
                  <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="button-play" onClick={handlePlayPause}>
            {isPlaying ? t("Pause") : t("Play")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listen;
