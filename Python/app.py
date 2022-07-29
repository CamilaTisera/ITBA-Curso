import csv

amigos = []
#funciones
def readFile():
    file = open('test.csv', 'r')
    csvfile = csv.reader(file)
    for row in csvfile:
        if row != []:
           data = {'Nombre':row[0]}
           amigos.append(row)
    file.close()

def printAmigos(amigos):
    for amigo in amigos:
        if amigo['cumpleaños'] == "13-05-1986":
          print(amigo['Nombre'])

def grabarAmigo():
    nombre = input('ingrese nombre')
    apellido = input('ingrese apellido')
    telefono = input('ingrese telefono')
    cumpleaños = input('ingrese cumpleaños')
    data = {'Nombre': nombre, 'apellido': apellido}
    amigos.append(data)
    writeFile(amigos)

def writeFile(amigos):
    file = open('test','a')
    csvfile = csv.writer(file)
    for amigo in amigos:
        csvfile.writerow([amigo['nombre']])
    file.close()

#metodos
if __name__ == '__main__':
    print('bienvenido')
    print('elija un opcion')
    print('imprimir amigos')
    print('imprimir amigo')
    op = input('ingrese opcion')
    if op == '1':
      readFile()
      printAmigos(amigos)
    elif op == '2':
      grabarAmigo()
    else:
        print('gracias')