
// Como buena practica lo que que se cargue no genere conflicto. Es relacionado con las funciones que manipule DOMs 
addEventListener("DOMContentLoaded", (event) => { 
    console.log("Hola mundo!");
alert("Hola mundo!");
let holaMundo = document.getElementById("hola-mundo");

holaMundo.innerHTML = "aquí estoy!";

console.log("El contenido de la etiqueta h1 cambió satisfactoriamente")
})

