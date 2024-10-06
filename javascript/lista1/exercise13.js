console.log('############# Fibonacci até o decimo termo #############');

function fibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}