// Affiche le message de bienvenue initial
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// On configure l'écouteur sur l'entrée standard (stdin)
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// On gère l'événement de fin de processus
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
