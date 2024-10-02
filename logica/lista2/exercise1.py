print("@@@@@@ Calculo de fatorial @@@@@@");
number = int(input("Dgite um numero: "));

def fat(n):
  if n == 0:
    return 1;
  return fat(n-1)*n;

print("Restultado: ",fat(number))