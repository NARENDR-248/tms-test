"use client";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import LogTable from "../src/features/turnArounds/components/timeStamps/components/logTable";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

let gateId = "03F05384-7DE9-ED11-931C-401C83E8B6DC";
let turnAroundId = "1BFE9726-6FF8-ED11-9321-401C83E8B6D8";

describe("Time Stamps Table", () => {
  it("renders the table", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LogTable gateId={gateId} />
      </QueryClientProvider>,
    );
    expect(screen.getByRole("log-table")).toBeInTheDocument();
    expect(screen.getByRole("first-header")).toBeInTheDocument();
    // expect(screen.state('color')).toEqual('transparent');
    // expect(screen.getByRole("title")).toHaveTextContent("Time Stamps");
    // check if all components are rendered
  });
});
