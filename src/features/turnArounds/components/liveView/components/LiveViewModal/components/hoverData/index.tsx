import React from "react";
import HoverDataStyles from "./styles";

const HoverData = ({ showHoverData }: any) => {
  return (
    <HoverDataStyles.Container sx={{ display: showHoverData ? "flex" : "none" }}>
      <HoverDataStyles.Content>
        <HoverDataStyles.TimeCard>
          <HoverDataStyles.Title>Started</HoverDataStyles.Title>
          <HoverDataStyles.Status>22:39:12</HoverDataStyles.Status>
        </HoverDataStyles.TimeCard>
        <p>-</p>
        <HoverDataStyles.TimeCard>
          <HoverDataStyles.Title>Ended</HoverDataStyles.Title>
          <HoverDataStyles.Status>In-progress</HoverDataStyles.Status>
        </HoverDataStyles.TimeCard>
      </HoverDataStyles.Content>
      <HoverDataStyles.Content>
        <HoverDataStyles.TimeCard>
          <HoverDataStyles.Title>Start delay</HoverDataStyles.Title>
          <HoverDataStyles.Status>10 mins</HoverDataStyles.Status>
        </HoverDataStyles.TimeCard>
        <p>-</p>
        <HoverDataStyles.TimeCard>
          <HoverDataStyles.Title>End delay</HoverDataStyles.Title>
          <HoverDataStyles.Status>In-progress</HoverDataStyles.Status>
        </HoverDataStyles.TimeCard>
      </HoverDataStyles.Content>
    </HoverDataStyles.Container>
  );
};

export default HoverData;
