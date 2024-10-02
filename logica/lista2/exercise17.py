print("######### Verificação de Número Perfeito #########");

number = int(input("Digite um número: "));

sum = 0;


for i in range(1, number):
  if number % i == 0:
    sum += i;

if sum == number:
  print("O número é perfeito!");
else:
  print("O número não é perfeito!");