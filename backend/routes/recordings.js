const express = require('express');
const router = express.Router();

// Exemple de route GET pour /recordings
router.get('/', (req, res) => {
  res.send('Liste des enregistrements');
});

// Exemple de route POST pour /recordings
router.post('/', (req, res) => {
  const newRecording = req.body; // Supposons que vous envoyez un enregistrement dans le corps de la requête
  // Ajoutez votre logique pour enregistrer la donnée ici
  res.status(201).send(newRecording);
});

module.exports = router;
