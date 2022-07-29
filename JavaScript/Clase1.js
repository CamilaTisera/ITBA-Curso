console.log('Hola mundo Javascript') //Mostrar por pantalla

//Variables

var nombre = 'Camila'
var numero = 15
var decimal = 15.2
var verdad = true
var falso = false

//Convenciones

//Upper Case
var NOMBRE2 = 'Camila'
//Upper camel case
var NombreApellido = 'Camila Tisera'
//Lower Camel Case
var equipoFutbol = 'Boca'
//Snake Case
var color_favorito = 'verde y blanco'

//Cambiar valor a la variable
nombre = 'Juan'  

//Constantes

const PI = 3.141592

alert('Probando')
prompt('Ingrese su nombre: ')  //ventana
var datoNombre = prompt('Ingrese nombre')  //Guardo la funcion

//if (un string con cero)
//Cualquier string excepto uno vacío (y "0" que no es vacío) se convierte en true en un contexto lógico.

var palabra = 0;
if(palabra == 0){
  alert('Hola')
}

//Tambien

if ("0") {
  alert( 'Hola' );
}

//Usando el constructor if..else, escribe el código que pregunta: ‘¿Cuál es el nombre “oficial” de JavaScript?’

//Si el visitante escribe “ECMAScript”, entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? ¡ECMAScript!”


var nombre = prompt('Ingrese el Nombre de Javascrip') 
if (nombre == "ECMAScript"){
  alert('Correcto')
}
else{
  alert('¿No lo sabes? ¡ECMAScript!')
}

//Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:

//1, si el valor es mayor que cero,
//-1, si es menor que cero,
//0, si es igual a cero.
//En la tarea asumimos que siempre el usuario introduce un número.


var numero = prompt('Ingrese un numero') 
if (numero > 0){
  alert('1')
}

else if (numero < 0){
  alert('-1')
}
else if(numero == 0){
  alert('0')
}

// tambien

let value = prompt('Escribe un número', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//
let result;
let a,b;
if (a + b < 4) {
  result = 'Debajo';
} else {
  result = 'Encima';
}

let resultado = (a + b < 4) ? 'Debajo' : 'Encima';

//
let message;
let login;
if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}

let inicio = prompt('Ingrese login')
var mensaje = (inicio == 'Empleado') ? 'Hola' : (inicio == 'Director')? 'Felicidades' : (inicio == '') ? 'Sin sesión' :
'';
alert(mensaje)

//Funcion REPLACE
var dog = 'El perro es hermoso'
console.log(dog)
console.log = dog.replace('perro','gato')

var string = 'camila'
string + '!!!'

function ponerleOnda(string){
    return string + '!!!'
}
string = ponerleOnda(string)
alert(string)

function gritalo(string){
    string = string.toUpperCase()
    return ponerleOnda(string)
}

alert(gritalo(string))

alert('funciona')

var nombre = 'Camila Tisera';
var edad = '23 años';
document.write(nombre);

var concatenar = nombre + ' ' + edad;
document.write(concatenar);

var datos = document.getElementById("datos");
datos.innerHTML = concatenar;

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
`;

//No es necesario declarar el tipo de variable
//Es sencible a mayusculas

var numero1 = 5;
var texto = 'Hola';
var numero2 = 5;

const numero3 = 20;
console.log(numero3);

alert(numero1);
alert(texto);
alert(numero1 + numero2)

numero1 = numero1 + 1;
numero3++;  //Incremento
numero3--; //Decremento




