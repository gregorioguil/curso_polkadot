console.log('########### Ordena lista de números ###########');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortList(list) {
    return list.sort((a, b) => a - b);
}

listNumber = [];

function recursiveAsyncReadLine() {
  rl.question('Digite um número ou -1 para sair: ', (number) => {
    
    if (number == -1) {
        const result = sortList(listNumber);
        console.log(`A lista ordenada é: ${result}`);
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

