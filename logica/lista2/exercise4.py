print("########### Verifica se é um palíndromo ###########");
word = input("Digite uma palavra: ");

def verifyPalindrome(word):
  invertWord = word[::-1];
  if invertWord == word:
    return True;
  return False;

if verifyPalindrome(word):
  print("É um palíndromo");
else:
  print("Não é um palíndromo");