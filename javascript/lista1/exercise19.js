console.log('################ Temperatura de Celsius para Fahrenheit ################');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

rl.question('Digite a temperatura em Celsius: ', (celsius) => {
    const fahrenheit = celsiusToFahrenheit(parseFloat(celsius));
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
    rl.close();
});