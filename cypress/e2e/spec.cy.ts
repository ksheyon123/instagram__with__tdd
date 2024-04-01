describe("template spec", () => {
  it("passes", () => {
    const username = "ksh1@c.com";
    const pw = "123qwe";
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=username]").type(username);
    cy.get("input[name=password]").type(pw);
  });
});
