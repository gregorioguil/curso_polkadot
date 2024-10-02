import random;

print("############### Jogo de Adivinhação ###############");

run = True;
attempts = 0;

randomNumber = random.randrange(101);

while(run):
  number = int(input("Digite um número de 0 a 100: "));
  if number == randomNumber:
    print("Você acertou! Depois de ", attempts, " tentativas!");
    run = False;
  else:
    print("Você errou! Tente novamente!");
    attempts += 1;
