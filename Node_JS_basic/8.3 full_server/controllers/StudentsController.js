import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    const dbPath = process.argv[2];
    try {
      const data = await readDatabase(dbPath);
      let output = 'This is the list of our students';
      
      // Tri alphabétique insensible à la casse
      const sortedFields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of sortedFields) {
        output += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
      }
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const dbPath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(dbPath);
      if (data[major]) {
        response.status(200).send(`List: ${data[major].join(', ')}`);
      } else {
        response.status(200).send('List: ');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
