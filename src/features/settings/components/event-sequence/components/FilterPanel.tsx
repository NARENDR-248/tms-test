import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { List, ListItemText, Collapse, Button, Divider } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

// Importing Hooks
import { getAllCarriers } from "@/apis/settings/config-setting/useCarriers";

// Importing Icons & Images
import SearchIconInput from "../assets/icons/searchinput.svg";

// Styled Components
import { Components } from "../styled-components/sc-fp";

function FilterPanel({
  applyGroupFilterOnChart,
}: {
  applyGroupFilterOnChart: any;
}) {
  const { t, i18n } = useTranslation();
  const [filterExpansion, setFilterExpansion] = useState({
    carrier: false,
    aircraftType: false,
    timeOfDay: false,
  });
  const [listOfCarriers, setListOfCarriers] = useState<any>([]);
  const [searchCarriers, setSearchCarriers] = useState<any>([]);
  const [appliedFilter, setAppliedFilter] = useState({
    carrier: [],
    aircraftType: [],
    timeOfDay: [],
  });

  const isArabic = i18n.language.startsWith("ar_AR");

  const toggleFilterExpand = (filterClicked: string, currentBool: boolean) => {
    setFilterExpansion((prevFilterExpansion) => {
      return {
        ...prevFilterExpansion,
        [filterClicked]: !currentBool,
      };
    });
  };

  const handleSearchCarriers = (e) => {
    let carriers: any = listOfCarriers;
    carriers = carriers.filter((item) => {
      if (
        !isArabic
          ? item.carrier_name_en
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : item.carrier_name_ar
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setSearchCarriers(carriers);
  };

  const applyFilter = (filterInput: any) => {
    setAppliedFilter((prevAppliedFitlers) => {
      /*
        This prevFilterArr can store dynamic filter either carrier, type, timeofday
        because my applyFilter is dynamic
      */
      let prevFilteredArr = prevAppliedFitlers[filterInput.type];
      if (!prevFilteredArr.includes(filterInput.data)) {
        prevFilteredArr.push(filterInput.data);
      }
      return {
        ...prevAppliedFitlers,
        [filterInput.type]: prevFilteredArr,
      };
    });
  };

  const removeFilter = (filterInput: any) => {
    setAppliedFilter((prevAppliedFitlers) => {
      /*
        This prevFilterArr can store dynamic filter either carrier, type, timeofday
        because my applyFilter is dynamic
      */
      let prevFilteredArr = prevAppliedFitlers[filterInput.type];
      let fIndex = prevFilteredArr.findIndex(
        (item) => item === filterInput.data
      );
      if (fIndex !== -1) {
        prevFilteredArr.splice(fIndex, 1);
      }
      return {
        ...prevAppliedFitlers,
        [filterInput.type]: prevFilteredArr,
      };
    });
  };

  const clearAllCarriers = () => {
    setAppliedFilter((prevFilters) => {
      return {
        ...prevFilters,
        carrier: [],
      };
    });
  };

  const getCarriers = async () => {
    const carriers = await getAllCarriers();
    setListOfCarriers(carriers);
    setSearchCarriers(carriers);
  };

  useEffect(() => {
    getCarriers();
  }, [i18n.language]);

  return (
    <>
      <Components.FilterPanel>
        <Components.PanelName>{t("ess.filter")}</Components.PanelName>
        <List
          sx={{
            background: "transparent",
            height: "90%",
            overflowY: "auto",
          }}
          className="hideScrollbar"
        >
          {/* List items Below */}
          <Components.ListButton
            onClick={() =>
              toggleFilterExpand("carrier", filterExpansion.carrier)
            }
          >
            <ListItemText
              disableTypography
              primary={
                <Components.ListText>{t("ess.carrier")}</Components.ListText>
              }
            />
            {filterExpansion.carrier ? <ExpandLess /> : <ExpandMore />}
          </Components.ListButton>
          {/* Associated Collapsable Filters */}
          <Collapse in={filterExpansion.carrier} timeout="auto" unmountOnExit>
            <Components.SearchInputWrapper>
              <Components.SearchInput>
                <Components.SearchIcon src={SearchIconInput} alt="#" />
                <Components.Input
                  placeholder={t("ess.search").toString()}
                  onChange={handleSearchCarriers}
                />
              </Components.SearchInput>
            </Components.SearchInputWrapper>
            {/* Slected Filters Chip */}
            {appliedFilter.carrier.length > 0 && (
              <>
                <Components.ChipWrapper
                  direction="row"
                  spacing={1}
                  className="hideScrollbar"
                >
                  {appliedFilter.carrier.map((item) => (
                    <Components.Chip
                      key={item}
                      label={item}
                      variant="filled"
                      onDelete={() =>
                        removeFilter({ type: "carrier", data: item })
                      }
                    />
                  ))}
                </Components.ChipWrapper>

                <Components.ClearAll onClick={clearAllCarriers}>
                  Clear All
                </Components.ClearAll>
              </>
            )}
            <List
              component="div"
              disablePadding
              sx={{
                background: "transparent",
                paddingBottom: "10px",
                marginTop: "20px",
                maxHeight: "400px",
                overflow: "auto"
              }}
            >
              {searchCarriers.map((item: any) => (
                // <span>{item.carrier_name_en}</span>
                <Components.ListButton
                  key={item.id}
                  onClick={() =>
                    applyFilter({
                      type: "carrier",
                      data: !isArabic
                        ? item.carrier_name_en
                        : item.carrier_name_ar,
                    })
                  }
                >
                  <ListItemText
                    disableTypography
                    primary={
                      <Components.ListText>
                        {!isArabic
                          ? item.carrier_name_en
                          : item.carrier_name_ar}
                      </Components.ListText>
                    }
                  />
                </Components.ListButton>
              ))}
            </List>
          </Collapse>
          <Divider
            sx={{
              borderBottom: "1px solid rgba(250, 250, 250, 0.15)",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />
          <Components.ListButton
            onClick={() =>
              toggleFilterExpand("aircraftType", filterExpansion.aircraftType)
            }
          >
            <ListItemText
              disableTypography
              primary={
                <Components.ListText>
                  {t("ess.aircraft-type")}
                </Components.ListText>
              }
            />
            {filterExpansion.aircraftType ? <ExpandLess /> : <ExpandMore />}
          </Components.ListButton>
          {/* Associated Collapsable Filters */}
          <Collapse
            in={filterExpansion.aircraftType}
            timeout="auto"
            unmountOnExit
          >
            <Components.ChipWrapper
              direction="row"
              spacing={1}
              className="hideScrollbar"
            >
              {appliedFilter.aircraftType.map((item) => (
                <Components.Chip
                  key={item}
                  label={item}
                  variant="filled"
                  onDelete={() =>
                    removeFilter({ type: "aircraftType", data: item })
                  }
                />
              ))}
            </Components.ChipWrapper>
            <List
              component="div"
              disablePadding
              sx={{ background: "transparent", paddingBottom: "10px" }}
            >
              <Components.ListButton
                onClick={() =>
                  applyFilter({
                    type: "aircraftType",
                    data: t("ess.narrow-body"),
                  })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>
                      {t("ess.narrow-body")}
                    </Components.ListText>
                  }
                />
              </Components.ListButton>
              <Components.ListButton
                onClick={() =>
                  applyFilter({
                    type: "aircraftType",
                    data: t("ess.wide-body"),
                  })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>
                      {t("ess.wide-body")}
                    </Components.ListText>
                  }
                />
              </Components.ListButton>
              <Components.ListButton
                onClick={() =>
                  applyFilter({
                    type: "aircraftType",
                    data: t("ess.both"),
                  })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>
                      {t("ess.both")}
                    </Components.ListText>
                  }
                />
              </Components.ListButton>
            </List>
          </Collapse>
          <Divider
            sx={{
              borderBottom: "1px solid rgba(250, 250, 250, 0.15)",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />

          <Components.ListButton
            onClick={() =>
              toggleFilterExpand("timeOfDay", filterExpansion.timeOfDay)
            }
          >
            <ListItemText
              disableTypography
              primary={
                <Components.ListText>
                  {t("ess.time-of-day")}
                </Components.ListText>
              }
            />
            {filterExpansion.timeOfDay ? <ExpandLess /> : <ExpandMore />}
          </Components.ListButton>
          {/* Associated Collapsable Filters */}
          <Collapse in={filterExpansion.timeOfDay} timeout="auto" unmountOnExit>
            <Components.ChipWrapper
              direction="row"
              spacing={1}
              className="hideScrollbar"
            >
              {appliedFilter.timeOfDay.map((item) => (
                <Components.Chip
                  key={item}
                  label={item}
                  variant="filled"
                  onDelete={() =>
                    removeFilter({ type: "timeOfDay", data: item })
                  }
                />
              ))}
            </Components.ChipWrapper>
            <List
              component="div"
              disablePadding
              sx={{ background: "transparent", paddingBottom: "10px" }}
            >
              <Components.ListButton
                onClick={() =>
                  applyFilter({ type: "timeOfDay", data: t("ess.day") })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>{t("ess.day")}</Components.ListText>
                  }
                />
              </Components.ListButton>
              <Components.ListButton
                onClick={() =>
                  applyFilter({ type: "timeOfDay", data: t("ess.night") })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>{t("ess.night")}</Components.ListText>
                  }
                />
              </Components.ListButton>
              <Components.ListButton
                onClick={() =>
                  applyFilter({ type: "timeOfDay", data: t("ess.both") })
                }
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Components.ListText>{t("ess.both")}</Components.ListText>
                  }
                />
              </Components.ListButton>
              
            </List>
          </Collapse>
          <Divider
            sx={{
              borderBottom: "1px solid rgba(250, 250, 250, 0.15)",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          />
        </List>

        {/* Filter Pane Bottom Buttons */}
        <Components.ButtonWrapper>
          <Button
            variant="text"
            sx={{ color: "white" }}
            onClick={() => {
              setAppliedFilter({
                carrier: [],
                aircraftType: [],
                timeOfDay: [],
              });
              applyGroupFilterOnChart({
                carrier: [],
                aircraftType: [],
                timeOfDay: [],
              });
            }}
          >
            {t("ess.reset")}
          </Button>
          <Button
            variant="contained"
            onClick={() => applyGroupFilterOnChart(appliedFilter)}
          >
            {t("ess.apply")}
          </Button>
        </Components.ButtonWrapper>
      </Components.FilterPanel>
    </>
  );
}

export default FilterPanel;