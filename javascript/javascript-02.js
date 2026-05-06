let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")
let param = ""



for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pinta)   
}

function pinta( e ) {
    console.log(e.target.className)
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;
    const operador = operadores[key];
    console.log(operador.innerText)
    if (operador.innerText == "c") {
        operador.addEventListener("click", borrar)
    }if (operador.innerText == "+") {
        operador.addEventListener("click", sumar)   
    }if (operador.innerText == "=") {
         operador.addEventListener("click", igual)   
    } 

    operador.addEventListener("click", pinta2)   
}




function pinta2( e ) {
    console.log(e.target.innerText)
}

function borrar() {
    resultado.value = "";
}

function sumar() {
    param = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
}

function igual() {
    let param2 = resultado.value
    if (operacion == "+") {
        resultado.value = parseInt (param) + parseInt(param2)
    }
}