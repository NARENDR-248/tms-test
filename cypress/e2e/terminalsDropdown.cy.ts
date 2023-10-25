describe("App load and terminal dropdown test", () => {
  beforeEach(() => {
    // Load the app at the specified URL
    cy.visit("http://localhost:3000/turn-arounds");
  });

  it("checks for app load", () => {
    // Check if the body element is visible which indicates the app is loaded
    cy.get("body").should("be.visible");
  });

  it("checks for presence of the terminal dropdown ", () => {
    //waith for 5 seconds
    cy.wait(5000);

    //check for an element with a class name 'terminalDropdown'
    cy.get(".terminal-dropdown").should("exist");
  });
});
