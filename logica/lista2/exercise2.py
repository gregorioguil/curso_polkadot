print("######### Conversor de temperatura #########");
tempCelsius = float(input("Digite um número para temperatura em Celsius: "));

def convertTemp(temp):
  tempFahrenheit = (temp*9/5) + 32;
  tempKelvin = temp + 273.15;
  return tempFahrenheit, tempKelvin;

[tempFahrenheit, tempKelvin] = convertTemp(tempCelsius);

print("Temperatura em Fahrenheit: ", tempFahrenheit);
print("Temperatura em Kelvin: ", tempKelvin);