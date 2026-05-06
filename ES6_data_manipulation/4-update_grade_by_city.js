/**
 * Met à jour les notes des étudiants pour une ville spécifique.
 * @param {Array} students - Liste des étudiants (getListStudents).
 * @param {String} city - La ville cible.
 * @param {Array} newGrades - Liste des nouvelles notes [{ studentId, grade }].
 * @returns {Array} Liste des étudiants filtrés avec leur note mise à jour.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // 1. On filtre pour ne garder que les étudiants de la ville spécifiée
  return students
    .filter((student) => student.location === city)
    // 2. On transforme chaque étudiant filtré pour lui ajouter/modifier sa note
    .map((student) => {
      // On cherche si une note correspond à l'ID de l'étudiant actuel
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student, // On copie toutes les propriétés existantes (id, firstName, location)
        grade: gradeObject ? gradeObject.grade : 'N/A', // On ajoute la note ou 'N/A'
      };
    });
}
