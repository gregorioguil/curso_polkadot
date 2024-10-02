print("############### Soma dos N primeiros Números ##############");

number = int(input("Digite um número: "));

sum = 0;

for i in range(1,number+1):
  sum += i;
  
print("A soma dos ", number, " primeiros números é: ", sum);