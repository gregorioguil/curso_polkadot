print("############### Média Ponderada ###############");

score1 = float(input("Digite a primeira nota: "));
score2 = float(input("Digite a segunda nota: "));
score3 = float(input("Digite a terceira nota: "));

weight1 = float(input("Digite o peso da primeira nota: "));
weight2 = float(input("Digite o peso da segunda nota: "));
weight3 = float(input("Digite o peso da terceira nota: "));

media = (score1*weight1 + score2*weight2 + score3*weight3)/(weight1 + weight2 + weight3);

print("A média ponderada é: ", media);