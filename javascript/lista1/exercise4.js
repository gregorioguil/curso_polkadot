console.log('################# Retorna maior de dois números #################');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greater(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

rl.question('Digite o primeiro número: ', (number1) => {
    rl.question('Digite o segundo número: ', (number2) => {
        const result = greater(parseFloat(number1), parseFloat(number2));
        console.log(`O maior número é: ${result}`);
        rl.close();
    });
});