import Publicacion from "./sumador.js";

describe("Crear publicacion", () => {
  let pub = new Publicacion();
  it("deberia añadir a la publicacion", () => {
    pub.putTexto("Hola mundo")
    expect(pub.textoPublicacion).toEqual("Hola mundo");
  });
});
