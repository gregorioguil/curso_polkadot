console.log('########### Calcula fatorial ###########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

rl.question('Digite um número: ', (number) => {
    const result = factorial(parseFloat(number));
    console.log(`O fatorial de ${number} é: ${result}`);
    rl.close();
});