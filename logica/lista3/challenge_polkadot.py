print("############# Desafio multiplos de um intervalo #############");

number1 = int(input("Digite o primeiro número: "));
number2 = int(input("Digite o segundo número: "));

sum = 0;

for i in range(number1, number2+1):
  if i % 3 == 0 and i % 5 == 0:
    continue;
  
  if i % 3 == 0:
    sum += i;
  elif i % 5 == 0:
    sum -= i;

    
print("O valor total calculado é: ",sum, ".");