describe("Pagina Principal", () => {
  it("Deberia poder ver la publicacion en la lista de publicaciones", () => {
    cy.visit("/");
    cy.get("#post").type("Hola mundo");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "Hola mundo");
  });
  it("Deberia mostrar error", () => {
    cy.visit("/");
    cy.get("#post").type(" ");
    cy.get("#publicar-button").click();
    cy.get("#alerta-div").should("contain", "No se puede ingresar un post sin texto");
  });
});
