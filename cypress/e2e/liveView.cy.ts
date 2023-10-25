describe("Log Table", () => {
  before(() => {
    // Load the app at the specified URL
    cy.visit("http://localhost:3000/turn-arounds?gateId=FFFC423E-F36B-1410-892E-00DB4B75EBBD");
  });

  it("checks for app load", () => {
    // Check if the body element is visible which indicates the app is loaded
    cy.get("body").should("be.visible");
  });

  it("Camera Tabs Component should render", () => {
    // Check if the body element is visible which indicates the app is loaded
    cy.wait(5000);
    cy.get("#cameraTabs").should("be.visible");
  });

  describe("Overall Snapshot", () => {
    it("takes a screenshot", () => {
      cy.screenshot();
    });
  });
});
