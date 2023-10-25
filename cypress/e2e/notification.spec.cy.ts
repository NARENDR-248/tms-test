describe("App load and notification tests", () => {
  beforeEach(() => {
    // Load the app at the specified URL
    cy.visit("http://localhost:3000/turn-arounds");
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

  it("checks for presence of notification icon and drawer on small screens", () => {
    // Run only if viewport width is less than 1440px
    if (Cypress.config("viewportWidth") < 1440) {
      cy.get("#notif-icon-test", { timeout: 10000 }).should("exist").click();

      // Wait for 2 seconds after clicking the icon
      cy.wait(2000);

      cy.get("#notif-drawer-test").should("exist");

      // Check for the presence of two elements with the classname 'notif-tabs'
      cy.get(".notif-tabs").should("exist");
    }
  });

  it("checks for presence of notification section on large screens", () => {
    // Run only if viewport width is greater than 1440px
    if (Cypress.config("viewportWidth") >= 1440) {
      cy.get("#notif-section-test", { timeout: 10000 }).should("exist");

      // Check for the presence of two elements with the classname 'notif-tabs'
      cy.get(".notif-tabs").should("have.length", 2);
    }
  });
});
