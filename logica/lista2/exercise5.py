print("########### Tabuada ###########");
number = float(input("Digite um numero: "));

def mutiplicationTable(number):
  for i in range(10):
    print(i+1, "x", number, "=", (i+1)*number);

print("Tabuada do ", number);
mutiplicationTable(number)