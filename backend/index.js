const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configuration de multer pour spécifier le répertoire de stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'audio/'); // Spécifie le répertoire de destination des fichiers
  },
  filename: function (req, file, cb) {
    // Spécifie le nom du fichier une fois qu'il est téléversé
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route POST pour gérer le téléversement de fichiers audio
app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Aucun fichier audio n\'a été téléversé');
  }
  res.send('Fichier audio téléversé avec succès');
});

// Autres routes et configurations...

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
