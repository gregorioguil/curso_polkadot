console.log('############# Vogais em uma string #############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

rl.question('Digite uma string: ', (str) => {
    const result = countVowels(str);
    console.log(`O número de vogais na string é: ${result}`);
    rl.close();
});