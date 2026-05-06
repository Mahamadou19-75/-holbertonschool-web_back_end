/**
 * Crée une Map contenant une liste de courses prédéfinie.
 * @returns {Map} Une Map avec le nom de l'aliment comme clé et la quantité comme valeur.
 */
export default function groceriesList() {
  // On peut initialiser une Map en passant un tableau de tableaux [clé, valeur]
  const list = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  return new Map(list);
}
