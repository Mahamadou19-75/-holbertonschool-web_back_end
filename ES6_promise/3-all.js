import { uploadPhoto, createUser } from './utils';

/**
 * Gère l'inscription complète du profil en résolvant plusieurs promesses.
 * Affiche les données combinées ou un message d'erreur.
 */
export default function handleProfileSignup() {
  // Promise.all permet d'exécuter les fonctions en parallèle
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // results est un tableau contenant les réponses dans l'ordre d'appel
      const photo = results[0];
      const user = results[1];

      // On log les informations demandées : body firstName lastName
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // En cas d'échec d'une des deux promesses
      console.log('Signup system offline');
    });
}
