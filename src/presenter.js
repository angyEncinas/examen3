import Publicacion from "./sumador";

const postdado = document.querySelector("#post");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");
pub = new Publicacion();
let publicaciones = []
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const post = postdado.value;
  pub.putTexto(post);
  div.innerHTML = "<p>" +pub.getTexto() + "</p>";
});
