console.log('################## Verifica se um número é par ou ímpar ##################');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pairOrOdd(number) {
    if (number % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

rl.question('Digite um número:', (number1) => {
    const result = pairOrOdd(parseFloat(number1));
    console.log(`O número ${number1} é ${result}`);
    rl.close();
})
