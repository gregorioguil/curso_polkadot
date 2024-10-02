print("######## Sequência de Fibonacc ########");

number = int(input("Digite um número: "));

a = 0;
b = 1;
fibonacc = 0;
count = 1;

print(a);
print(b);

for i in range(number):
  fibonacc = a + b;
  a = b;
  b = fibonacc;
  print(fibonacc);
  
  
  