/**
 * Extrait les IDs d'une liste d'étudiants.
 * @param {Array} students - Un tableau d'objets étudiants.
 * @returns {Array} Un tableau contenant uniquement les IDs.
 */
export default function getListStudentIds(students) {
  // On vérifie d'abord si l'argument est bien un tableau
  if (!Array.isArray(students)) {
    return [];
  }

  // On utilise map pour créer un nouveau tableau contenant uniquement les id
  return students.map((student) => student.id);
}