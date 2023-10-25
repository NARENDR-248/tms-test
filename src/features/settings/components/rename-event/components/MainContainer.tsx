import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
// Importing Custom Hooks
import { useRenamingEventDialog, useRenamingEventsData } from "../store";
import { getEventsAPI } from "@/apis/settings/rename-event/useGetEventsAPI";

// Importing Components
import EventRenamingTable from "./EventRenamingTable";

// Styled Components
import { Components } from "../styled-components/sc-mc";

const MainContainer: FC = () => {
  const { i18n } = useTranslation();
  const { eventsRenamingData, setEventsRenamingData } = useRenamingEventsData();
  const { refetch, setRefetch } = useRenamingEventDialog();

  const getEventsFromDB = async () => {
    // Gettin the events & setting it to global store
    const data = await getEventsAPI();
    setEventsRenamingData(data);

    // Setting Refetch to false if its already true
    if (refetch) {
      setRefetch(false);
    }
  };

  // Using effect for onMount & OnUpdate when refetch is set true, means when event will be renamed
  useEffect(() => {
    if (refetch) {
      getEventsFromDB();
      return;
    }
    getEventsFromDB();
  }, [refetch, i18n.language]);

  return (
    <Components.RootWrapper className="hideScrollbar">
      <EventRenamingTable data={eventsRenamingData} />
    </Components.RootWrapper>
  );
};

export default MainContainer;
