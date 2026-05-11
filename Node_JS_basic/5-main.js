const app = require('./5-http.js');

// On vérifie simplement si l'objet app est bien exporté
if (app) {
  console.log('Server app is successfully exported!');
} else {
  console.log('Export failed.');
}