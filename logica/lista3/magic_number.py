print("############ Desafio número mágico ############")

startNumber = int(input("Digiteo número inicial do intervalo: "))
endNumber = int(input("Digite o número final do intervalo: "))

def primeNumber(number):
    if number <= 1:
        return False
    for i in range(2, number):
        if number % i == 0:
            return False
        return True

def sumDigits(number):
    sum = 0
    while number > 0:
        sum += number % 10
        number //= 10
    return sum

def verifyOdd(number):
    if number % 2 == 0:
        return False
    else:
        return True

magicNumber = 0

for i in range(startNumber, endNumber+1):
    print(i)
    if primeNumber(i):
        if i % 4 == 0:
            print(i)
            print("Dentro do if divisivel por 4")
            sumDigitsNumber = sumDigits(i)
            if verifyOdd(sumDigitsNumber):
                magicNumber = i
                break

if magicNumber:
    print("Número mágico ", magicNumber, " encontrado no intervalo.")
else:
    print("Número mágico não encontrado no intervalo.")