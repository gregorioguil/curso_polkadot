print("######## Média de Notas ########");

score = 0;
mediam = 0
accumulatorScore = 0;
count = 0;

while score != -1:
  score = float(input("Digite a nota do aluno: "));
  if score != -1:
    accumulatorScore += score;
    count += 1;
    
print("Média: ", accumulatorScore/count);