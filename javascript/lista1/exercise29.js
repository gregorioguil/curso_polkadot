console.log('######## Verifica se a lista está ordenada ########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verifyList(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
            return false;
        }
    }
    return true;
}

listNumber = [];

function recursiveAsyncReadLine() {
  rl.question('Digite um número ou -1 para sair: ', (number) => {
    
    if (number == -1) {
        const result = verifyList(listNumber);
        if (result) {
          console.log(`A lista está ordenada`);
        } else {
          console.log(`A lista não está ordenada`);
        }
        return rl.close();
    } else {
        listNumber.push(parseFloat(number));
        recursiveAsyncReadLine();
    }
  });
}

recursiveAsyncReadLine();