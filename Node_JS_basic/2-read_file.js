const fs = require('fs');

/**
 * Compte les étudiants dans un fichier CSV de manière synchrone.
 * @param {string} path - Le chemin vers le fichier CSV.
 */
function countStudents(path) {
  try {
    // Lecture synchrone du fichier
    const data = fs.readFileSync(path, 'utf8');

    // Séparation par lignes et filtrage des lignes vides
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Suppression de l'en-tête (firstname, lastname, age, field)
    const studentLines = lines.slice(1);

    console.log(`Number of students: ${studentLines.length}`);

    // Objet pour stocker les étudiants par domaine : { FIELD: [Names] }
    const fields = {};

    for (const line of studentLines) {
      const studentData = line.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    // Affichage des statistiques par domaine
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Si le fichier n'existe pas ou n'est pas accessible
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
