$(document).ready(function () {
  // Agregar dinámicamente elementos a la lista
  $("#ulist").append("<li>Cuarto elemento agregado con jQuery</li><br>");
  $("#ulist").append("<li>Sexto elemento agregado con jQuery</li><br>");

  // Cambiar el color de texto de los li de la lista
  $("#ulist li").css("color", "yellow");

  // --- LÓGICA DEL BOTÓN OCULTAR/MOSTRAR LISTA ---
  // Evento para ocultar/mostrar la lista y cambiar el texto del botón
  $("#hiddelist").on("click", function () {
    $("#ulist").toggle(); // Oculta / muestra la lista

    // Cambiar el texto del botón según si la lista está visible o no
    if ($("#ulist").is(":visible")) {
      $(this).text("Ocultar lista");
    } else {
      $(this).text("Mostrar lista");
    }
  });
});
