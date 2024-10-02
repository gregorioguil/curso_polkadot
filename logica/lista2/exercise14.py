print("################# Calculadora simples #################");

number1 = float(input("Digite o primeiro número: "));
number2 = float(input("Digite o segundo número: "));

op = input("Digite a operação (+, -, *, /): ");

if op == '+':
  print(number1 + number2);
elif op == '-':
  print(number1 - number2);
elif op == '*':
    print(number1 * number2);
elif op == '/':
    print(number1 / number2);
else:
  print("Operação inválida");