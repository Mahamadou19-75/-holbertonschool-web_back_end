/**
 * Retourne une promesse résolue avec les informations de l'utilisateur.
 * @param {String} firstName - Le prénom.
 * @param {String} lastName - Le nom.
 * @returns {Promise} Une promesse résolue contenant l'objet utilisateur.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
