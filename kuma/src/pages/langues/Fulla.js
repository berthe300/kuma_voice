import React, { useState, useEffect, useRef } from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../Pages.css";

const Fulla = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();
  const audioInstance = useRef(null); // Référence pour l'instance Audio

  const paragraphes = [
    {
      texte: "Ji ma masa dôn",
      audio: process.env.PUBLIC_URL + "/audio/audio1.m4a",
    },
    {
      texte: "Tulon-ka-yɛlɛ bɛ dugu diya",
      audio: process.env.PUBLIC_URL + "/audio/audio2.m4a",
    },
    {
      texte: "N’i ye diɲɛ yaala, n’i ma fɛn sôrô, i na fɛn caman dôn. ",
      audio: process.env.PUBLIC_URL + "/audio/audio3.m4a",
    },
    {
      texte: "Dôni Dôni, kônôni be gnaga da",
      audio: process.env.PUBLIC_URL + "/audio/audio4.m4a",
    },
    {
      texte: "Ni misiden ma se ka jara mina, misi kôni be se k'a mina.",
      audio: process.env.PUBLIC_URL + "/audio/audio5.m4a",
    },
  ];

  const afficherSuivant = () => {
    if (index < paragraphes.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      const audio = new Audio(paragraphes[index].audio);

      audio.onended = () => {
        setIsPlaying(false);
      };

      startAudio(audio);
    }
  };

  const startAudio = (audio) => {
    if (audioInstance.current) {
      audioInstance.current.pause();
      audioInstance.current.currentTime = 0;
    }

    audio.play().then(() => {
      setIsPlaying(true);
      audioInstance.current = audio;
    }).catch((error) => {
      console.error('Erreur lors de la lecture de l\'audio : ', error);
      setIsPlaying(false);
    });
  };

  const stopAudio = () => {
    if (audioInstance.current) {
      audioInstance.current.pause();
      audioInstance.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioInstance.current) {
        audioInstance.current.pause();
        audioInstance.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
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
                  {paragraphe.texte}
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

export default Fulla;
