$(document).ready(function () {
  $("#link").on("click", function (event) {
    event.preventDefault();
    alert("Estás siendo redireccionado a Google.");
    $(location).attr("href", "https://www.google.com/?hl=es");
  });
});
