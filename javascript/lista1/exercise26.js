console.log('################ string contém uma substring ################');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function containsSubstring(str, substring) {
    return str.includes(substring);
}

rl.question('Digite uma string: ', (str) => {
    rl.question('Digite uma substring: ', (substring) => {
        const result = containsSubstring(str, substring);
        console.log(`A string ${str} contém a substring ${substring}: ${result}`);
        rl.close();
    });
});