let botones = document.getElementsByTagName("button")

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pinta)   
}

function pinta( e ) {
    console.log(e.target.innerText)
}