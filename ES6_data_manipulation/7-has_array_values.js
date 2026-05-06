/**
 * Vérifie si tous les éléments d'un tableau existent dans un Set.
 * @param {Set} set - L'ensemble de référence.
 * @param {Array} array - Le tableau d'éléments à vérifier.
 * @returns {Boolean} True si tous les éléments du tableau sont dans le Set, sinon False.
 */
export default function hasValuesFromArray(set, array) {
  // .every() renvoie true seulement si le callback renvoie true pour CHAQUE élément
  return array.every((element) => set.has(element));
} 
