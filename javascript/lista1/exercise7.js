console.log('############## Verifica se um número é par ou ímpar ##############');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

rl.question('Digite um número: ', (number) => {
  const result = primeNumber(parseFloat(number));
  console.log(`O número ${number} é primo: ${result}`);
  rl.close();
});