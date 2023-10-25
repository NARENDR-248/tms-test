import React from "react";
import LogTable from "./index";
import { verify } from "crypto";

// Props to be sent
let gateId = "03F05384-7DE9-ED11-931C-401C83E8B6DC";
let turnAroundId = "BD28E33B-0109-EE11-9329-401C83E8B6D8";

describe("<LogTable />", async () => {
  it("renders <LogTable /> with gateId only", () => {
    cy.mount(<LogTable gateId={gateId} />);
    cy.viewport("macbook-16");
    cy.window().its("props").its("gateId").should("eq", gateId);
    cy.window().its("props").its("turnAroundId").should("eq", undefined);
    cy.wait(1000);
    cy.window().then((win: any) => {
      let state: any = win.state;
      if (state.turnAroundHappening === false) {
        cy.get("#no-turnAround").should("exist");
      } else {
        cy.get("#no-turnAround").should("not.exist");
        if (state.rows.length) {
          // cy.get("#table").should("exist");
        }
      }
    });
  });
});

describe("<LogTable /> with gateId and turnAroundId", async () => {
  it("renders <LogTable /> with gateId and turnAroundId", () => {
    cy.mount(<LogTable gateId={gateId} turnAroundId={turnAroundId} />);
    cy.viewport("macbook-16");
    cy.window().its("props").its("gateId").should("eq", gateId);
    cy.window().its("props").its("turnAroundId").should("eq", turnAroundId);
    cy.wait(1000);
    cy.window().then((win: any) => {
      let state: any = win.state;
      if (state.turnAroundHappening === false) {
        cy.get("#no-turnAround").should("exist");
      } else {
        cy.get("#no-turnAround").should("not.exist");
        if (state.rows.length) {
          // cy.get("#table").should("exist");
        }
      }
    });
  });
});
