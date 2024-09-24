def pairOrOdd(number):
  if number % 2 == 0:
    return True;
  else:
    return False;

number = int(input("Digite um número: "));

if pairOrOdd(number):
  print("O número é par!");
else:
  print("O número é ímpar!");