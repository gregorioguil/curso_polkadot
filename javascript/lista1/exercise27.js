console.log('########## Soma dos pares de uma lista ##########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

listNumber = [];


function sumEven(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
      if (list[i] % 2 === 0) {
          sum += list[i];
      }
  }
  return sum;
}

function recursiveAsyncReadLine() {
  rl.question('Digite um número ou -1 para sair: ', (number) => {
    
    if (number == -1) {
        const result = sumEven(listNumber);
        console.log(`A soma dos para é igual a: ${result}`);
        return rl.close();
    } else {
        console.log(number);
        console.log(listNumber);
        listNumber.push(parseFloat(number));
        recursiveAsyncReadLine();
    }
  });
}

recursiveAsyncReadLine();