console.log('######## Valor absoluto de um número ########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function absoluteValue(number) {
    return Math.abs(number);
}

rl.question('Digite um número: ', (number) => {
    const result = absoluteValue(parseFloat(number));
    console.log(`O valor absoluto de ${number} é: ${result}`);
    rl.close();
});