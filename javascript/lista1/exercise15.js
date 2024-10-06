console.log('############# Conta caracteres de uma string #############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countCharacters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
    }
    return count;
}

rl.question('Digite uma string: ', (str) => {
    const result = countCharacters(str);
    console.log(`O número de caracteres na string é: ${result}`);
    rl.close();
});