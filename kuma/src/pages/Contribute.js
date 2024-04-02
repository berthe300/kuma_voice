import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faHeadphones,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Pages.css";

function Contribute() {
  const [index, setIndex] = useState(0);
  const paragraphes = [
    "Ji ma masa dɔn",
    "Tulon-ka-yɛlɛ bɛ dugu diya",
    "N’i ye diɲɛ yaala, n’i ma fɛn sɔrɔ, i na fɛn caman dɔn. ",
    "Dɔɔnin-dɔɔnin, kɔnɔnin bɛ a ɲaa da",
     "Ni misiden ma se ka jara mina, misi kɔni be se k'a mina."
    // Ajoutez autant de textes que nécessaire
  ];

  const [recording, setRecording] = useState(false);
  const mediaChunks = useRef([]);
  const mediaRecorder = useRef(null);

  const afficherSuivant = () => {
    if (index < paragraphes.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleRecordClick = () => {
    if (!recording) {
      // Commencer l'enregistrement
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder.current = new MediaRecorder(stream);
          mediaRecorder.current.ondataavailable = handleDataAvailable;
          mediaRecorder.current.start();
          setRecording(true);
        })
        .catch((error) => console.error("Error accessing media devices:", error));
    } else {
      // Arrêter l'enregistrement
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    mediaChunks.current.push(event.data);
  };

  return (
    <div>
      {/* Div contenant les boutons */}
      <div className="button-container">
        <button className="action-button">
          <FontAwesomeIcon icon={faMicrophone} />
          <span>Speak</span>
        </button>
        <button className="action-button">
          <FontAwesomeIcon icon={faHeadphones} />
          <span>Listen</span>
        </button>
        <button className="action-button">
          <FontAwesomeIcon icon={faPencilAlt} />
          <span>Write</span>
        </button>
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
                suivant
                <svg viewBox="0 0 320 512" className="svg">
                  <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"></path>
                </svg>
              </button>
            </div>
            <div className="pills"></div>
          </div>
        </div>
        <div className="primary-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
            className="svg-icon"
          >
            <g strokeWidth="2" strokeLinecap="round" stroke="#ff342b">
              <rect y="3" x="9" width="6" rx="3" height="11"></rect>
              <path d="m12 18v3"></path>
              <path d="m8 21h8"></path>
              <path d="m19 11c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7"></path>
            </g>
          </svg>
          <span className="lable" onClick={handleRecordClick}>
            {recording ? "Stop Recording" : "Record"}
          </span>
        </div>
      </div>
      {recording && (
        <div>
          <audio controls>
          <source src={recording} type="audio/wav" />
            Votre navigateur ne prend pas en charge l'élément audio.
          </audio>
        </div>
      )}
    </div>
  );
}

export default Contribute;