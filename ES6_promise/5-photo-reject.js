/**
 * Retourne une promesse rejetée avec une erreur.
 * @param {String} fileName - Le nom du fichier qui ne peut pas être traité.
 * @returns {Promise} Une promesse rejetée contenant un objet Error.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
