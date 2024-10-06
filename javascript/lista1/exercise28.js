console.log('########### Multiplica todos elementos de uma lista ###########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplyList(list) {
    let result = 1;
    for (let i = 0; i < list.length; i++) {
        result *= list[i];
    }
    return result;
}


function recursiveAsyncReadLine() {
  rl.question('Digite um número ou -1 para sair: ', (number) => {
    if (number == -1) {
        const result = multiplyList(listNumber);
        console.log(`A multiplicação dos elementos é igual a: ${result}`);
        return rl.close();
    } else {
        listNumber.push(parseFloat(number));
        recursiveAsyncReadLine();
    }
  });
}

recursiveAsyncReadLine();