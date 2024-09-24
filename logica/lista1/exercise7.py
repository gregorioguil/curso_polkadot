shoppingList = [];
item = "";

while item != "x":
  item = input("Digite um item para a compra ou x para sair: ");
  
  if item != "x":
    shoppingList.append(item);
    
for item in shoppingList:
  print("Item: ", item);
  