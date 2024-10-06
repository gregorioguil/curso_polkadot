console.log('############ Invert string ############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

rl.question('Digite uma string: ', (str) => {
    const result = reverseString(str);
    console.log(`A string invertida é: ${result}`);
    rl.close();
});