print("####### Bingo polkadot #######")

import random

card_bingo = []
numbers_bingo = []
drams_count = 0

index = 0

while len(card_bingo) < 5:
    number = random.randrange(76)
    if number in card_bingo:
        continue
    else:
        card_bingo.append(number)

print("Sua cartela: ", card_bingo)

for i in range(76):
    numbers_bingo.append(i)

def prize_draw():
    return random.randrange(len(numbers_bingo))

while (len(card_bingo) > 0):
    drawn_number = prize_draw()
    print("Número sorteado: ", numbers_bingo[drawn_number])
    if numbers_bingo[drawn_number] in card_bingo:
        print("Quantidade de números sorteados: ", drams_count)
        card_bingo.remove(numbers_bingo[drawn_number])
        print("Você acertou! Números restantes na cartela: ", card_bingo)
    numbers_bingo.pop(drawn_number)
    drams_count += 1
print("Parabéns! Você completou sua cartela em ", drams_count, " sorteios!")
   