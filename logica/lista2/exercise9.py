print("##################### Ordenação de Números #####################");

number1 = float(input("Digite o primeiro número: "));
number2 = float(input("Digite o segundo número: "));
number3 = float(input("Digite o terceiro número: "));

list = [number1, number2, number3];
list.sort();
for i in list:
  print(i);
  