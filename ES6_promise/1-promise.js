/**
 * Simule une réponse d'API selon un paramètre de succès.
 * @param {Boolean} success - Détermine si la promesse doit réussir ou échouer.
 * @returns {Promise}
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Si vrai, on résout avec un objet de succès
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // Si faux, on rejette avec un objet Error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
