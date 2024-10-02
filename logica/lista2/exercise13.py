print("#################### Soma de todos os números pare de 1 a 100 ####################");

sumPair = 0;

for i in range(1, 101):
  if i % 2 == 0:
    sumPair += i;

print("A soma dos números pares de 1 a 100 é: ", sumPair);