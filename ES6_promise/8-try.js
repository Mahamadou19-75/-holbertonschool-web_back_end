/**
 * Effectue une division et lève une erreur si le dénominateur est zéro.
 * @param {Number} numerator - Le numérateur.
 * @param {Number} denominator - Le dénominateur.
 * @returns {Number} Le résultat de la division.
 * @throws {Error} Si le dénominateur est égal à 0.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
