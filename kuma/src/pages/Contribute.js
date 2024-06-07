import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Pages.css";

import { sendAudioToAPI } from "./api"; // Chemin relatif au fichier api.js

// Reste du code du composant Contribute

import { Button } from "react-bootstrap";
import { ReactMic } from "react-mic";

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = () => {
    // Callback function for react-mic, but we don't need to do anything here
  };

  const onStop = (recordedBlob) => {
    setRecordings([...recordings, recordedBlob.blobURL]);
  };

  const deleteRecording = (index) => {
    const updatedRecordings = [...recordings];
    updatedRecordings.splice(index, 1);
    setRecordings(updatedRecordings);
  };

  const validateRecording = async (index) => {
    try {
      setShowValidationMessage(true);
      const audioData = recordings[index]; // Récupération de l'enregistrement audio
      await sendAudioToAPI(audioData); // Envoi de l'enregistrement audio à l'API

      // Vous pouvez supprimer cette console.log car nous avons déjà le console.error dans le catch
      console.log("Recording validated:", audioData);
    } catch (error) {
      console.error("Error validating recording:", error);
    }
  };

  return (
    <div className="enregistrement">
      <Button
        className="button-recording"
        onClick={startRecording}
        disabled={isRecording}
      >
        Recording
      </Button>
      <Button
        className="button-stop-recording"
        onClick={stopRecording}
        disabled={!isRecording}
      >
        Stop
      </Button>
      <ReactMic
        record={isRecording}
        onData={onData}
        onStop={onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      {recordings.map((recording, index) => (
        <div className="bSupValid" key={index}>
          <audio controls src={recording}></audio>
          <div className="buttons">
            <button
              className="delete-button"
              onClick={() => deleteRecording(index)}
            >
              Supprimer
            </button>
            <button
              className="validate-button"
              onClick={() => validateRecording(index)}
            >
              Valider
            </button>
          </div>
        </div>
      ))}
      {showValidationMessage && (    
        <div className="validation-message">
          Enregistrement validé avec succès !
        </div>
      )}
    </div>
  );
};


function Contribute() {
  const [index, setIndex] = useState(0);
  const paragraphes = [
    "Ji ma masa dɔn",
    "Tulon-ka-yɛlɛ bɛ dugu diya",
    "N’i ye diɲɛ yaala, n’i ma fɛn sɔrɔ, i na fɛn caman dɔn. ",
    "Dɔɔnin-dɔɔnin, kɔnɔnin bɛ a ɲaa da",
    "Ni misiden ma se ka jara mina, misi kɔni be se k'a mina.",
    // Ajoutez autant de textes que nécessaire
  ];

  const afficherSuivant = () => {
    if (index < paragraphes.length - 1) {
      setIndex(index + 1);
    }
  };
  const { t } = useTranslation();

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
        <Recorder /> {/* Ajout du composant Recorder ici */}
      </div>
    </div>
  );
}

export default Contribute;
