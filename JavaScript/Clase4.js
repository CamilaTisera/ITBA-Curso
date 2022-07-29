//Escribe una función ucFirst(str) que devuelva el string str con el primer carácter en mayúscula
let str = 'camila'
nombre = str[0].toUpperCase() + str.slice(1);
console.log(nombre)

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst(str) );

  //
  //Escribe una función checkSpam(str) que devuelva true si str contiene rojo o ‘XXX’, 
  //de lo contrario false.
  
  let remedio = prompt('Ingrese diagnostico')
  let resultado = ''
  function checkSpam(remedio){
    let diag = remedio.toLowerCase();
    if (diag.includes('rojo') || diag.includes('xxx')) {
        resultado = 'true' 
    }
    else{
        resultado = 'false'
    }
    alert(resultado)
  }
  checkSpam(remedio)

  let remedio1 = prompt('Ingrese diagnostico')
  function checkSpam2(remedio1) {
    remedio1 = remedio1.toLowerCase();
  
    return remedio1.includes('rojo') || remedio1.includes('xxx');
  }
  
  alert( checkSpam2(remedio1) );

//
//Crea una función truncate(str, maxlength) que verifique la longitud de str y, 
//si excede maxlength – reemplaza el final de str con el carácter de puntos suspensivos "…", 
//para hacer su longitud igual a maxlength.
//El resultado de la función debe ser la cadena truncada (si es necesario).

let palabra = prompt('Ingresa una oracion')
let maxlength = '16'
function truncate(palabra, maxlength) {
    return (palabra.length > maxlength) ?
    palabra.slice(0, maxlength - 1) + '…' : palabra;
  }

alert(truncate(palabra, maxlength))

//
//Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y luego el número.
//Crea una función extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva.

let plata = '$120'
function extractCurrencyValue(plata){
    return +plata.slice(1);

}

alert(extractCurrencyValue(plata))