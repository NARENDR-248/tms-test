import React from "react";
import FlightTimings from "./index";
import { QueryClient, QueryClientProvider } from "react-query";

// Props to be sent
let turnAroundId = "1C4F04E8-C905-EE11-9328-401C83E8B6D8";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

describe("<FlightTimings />", async () => {
  it("renders <FlightTimings /> with turnAround", () => {
    cy.mount(
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <FlightTimings />
      </QueryClientProvider>,
    );
    cy.viewport("macbook-16");
    cy.window().then((win: any) => {
      let state: any = win.state;
      // if (state.turnAroundHappening === true) {
      //   cy.get("#no-turnAround").should("exist");
      // }
    });
  });
});
