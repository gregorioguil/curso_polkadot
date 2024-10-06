console.log('########### Função soma dois números ###########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function sum(number1, number2) {
    return number1 + number2;
}

rl.question('Digite o primeiro número: ', (number1) => {
    rl.question('Digite o segundo número: ', (number2) => {
        const result = sum(parseFloat(number1), parseFloat(number2));
        console.log(`A soma dos números é: ${result}`);
        rl.close();
    });
});
