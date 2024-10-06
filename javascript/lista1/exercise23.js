console.log('############ Raiz quadrada de um número ############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function squareRoot(number) {
    return Math.sqrt(number);
}

rl.question('Digite um número: ', (number) => {
    const result = squareRoot(parseFloat(number));
    console.log(`A raiz quadrada de ${number} é: ${result}`);
    rl.close();
});