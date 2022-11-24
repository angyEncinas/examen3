import Publicacion from "./sumador";

const postdado = document.querySelector("#post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#alerta-div");
let publicaciones = [];
var mostrar = "hola";
var contador = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let post = postdado.value;
  if(post = " "){
    div2.innerHTML = "<p>" + "No se puede ingresar un post sin texto" + "</p>";
  }
  publicaciones.push(post);
  div.innerHTML = "<p>" + post + "</p>";
  contador++;

  
});
