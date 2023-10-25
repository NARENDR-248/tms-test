describe("Log Table", () => {
  beforeEach(() => {
    // Load the app at the specified URL
    cy.visit("http://localhost:3000/turn-arounds?gateId=FFFC423E-F36B-1410-892E-00DB4B75EBBD");
  });

  it("checks for app load", () => {
    // Check if the body element is visible which indicates the app is loaded
    cy.get("body").should("be.visible");
  });

  it("checks for query parameters after 10 seconds", () => {
    // Wait for 10 seconds
    cy.wait(10000);
    // Check if the URL includes the specified query parameters
    cy.url().should("include", "terminalId").and("include", "gateId");
  });

  it("if no data", () => {
    // cy.get("#no-turnAround").should("exist");
  });

  it("if data", () => {
    cy.get("#no-turnAround").should("not.exist");
  });

  describe("Overall Snapshot", () => {
    it("takes a screenshot", () => {
      cy.screenshot();
    });
  });
});
