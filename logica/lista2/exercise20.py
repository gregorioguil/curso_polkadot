print("########## Análise de Lista de Números ##########");

numberList = [];
run = True;

while (run):
  number = float(input("Digite um número para inserir na lista ou -1 para encerrar: "));
  if number == -1:
    run = False;
  else:
    numberList.append(number);

numberList.sort();
print("O mairo número é: ", numberList[len(numberList)-1]);
print("O menor número é: ", numberList[0]);
print("A média dos números é: ", sum(numberList)/len(numberList));