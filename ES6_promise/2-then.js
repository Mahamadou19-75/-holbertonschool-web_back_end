/**
 * Gère la réponse d'une promesse avec trois gestionnaires.
 * @param {Promise} promise - La promesse à manipuler.
 * @returns {Promise}
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
