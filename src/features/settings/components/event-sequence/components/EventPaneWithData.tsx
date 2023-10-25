import React, { useState, useRef, useMemo, ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { MenuItem, FormControl, Tooltip, SxProps, Theme } from "@mui/material";

// Importing Interfaces
import { IEventConfig } from "../utils/Interfaces";

// Importing Assets & Icons
import AircraftIconSmall from "../assets/icons/aircraft-sm.svg";
import RulerIconSmall from "../assets/icons/ruler-sm.svg";
import DayIconSmall from "../assets/icons/day-sm.svg";
import ExpandCollapse from "../assets/icons/expand-collapse.svg";

// Custom Components
import LineConnector from "./LineConnector";

// Styled Components
import { Components } from "../styled-components/sc-epwd";

// Styled Stylesheets - Importing overrided css
import "../assets/css/global.css";
import { useGenerateEventOccurrences } from "../store";

function EventPaneWithData({
  index,
  configuration,
  sx,
  updatePriority,
  alignedEventsCount,
  maxConsumedPriority,
}: {
  index: number;
  configuration: any;
  sx?: SxProps<Theme>;
  updatePriority: Function;
  alignedEventsCount: any;
  maxConsumedPriority: number;
}) {
  const animDelay = useRef(0);
  const eventTileRef = useRef<any>(null);
  const eventOccurrences = useRef<any>([]);
  const [eventPriority, setEventPriority] = useState(configuration.priority);
  const [isEventExpanded, setIsEventExpanded] = useState(true);
  const [connectorLineHeight, setConnectorLineHeight] = useState(0);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const carrierNames = useMemo(() => {
    const uniqueNames: string[] = [];
    return configuration.configCarriers
      .map((item) => {
        if (!isArabic) {
          if (!uniqueNames.includes(item.carrierFactor.carrier.carrier_name_en)) {
            uniqueNames.push(item.carrierFactor.carrier.carrier_name_en);
            return item.carrierFactor.carrier.carrier_name_en;
          }
        }
        if (isArabic) {
          if (!uniqueNames.includes(item.carrierFactor.carrier.carrier_name_ar)) {
            uniqueNames.push(item.carrierFactor.carrier.carrier_name_ar);
            return item.carrierFactor.carrier.carrier_name_ar;
          }
        }
        return "";
      })
      .filter(Boolean);
  }, [configuration]);

  const handleEventPrioirty = (e: any, configId: string, eventId: string, linkedEventId: null | string) => {
    setEventPriority(e.target.value);
    /*
        Callback function to update the state in MainContainer
        this updatePriority will execute either updatePriority callback or trackUpdatePriority
        depending upon if filters are applied or not
      */
    updatePriority(e.target.value, configId, eventId, linkedEventId);
  };
  const aircraftTypeExistanceCheck = (carrier: any[]) => {
    const narrowExists = carrier.some((item) => item.carrierFactor.aircraft_type_en === "Narrow Body");
    const wideExists = carrier.some((item) => item.carrierFactor.aircraft_type_en === "Wide Body");
    const bothExists = carrier.some((item) => item.carrierFactor.aircraft_type_en === "Both");

    const result = narrowExists
      ? `${t("ess.narrow-body")}`
      : wideExists
      ? `${t("ess.wide-body")}`
      : bothExists
      ? `${t("ess.both")}`
      : "";
    return result;
  };
  const timeOfDayExistanceCheck = (timeOfDay: any[]) => {
    const dayExists = timeOfDay.some((item) => item.carrierFactor.time_of_day_en === "Day");
    const nightExists = timeOfDay.some((item) => item.carrierFactor.time_of_day_en === "Night");
    const bothExists = timeOfDay.some((item) => item.carrierFactor.time_of_day_en === "Both");

    const result = dayExists
      ? `${t("ess.day")}`
      : nightExists
      ? `${t("ess.night")}`
      : bothExists
      ? `${t("ess.both")}`
      : "";
    return result;
  };
  const populateLineHeight = () => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Handle the change in dimensions here
        setConnectorLineHeight(entry.contentRect.height);
      }
    });

    if (eventTileRef.current) {
      resizeObserver.observe(eventTileRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  };
  const handleExpandCollapse = () => {
    setIsEventExpanded((prevState) => !prevState);
    populateLineHeight();
  };

  useEffect(() => {
    populateLineHeight();
  }, [isEventExpanded]);
  return (
    <Components.EventContainer
      sx={sx}
      ref={eventTileRef}
      style={!isEventExpanded ? { height: "72px", overflow: "hidden" } : {}}
    >
      {/* SVG Line Connector */}
      {alignedEventsCount > 1 && index + 1 != alignedEventsCount && (
        <LineConnector
          x1={0}
          y1={0}
          x2={0}
          y2={connectorLineHeight}
          style={configuration.linkedEventId === null ? { left: "16px" } : { left: "48px" }}
        />
      )}

      <Components.EventTile
        className="anim"
        sx={{
          display: "none",
          animationTimingFunction: "cubic-bezier(.26,.34,.71,.68)",
        }}
      >
        {/* Dividing Tile in two sections Event Details, Event priority */}
        <Components.EventDetailWrapper>
          {/* Expand And Collapse */}
          {configuration.children?.length > 0 && (
            <Components.EventCollapser
              src={ExpandCollapse}
              onClick={handleExpandCollapse}
              alt="#"
              style={!isEventExpanded ? { transform: "rotate(-90deg)" } : {}}
            />
          )}

          <Components.EventName>
            {/* {JSON.stringify(configuration.event)} */}
            {!isArabic
              ? configuration.event?.ui_name_en !== null
                ? configuration.event?.ui_name_en
                : configuration.event?.name_en
              : configuration.event?.ui_name_ar !== null
              ? configuration.event?.ui_name_ar
              : configuration.event?.name_ar}
          </Components.EventName>
          {configuration.hasOwnProperty("imaginary") && (
            <Components.EventInfoText>
              ({t("ess.imaginary-message")})
            </Components.EventInfoText>
          )}
          {!configuration.hasOwnProperty("imaginary") && (
            <>
              {configuration.minOccurrence === 0 && (
                <Components.EventInfoText>({t("ess.optional")})</Components.EventInfoText>
              )}
              <Components.EventInfoText>
                {`${t("ess.occurrence")} : ${configuration.occurrencePosition}`}
              </Components.EventInfoText>

              <Components.EventInfoText>
                {!isArabic ? configuration.event_type_en : configuration.event_type_ar}
              </Components.EventInfoText>

              {/* Event Tile Tags are from here */}
              <Components.EventTag>
                <Image src={AircraftIconSmall} alt="#" />
                <Tooltip title={carrierNames.join(",")} sx={{ maxWidth: "200px", minWidth: "auto" }}>
                  <Components.EventTagText>
                    {configuration?.configCarriers.length > 0 &&
                      // `${
                      //   i18n.language === "en_EN"
                      //     ? configuration?.configCarriers[0].carrier.carrier_name_en
                      //     : configuration?.configCarriers?.[0].carrier
                      //         .carrier_name_ar
                      // }, +${configuration?.configCarriers?.length - 1}`
                      `${carrierNames[0]} ${carrierNames?.length - 1 > 0 ? `, +${carrierNames?.length - 1}` : ""}`}
                  </Components.EventTagText>
                </Tooltip>
              </Components.EventTag>
              <Components.EventTag>
                <Image src={RulerIconSmall} alt="#" />
                <Components.EventTagText>
                  {configuration?.configCarriers?.length > 0 &&
                    aircraftTypeExistanceCheck(configuration?.configCarriers)}
                </Components.EventTagText>
              </Components.EventTag>
              <Components.EventTag>
                <Image src={DayIconSmall} alt="#" />
                <Components.EventTagText>
                  {configuration?.configCarriers?.length > 0 && timeOfDayExistanceCheck(configuration?.configCarriers)}
                </Components.EventTagText>
              </Components.EventTag>
            </>
          )}
        </Components.EventDetailWrapper>
        {!configuration.hasOwnProperty("imaginary") && (
          <Components.EventPriorityWrapper>
            {alignedEventsCount > 1 && (
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Components.EventPriority
                  value={configuration.priority}
                  onChange={(e) =>
                    handleEventPrioirty(e, configuration.id, configuration.eventId, configuration.linkedEventId)
                  }
                  displayEmpty
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                  className="priority-dropdown"
                  MenuProps={{
                    PaperProps: {
                      style: { background: "#11293E" },
                    },
                  }}
                >
                  {Array.from({
                    length: maxConsumedPriority === alignedEventsCount ? maxConsumedPriority : maxConsumedPriority + 1,
                  }).map((_, index) => {
                    /* 
                      As index in loop starts from 0 we are incrementing 
                      it to make it start from 1, because prioirty starts with 1 */
                    return (
                      <MenuItem value={index + 1} key={index + 1}>
                        <Components.EventPriorityTextDimmed>
                          {t("ess.priority")}
                          <Components.EventPriorityTextCount>{index + 1}</Components.EventPriorityTextCount>
                        </Components.EventPriorityTextDimmed>
                      </MenuItem>
                    );
                  })}
                </Components.EventPriority>
              </FormControl>
            )}
          </Components.EventPriorityWrapper>
        )}
      </Components.EventTile>
      {configuration.children?.length > 0 &&
        configuration.children?.map((item: any, index: number) => (
          <EventPaneWithData
            index={index}
            configuration={item}
            sx={{ paddingLeft: "32px" }}
            key={item.id}
            alignedEventsCount={configuration.children?.length}
            maxConsumedPriority={configuration.children?.reduce(
              (prevPriority, currentEvent) => Math.max(prevPriority, currentEvent.priority),
              1,
            )}
            /* 
            Because we are reducing in recursion 
            we will always have max priority stored here in maxConsumedPriority
            for Aligned Events
             */
            updatePriority={updatePriority}
          />
        ))}
    </Components.EventContainer>
  );
}
export default EventPaneWithData;
