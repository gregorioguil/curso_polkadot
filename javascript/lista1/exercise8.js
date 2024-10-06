console.log('########### Calcula média de lista de números ###########');
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function average(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum / list.length;
}

console.log(average(list));