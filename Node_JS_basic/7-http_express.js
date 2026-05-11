const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const DB_FILE = process.argv[2];

/**
 * Lit la base de données et retourne une promesse avec le texte formaté.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const studentLines = lines.slice(1);
      let output = `Number of students: ${studentLines.length}`;
      
      const fields = {};
      for (const line of studentLines) {
        const studentData = line.split(',');
        if (studentData.length >= 4) {
          const firstName = studentData[0];
          const field = studentData[3];
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        }
      }

      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      resolve(output);
    });
  });
}

// Route racine
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route /students
app.get('/students', async (req, res) => {
  const intro = 'This is the list of our students\n';
  try {
    const data = await countStudents(DB_FILE);
    res.send(`${intro}${data}`);
  } catch (error) {
    res.send(`${intro}${error.message}`);
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
