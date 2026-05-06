/**
 * Crée un Set à partir d'un tableau.
 * @param {Array} array - Le tableau d'éléments à convertir.
 * @returns {Set} Un objet Set contenant les valeurs uniques du tableau.
 */
export default function setFromArray(array) {
  // Le constructeur de Set accepte directement un itérable (comme un tableau)
  return new Set(array);
} 
