describe("App load and event video feed modal pop-up test", () => {
  beforeEach(() => {
    // Load the app at the specified URL
    cy.visit("http://localhost:3000/turn-arounds?gateId=170FC2D1-7F0E-EE11-BFE8-088FC327E8E4");
  });

  it("checks for app load", () => {
    // Check if the body element is visible, which indicates the app is loaded
    cy.get("body").should("be.visible");
  });

  it("checks for presence of event video feed button", () => {
    // Check for a button with the text "Event Video"
    cy.contains("button", "Event Video").should("exist");
  });

  it("opens the event video feed modal", () => {
    // Click the "Event Video" button to open the modal
    cy.contains("button", "Event Video").click();

    // Check if the modal is visible
    cy.get("[aria-labelledby='transition-modal-title']").should("be.visible");
  });

  it("closes the event video feed modal", () => {
    // Open the modal
    cy.contains("button", "Event Video").click();

    // Check if the modal is visible
    cy.get("[aria-labelledby='transition-modal-title']").should("be.visible");

    // Click the close button to close the modal
    cy.get(".mui-style-79ws1d-MuiModal-root > .MuiBackdrop-root").click({
      force: true,
    });

    // Check if the modal is closed
    cy.contains(".event-modal").should("not.exist");
  });
});
