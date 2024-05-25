// routes/recordings.js

const express = require('express');
const router = express.Router();
const connection = require('../db');

// Route pour enregistrer un nouvel enregistrement audio
router.post('/', (req, res) => {
  const { audioData } = req.body;

  // Validez et sécurisez les données audio ici si nécessaire

  // Insérez les données audio dans la base de données
  const sql = 'INSERT INTO recordings (audio_data) VALUES (?)';
  connection.query(sql, [audioData], (err, result) => {
    if (err) {
      console.error('Error saving audio data:', err);
      res.status(500).json({ error: 'Failed to save audio data' });
    } else {
      console.log('Audio data saved successfully');
      res.status(200).json({ message: 'Audio data saved successfully' });
    }
  });
});

module.exports = router;
