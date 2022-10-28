describe("Testing the addition of a movie", () => {
  it("passes", () => {
    cy.visit("http://localhost:3002/");
    cy.get("#CreateNewMovie").click();
    cy.get("#grid-title").type("The Empire Strikes Back");
    cy.get("#grid-director").type("Irvin Kershner");
    cy.get("#grid-plot").type(
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."
    );
    // cy.get("#addMovieButton").click();

    // cy.contains("Dangerous Liaisons").should("not.exist");
  });
});
