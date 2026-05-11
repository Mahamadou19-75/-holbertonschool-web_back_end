const fs = require('fs');

/**
 * Compte les étudiants dans un fichier CSV de manière asynchrone.
 * @param {string} path - Le chemin vers le fichier CSV.
 * @returns {Promise}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Lecture asynchrone du fichier
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Si une erreur survient (ex: fichier inexistant), on rejette la promesse
        reject(new Error('Cannot load the database'));
        return;
      }

      // Traitement des données (logique identique à la version synchrone)
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentLines = lines.slice(1);

      console.log(`Number of students: ${studentLines.length}`);

      const fields = {};

      for (const line of studentLines) {
        const studentData = line.split(',');
        if (studentData.length < 4) continue; // Sécurité pour les lignes malformées

        const firstName = studentData[0];
        const field = studentData[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // On résout la promesse une fois le traitement terminé
      resolve();
    });
  });
}

module.exports = countStudents;
