import React, { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { ReactMic } from 'react-mic';

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

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

  return (
    <div>
      <h2>Enregistreur vocal</h2>
      <Button onClick={startRecording} disabled={isRecording}>
        Démarrer l'enregistrement
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        Arrêter l'enregistrement
      </Button>
      <ReactMic
        record={isRecording}
        onData={onData}
        onStop={onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      {recordings.map((recording, index) => (
        <div key={index}>
          <audio controls src={recording}></audio>
          <Button onClick={() => deleteRecording(index)}>Supprimer</Button>
        </div>
      ))}
      <ProgressBar now={0} />
    </div>
  );
};

export default Recorder;