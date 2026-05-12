import fs from 'fs';

export const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const studentLines = lines.slice(1);
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
    resolve(fields);
  });
});
