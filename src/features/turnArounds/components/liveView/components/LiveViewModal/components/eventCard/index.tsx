import React, { useState } from "react";
import EventCardStyles from "./styles";
import HoverData from "../hoverData";

const EventCard = () => {
  const [showHoverData, setShowHoverData] = useState(false);

  const openHoverData = () => {
    setShowHoverData(true);
  };

  const closeHoverData = () => {
    setShowHoverData(false);
  };

  return (
    <EventCardStyles.EventCard onMouseEnter={openHoverData} onMouseLeave={closeHoverData}>
      <EventCardStyles.StatusHighlighter />
      <EventCardStyles.Name>Airplane docked</EventCardStyles.Name>
      <EventCardStyles.Status>In-progress</EventCardStyles.Status>
      <HoverData showHoverData={showHoverData} />
    </EventCardStyles.EventCard>
  );
};

export default EventCard;
