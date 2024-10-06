console.log('########## Substitui vogais por * ##########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, '*');
}

rl.question('Digite uma string: ', (str) => {
  const result = replaceVowels(str);
  console.log(`A string com as vogais substituídas é: ${result}`);
  rl.close();
});