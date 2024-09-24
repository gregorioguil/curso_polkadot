def primeNumber(number):
  if number <= 1:
    return False;
  for i in range(2, number):
    if number % i == 0:
      return False;
  return True;

init = int(input("Digite o primeiro númeor do intervalo de numeros "));
end = int(input("Digite o ultimo número do intervalo de números "));

while init <= end:
  if primeNumber(init):
    print(init);
  init = init + 1;
  