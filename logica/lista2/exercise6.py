print("######### Conta vogais #########");
phrase = input("Digite uma frase: ");
vowels = ['A', 'E', 'I', 'O', 'U'];

def countVowels(phrase):
  phrase = phrase.upper();
  count = 0;
  for i in range(len(vowels)):
    count += phrase.count(vowels[i]);
  return count;

print("A frase tem: ", countVowels(phrase) , 'vogais');