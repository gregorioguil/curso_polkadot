console.log('######## Remove espaços de uma string ########');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

rl.question('Digite uma string: ', (str) => {
    const result = removeSpaces(str);
    console.log(`A string sem espaços é: ${result}`);
    rl.close();
});