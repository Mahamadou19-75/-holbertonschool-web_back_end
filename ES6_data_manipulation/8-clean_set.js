/**
 * Retourne une chaîne de caractères des valeurs du Set commençant par startString,
 * en ne gardant que la partie après startString.
 * @param {Set} set - L'ensemble de chaînes de caractères.
 * @param {String} startString - Le préfixe à rechercher.
 * @returns {String} Les suffixes joints par "-".
 */
export default function cleanSet(set, startString) {
  // Cas particulier : si startString est vide ou n'est pas une chaîne, on retourne une chaîne vide
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // On parcourt le Set
  for (const value of set) {
    // On vérifie si la valeur est bien une string et si elle commence par le préfixe
    if (typeof value === 'string' && value.startsWith(startString)) {
      // On extrait la partie située après startString
      parts.push(value.slice(startString.length));
    }
  }

  // On joint tous les éléments du tableau avec un tiret
  return parts.join('-');
}
