lista = []

def ingresarUno():
  numero = input('ingrese un numero o string para finalizar')
  print(numero)
  while numero.isdigit():
    lista.append(int(numero))
    numero = input('ingrese un numero: ')

def decision():
    dec = input()
    if dec == '1':
        try:
          promedio = sum(lista)/len(lista)
          print('el promedio de los valores es :', promedio)
        except ZeroDivisionError:
           print('no se puede dividir por zero')
        elif dec == '2':
          print('la suma de los valores es: ', sum(lista))
        elif dec == '3':
           print(lista)
           while lista != []:
              lista.pop()
              print(lista)
         elif dec == '4':
           print('ha salido correctamente del programa')
         else:
           print('no ha salido una opcion valida')