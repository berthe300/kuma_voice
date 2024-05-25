import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Pages.css";

const Listen = () => {
  const [text, setText] = useState("");
  const [selectedLang, setSelectedLang] = useState("en-US");
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLang;
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
      <div className="contribution-wrapper-writen">
        <div className="contribution-speak-writen">
          <div className="cards-and-pills-writen">
            <div className="cards-and-instructions-writen">
              <textarea
                className="texte-writen"
                value={text}
                onChange={handleInputChange}
                placeholder={t("Enter your text here")}
              ></textarea>
              <select
                className="language-select"
                onChange={handleLanguageChange}
                value={selectedLang}
              >
                <option value="en-US">English</option>
                <option value="fr-FR">French</option>
                <option value="es-ES">Spanish</option>
                <option value="dyu">Dioula</option>
                {/* Ajoutez d'autres langues selon vos besoins */}
              </select>
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="button-play" onClick={handlePlayPause}>
            {isPlaying ? t("Pause") : t("Ecouter")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listen;
