const express = require('express');

// Création de l'instance de l'application Express
const app = express();
const port = 1245;

// Définition de la route pour l'index /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Exportation de l'application
module.exports = app;
