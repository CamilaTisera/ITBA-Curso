import csv

def dividir(a,b):
    try:
        return a / b
    except ZeroDivisionError:
        b = 1
        return "No se puede dividir por cero"
        return a / b
    except TypeError:
        return "Ingreso un tipo de dato incorrecto"

def suma(a,b):
    try:
        return a + b
    except TypeError:
        return "Ingreso un tipo de dato incorrecto"
def LoadFile():
    try:
        file = open("test.csv", "r")
        csvfile = csv.reader(file)
        print(csvfile)
    except FileNotFoundError:
        print("No se encuentra el archivo")
    except IDError:
        print("Error de entrada/salida de info")
    except:
        print("Error desconocido")
    finally:
        if not(file.closed):
            file.close()

if __name__=="__main__":
    print(dividir(5,2))
    print(dividir(5,1))
    print(dividir(8,2))
    
    print(suma(5,4))
    LoadFile()
    print("Fin del programa")

if __name__=="__main__":
    while runtime:
        print(opciones)
        op = input("Ingrese una opcion")
        if op == "1":
            try:
                file = open("test.csv", "r")
                csvfile = csv.reader(file)
                print(csvfile)
            
            except:
                print("No se encontro el archivo")
                continue
        if op == "3"
          runtime = False
          continue