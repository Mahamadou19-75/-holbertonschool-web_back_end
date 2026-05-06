/**
 * Calcule la somme de tous les IDs des étudiants.
 * @param {Array} students - La liste des objets étudiants.
 * @returns {Number} La somme totale des IDs.
 */
export default function getStudentIdsSum(students) {
  // reduce prend une fonction avec un accumulateur et l'élément courant
  // Le '0' à la fin est la valeur initiale de l'accumulateur
  return students.reduce((sum, student) => sum + student.id, 0);
}
