/**
 * Filtre les étudiants par ville.
 * @param {Array} students - La liste des objets étudiants.
 * @param {String} city - La ville cible pour le filtrage.
 * @returns {Array} Un tableau d'objets étudiants situés dans la ville spécifiée.
 */
export default function getStudentsByLocation(students, city) {
  // On utilise filter pour ne garder que les éléments qui respectent la condition
  return students.filter((student) => student.location === city);
} 
