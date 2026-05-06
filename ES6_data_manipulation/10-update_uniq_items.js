/**
 * Met à jour les quantités dans la Map : si la quantité est 1, elle devient 100.
 * @param {Map} map - La Map des courses à mettre à jour.
 * @throws {Error} Si l'argument n'est pas une Map.
 */
export default function updateUniqueItems(map) {
  // On vérifie si l'argument est bien une instance de Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // On parcourt la Map : le callback de forEach prend (valeur, clé)
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      // On met à jour la valeur directement dans la Map d'origine
      map.set(item, 100);
    }
  });

  return map;
}
