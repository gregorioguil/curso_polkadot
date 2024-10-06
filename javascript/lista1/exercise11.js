console.log('############# Verifica se o número existe na lista #############');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verifyNumber(number) {
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] === number) {
            return true;
        }
    }
    return false;
}

rl.question('Digite um número: ', (number) => {
    const result = verifyNumber(parseFloat(number));
    console.log(`O número ${number} existe na lista: ${result}`);
    rl.close();
});