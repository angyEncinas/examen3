class Publicacion {
  constructor() {
      this.textoPublicacion = "";
  }
  putTexto(publicacion){
    this.textoPublicacion = publicacion;
  }
  getTexto(publicacion){
    return this.textoPublicacion;
  }
}
 export default Publicacion;
