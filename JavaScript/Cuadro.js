function cargarNombre(){
    var nombre = prompt('Ingrese un nombre Perro')
    var dato = document.getElementById("nomb1");
    dato.innerHTML = nombre;

    var nombre = prompt('Ingrese un nombre del dueño del Perro')
    var dato = document.getElementById("dueño1");
    dato.innerHTML = nombre;
    
    var nombre = prompt('Ingrese un nombre Gato')
    var dato = document.getElementById("nomb2");
    dato.innerHTML = nombre;
    
    var nombre = prompt('Ingrese un nombre del dueño del Gato')
    var dato = document.getElementById("dueño2");
    dato.innerHTML = nombre
}

cargarNombre()

function calculadoraAnimal(){
    let perro = parseFloat(document.getElementById('perros').value)
    let gato = parseFloat(document.getElementById('gatos').value)
    let gallinas = parseFloat(document.getElementById('gallinas').value)
    let result = document.getElementById('resultado').innerHTML = perro + gato + gallinas

}

calculadoraAnimal()

