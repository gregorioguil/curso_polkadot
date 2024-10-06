console.log('############ Verifica se é um palíndromo ############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verifyPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

rl.question('Digite uma string: ', (str) => {
    const result = verifyPalindrome(str);
    if (result) {
        console.log(`A string ${str} é um palíndromo.`);
    } else {
        console.log(`A string ${str} não é um palíndromo.`);
    }
    rl.close();
});