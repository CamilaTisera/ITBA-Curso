lista = []  

def listaFinal():  
    suma = 1
    numeros = 0
    while suma <= 5 and numeros != 2 :

      numeros = int(input('ingrese un numero '))
      lista.append(numeros)
      suma += 1
    eleccion = str(input('¿Quiere el promedio o la suma? '))
    if eleccion == 'promedio':
      promedio = sum(lista) / len(lista)
      print(promedio)
    if eleccion == "suma":
      sum(lista)
      print(sum(lista))

        

    return lista

if __name__== '__main__':
  listaFinal()
  print(lista)


