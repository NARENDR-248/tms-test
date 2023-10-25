describe("App load and flights page tests", () => {
  beforeEach(() => {
    // Load the home page
    cy.visit("http://localhost:3000/");
  });

  it("check for app load", () => {
    // Check if the body element is visible which indicates the app is loaded
    cy.get("body").should("be.visible");
  });

  it("wait 10 seconds. check flights button, click it.", () => {
    // Wait for 10 seconds
    cy.wait(10000);
    // Check for a button with the classname "flights-navbar-button"
    cy.get(".flights-navbar-button").should("exist").click();
    // Wait for 5 seconds
    cy.wait(5000);
  });

  it("check if all the tabs exist on flights page", () => {
    // Visit flights page
    cy.visit("http://localhost:3000/flights/ongoing");
    // Check for the 3 tab selectors
    cy.get(".ongoing-tab").should("exist");
    cy.get(".incoming-tab").should("exist");
    cy.get(".departed-tab").should("exist");
  });

  it("check if the 3 filter components exist", () => {
    // Visit flights page
    cy.visit("http://localhost:3000/flights/ongoing");
    // Check for the 3 filters
    cy.get(".search-filter").should("exist");
    cy.get(".terminal-dropdown").should("exist");
    cy.get(".date-range-filter").should("exist");
  });
});
