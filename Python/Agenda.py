#un programa que nos de opciones, Menu 1 : buscar un telefono por nombre, 
#si existe nos devuelve el telefono, si no existe, nos da la opcion de ingresarlo, 
#Menu 2: mostrar todos los telefonos, Menu 3: agendar un nuevo telefono
#nombre, apellido, telefono, tipo (laboral, personal)

import csv

Agenda = []

def readFile():
    file = open('Agenda.csv', 'r')
    csvfile = csv.reader(file)
    for row in csvfile:
        if row != []:
           data = {'Nombre':row[0],'Apellido':row[0], 'Telefono':row[0],'Tipo':row[0]}
           Agenda.append(row)
    file.close()

def printAgenda(Agenda):
    for amigo in Agenda:
        if amigo['Nombre'] == "Camila":
          print(amigo['Telefono'])

def grabarAmigo():
    nombre = input('ingrese nombre')
    apellido = input('ingrese apellido')
    telefono = input('ingrese telefono')
    cumpleaños = input('ingrese tipo')
    data = {'Nombre': nombre, 'Apellido': apellido,'Telefono': apellido,'Tipo': apellido,}
    Agenda.append(data)
    writeFile(Agenda)

def writeFile(Agenda):
    file = open('Agenda','a')
    csvfile = csv.writer(file)
    for amigo in Agenda:
        csvfile.writerow([amigo['Nombre'],amigo['Apellido'],amigo['Telefono'],amigo['Tipo']])
    file.close()

#metodos
if __name__ == '__main__':
    op = input('ingrese opcion')
    if op == '1':
      printAgenda(Agenda)
    elif op == '2':
      readFile()
    elif op == '3':
        grabarAmigo()
