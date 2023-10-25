"use client";

import { NotificationsList } from "@/features";
import Menubar from "@/features/flights/components/menubar";
import Navbar from "@/components/navbar.tsx";
import FlightsStyles from "@/features/flights/styledComponents";
import React from "react";

const FlightsLayout = ({ children }: any) => {
  return (
    <FlightsStyles.RootContainer>
      <FlightsStyles.Container>
        <Navbar />
        <Menubar />
        <FlightsStyles.TabsContainer>{children}</FlightsStyles.TabsContainer>
      </FlightsStyles.Container>
      <FlightsStyles.NotificationsContainer>
        <NotificationsList />
      </FlightsStyles.NotificationsContainer>
    </FlightsStyles.RootContainer>
  );
};

export default FlightsLayout;
