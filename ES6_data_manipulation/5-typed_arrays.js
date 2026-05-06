/**
 * Crée un ArrayBuffer et place une valeur Int8 à une position spécifique.
 * @param {Number} length - La taille totale du buffer.
 * @param {Number} position - L'index où insérer la valeur.
 * @param {Number} value - La valeur à insérer (-128 à 127).
 * @returns {DataView} Une vue sur le buffer créé.
 * @throws {Error} Si la position est hors des limites du buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  // 1. Vérification de la position
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // 2. Création du buffer de mémoire brute
  const buffer = new ArrayBuffer(length);

  // 3. Utilisation d'un DataView pour manipuler le buffer
  const view = new DataView(buffer);

  // 4. On place la valeur Int8 (entier signé sur 8 bits)
  view.setInt8(position, value);

  return view;
}
