console.log('############### Verifica se dois números são múltiplos ###############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiple(number1, number2) {
    if (number1 % number2 === 0 || number2 % number1 === 0) {
        return true;
    } else {
        return false;
    }
}

rl.question('Digite o primeiro número: ', (number1) => {
    rl.question('Digite o segundo número: ', (number2) => {
        const result = multiple(parseFloat(number1), parseFloat(number2));
        if (result) {
          console.log(`Os números ${number1} e ${number2} são múltiplos`);
        } else {
          console.log(`Os números ${number1} e ${number2} não são múltiplos`); 
        }
        rl.close();
    });
});