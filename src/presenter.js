import Publicacion from "./sumador";

const postdado = document.querySelector("#post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");

let publicaciones = [];
var mostrar = "hola";
var contador = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const post = postdado.value;
  publicaciones.push(post);
  div.innerHTML = "<p>" + publicaciones[contador] + "</p>";
  contador++;
});
