console.log('############# Soma dos dígitps de um número #############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

rl.question('Digite um número: ', (number) => {
    const result = sumDigits(parseFloat(number));
    console.log(`A soma dos dígitos de ${number} é: ${result}`);
    rl.close();
});