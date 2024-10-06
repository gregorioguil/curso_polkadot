console.log('####### Conta quantos números ímpares existem na lista #######');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countOdd(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

listNumber = [];

function recursiveAsyncReadLine() {
  rl.question('Digite um número ou -1 para sair: ', (number) => {
    
    if (number == -1) {
      const result = countOdd(listNumber);
      console.log(`O número de ímpares na lista é: ${result}`);
      rl.close();
    } else {
      listNumber.push(parseFloat(number));
      recursiveAsyncReadLine();
    }
  });
}

recursiveAsyncReadLine();