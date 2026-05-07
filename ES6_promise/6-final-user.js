import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Gère l'inscription complète et le téléchargement de la photo.
 * Utilise Promise.allSettled pour attendre que toutes les promesses se terminent.
 * @param {String} firstName - Prénom de l'utilisateur.
 * @param {String} lastName - Nom de l'utilisateur.
 * @param {String} fileName - Nom du fichier photo.
 * @returns {Promise} Une promesse qui résout vers un tableau de résultats.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      // On formate les résultats pour qu'ils correspondent exactement à la structure demandée
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }));
    });
}
