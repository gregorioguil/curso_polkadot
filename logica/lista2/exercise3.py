print("######### Índice de Massa Corporal (IMC) #########");
weight = float(input("Digite o seu peso(Kg): "));
height = float(input("Digite a sua altura(m): "));

def calculeIMC(weight, height):
  return weight/(height*height);

print("Seu IMC é: ", calculeIMC(weight, height))
