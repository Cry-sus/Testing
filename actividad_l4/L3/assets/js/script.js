// Como buena practica lo que que se cargue no genere conflicto. Es relacionado con las funciones que manipule DOMs 
window.addEventListener("DOMContentLoaded", () => {
  
  //obtener boton arriba por id
  const btnlearn = document.getElementById("btnlearn");
  if(btnlearn){
    btnlearn.addEventListener("click", () => {
      alert("Estamos recopilando información del resto de participantes")
    });
  }
  
  // Obtenemos el botón por su id
  const button = document.getElementById("btnalert");

  // Verificamos que el botón exista en el DOM
  if (button) {
    // Agregamos el listener para el evento "click"
    button.addEventListener("click", () => {
      alert("Estamos negociando los derechos de autor.");
    });
  }
  
  //obtener boton arriba por id
  const buttonarriba = document.getElementById("btnarriba");
  if(buttonarriba){
    buttonarriba.addEventListener("click", () => {
      window.scrollTo(
        {
          top: 0,
          behavior: "smooth"
        }
      )
    });
  }
  
});
