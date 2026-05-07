/**
 * Détermine quelle promesse se résout en premier.
 * @param {Promise} chinaDownload - La première promesse.
 * @param {Promise} USDownload - La seconde promesse.
 * @returns {Promise} La valeur de la promesse qui a gagné la "course".
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race renvoie une promesse qui se résout ou se rejette 
  // dès que l'une des promesses du tableau est réglée.
  return Promise.race([chinaDownload, USDownload]);
}
