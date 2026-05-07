/**
 * Exécute une fonction mathématique de manière sécurisée.
 * @param {Function} mathFunction - La fonction à exécuter.
 * @returns {Array} Un tableau contenant le résultat (ou l'erreur) et un message de suivi.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // On tente d'exécuter la fonction et d'ajouter le résultat
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // Si une erreur est levée, on ajoute son message sous forme de chaîne
    queue.push(String(error));
  } finally {
    // Dans tous les cas (succès ou erreur), on ajoute ce message
    queue.push('Guardrail was processed');
  }

  return queue;
}
