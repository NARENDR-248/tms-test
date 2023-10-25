"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

// Importing Components
import FilterPanel from "./FilterPanel";
import EventPaneWithData from "./EventPaneWithData";
import MobileHeader from "./MobileHeader";
import MobileFilterPopper from "./MobileFilterPopper";
import FetchingLoading from "./FetchingLoading";

// Importing Data Dependency
import flatJson from "./dummy-data";

// Importing Interfaces
import { IApplicableFilters } from "../utils/Interfaces";

// Importing Hooks
import {
  getConfigruations,
  getConfigruationsWithFilters,
} from "@/apis/settings/event-sequence/eventSequenceAPIs";
import { updateConfigurationPriority } from "@/apis/settings/event-sequence/eventSequenceAPIs";

// Importing Custom Css
import "../assets/css/global.css";
import { Components } from "../styled-components/sc-mc";

// Styled Components


function MainContainer() {
  const isMobileViewport = useMediaQuery("(max-width: 576px)");
  const isTabViewport = useMediaQuery("(max-width: 991.98px)");
  
    const isLargeDevicesViewport = useMediaQuery("(max-width: 1399.98px)");
  const { i18n } = useTranslation();
  // Showing Mobile Filter Popper states
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [loader, setLoader] = useState(false);
  // This will track down is filter applid using callback
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [trackedData, setTrackedData] = useState([]);
  // This will be always preserved as original data fetchedFrom API, irrespective of filter, updates implications
  const [flatJsonEventData, setFlatJsonEventData] = useState([]);
  /* Using nestedJsonEventData for generating the chart in the UI */
  const [nestedJsonEventData, setNestedJsonEventData] = useState<any>([]);

  /* 
  Function which gets all the configruations from the db
  */
  const fetchConfigruations: Function = async () => {
    try {
      setLoader(true);
      const response = await getConfigruations();
      // This is to keep track of priority shifts during filter applied.
      setTrackedData(response.flatJsonData);
      // This is to have flat json from DB because filters we would apply it on flatjson for optimization then.
      setFlatJsonEventData(response.flatJsonData);
      // This will be iniital nested data from DB & backend
      setNestedJsonEventData(response.nestedJsonData);
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  /*
  Using updatePriority as a callback function in EventPane Component
  to update the state of priority in parent Component
  */
  /*
    DB
  */
  const updatePriorityToDB: Function = async (
    priority: number,
    configId: string,
    eventId: string,
    linkedEventId: null | string
  ) => {
    try {
      await updateConfigurationPriority(
        priority,
        configId,
        eventId,
        linkedEventId
      );
      const response = await getConfigruations();
      /*   
      After priority upadte setting new nested json now 
      from backend to tracked data & nested json state
      */
      setTrackedData(response.flatJsonData);
      setNestedJsonEventData(response.nestedJsonData);
    } catch (err) {
      console.log(err);
    }
  };
  /*
  Using trackUpdatePriority as a callback function in EventPane Component
  to track update the state of priority in parent Component when filters are applied
  */
  /*
    DB
  */
  const trackUpdatePriorityDB: Function = async (
    priority: number,
    configId: string,
    eventId: string,
    linkedEventId: null | string
  ) => {
    try {
      await updateConfigurationPriority(
        priority,
        configId,
        eventId,
        linkedEventId
      );
      const response = await getConfigruations();
      /* 
      After priority upadte setting new nested json now 
      from backend to tracked data only, because we dont have to 
      show priority changes once data is filtered.
      */
      setTrackedData(response.nestedJsonData);
    } catch (err) {
      console.log(err);
    }
  };

  // Implenting getting configruations data from backend onload & when lang changes
  useEffect(() => {
    /* 
    Fetching all configurations from backend with nested json
    & rendereding it when lang changes
    */
    fetchConfigruations();
  }, [i18n.language]);

  /* Apply Group Filter using callback*/
  const applyGroupFilterOnChart = async (appliedFilter: IApplicableFilters) => {
    /* 
    Applying filter business logic from backend now as
    we have migrated over event sequence generation to backend
    */
    const filteredData = await getConfigruationsWithFilters(
      encodeURIComponent(JSON.stringify(appliedFilter))
    );

    // Tracking & Updating here based on if user switch priority after applying filters or not
    if (
      trackedData.length > 0 &&
      appliedFilter.carrier.length === 0 &&
      appliedFilter.aircraftType.length === 0 &&
      appliedFilter.timeOfDay.length === 0
    ) {
      setNestedJsonEventData(filteredData);
    } else {
      if (
        appliedFilter.carrier.length > 0 ||
        appliedFilter.aircraftType.length > 0 ||
        appliedFilter.timeOfDay.length > 0
      ) {
        setNestedJsonEventData(filteredData);
      } else {
        setNestedJsonEventData(trackedData);
      }
    }

    // This check here is for for passing the callback function if we have update priority or track it
    if (
      appliedFilter.carrier.length === 0 &&
      appliedFilter.aircraftType.length === 0 &&
      appliedFilter.timeOfDay.length === 0
    ) {
      setIsFilterApplied(false);
    } else {
      setIsFilterApplied(true);
    }
  };
  return (
    <Components.RootWrapper
      sx={{
        flexDirection: isMobileViewport ? "column" : "row",
      }}
    >
      {/* Using Hook Determining is mobile viewport than showing mobile 
        header for event sequence */}
      {isMobileViewport && (
        <MobileHeader
          openFilterPopper={() => setShowMobileFilter(true)}
          isFilterApplied={isFilterApplied}
        />
      )}

      {showMobileFilter && (
        <MobileFilterPopper
          applyGroupFilterOnChart={(appliedFilter) =>
            applyGroupFilterOnChart(appliedFilter)
          }
          closeFilterPopper={() => setShowMobileFilter(false)}
        />
      )}

      {!isMobileViewport && (
        <Components.FilterWrapper>
          <FilterPanel
            applyGroupFilterOnChart={(appliedFilter) =>
              applyGroupFilterOnChart(appliedFilter)
            }
          />
        </Components.FilterWrapper>
      )}
      <Components.MobileWrapper>
      <Components.ChartWrapper
        className="hideScrollbar"
        sx={{
          display: nestedJsonEventData.length === 0 ? "flex" : "block",
          overflow: "auto",
          width: isMobileViewport || isTabViewport || isLargeDevicesViewport ? "1200px" : "unset",
        }}
      >
        {nestedJsonEventData.length === 0 && (
          <FetchingLoading loader={loader} />
        )}

        {nestedJsonEventData.map((configItem, index: number) => (
          <EventPaneWithData
            index={index}
            configuration={configItem}
            key={configItem.id}
            alignedEventsCount={nestedJsonEventData.length}
            maxConsumedPriority={nestedJsonEventData.reduce(
              (prevPriority, currentEvent) =>
                Math.max(prevPriority, currentEvent.priority),
              1
            )}
            /* 
               Because we are reducing in recursion 
              we will always have max priority stored here in maxConsumedPriority
              for Aligned Events
              */
            updatePriority={
              !isFilterApplied ? updatePriorityToDB : trackUpdatePriorityDB
            }
          />
        ))}
      </Components.ChartWrapper>
      </Components.MobileWrapper>
    </Components.RootWrapper>
  );
}

export default MainContainer;