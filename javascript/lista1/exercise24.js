console.log('############# Divisores de um número #############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function divisors(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}

rl.question('Digite um número: ', (number) => {
    divisors(parseFloat(number));
    rl.close();
});