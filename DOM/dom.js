const e = document.getElementById("contenedor1")
function saludar (){
    alert("Hola")
}


e.addEventListener("click", saludar, false)

function Modificar(){
    
    if(t1.firstChild.nodeValue == "Camila"){
        t1.firstChild.nodeValue = "Juan"
    }
}
const t = document.getElementById("t1")
t.addEventListener("click", Modificar, false)