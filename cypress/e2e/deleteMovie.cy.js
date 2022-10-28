describe("Testing the deletion of Dangerous Liaison", () => {
  it("passes", () => {
    cy.visit("http://localhost:3002/");
    cy.contains("Dangerous Liaisons").should("exist");
    cy.get(":nth-child(1) > .ml-3 > :nth-child(5) > .bg-green-50").click();
    cy.contains("Dangerous Liaisons").should("not.exist");
  });
});
