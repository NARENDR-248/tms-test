import { Button, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DeleteConfigModal } from "../modals/DeleteConfigModal";
import { EditConfigModal } from "../modals/EditConfigModal";
import { useTranslation } from "react-i18next";
import ConfigTableStyles from "./styles";
import Image from "next/image";
import ButtonsGroup from "./ButtonsGroup";
import theme from "@/utils/theme";

const ConfigTableRow = ({ data, refetchConfigData }: any) => {
  const [buttons, setButtons] = useState(false);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  console.log("data", data);

  const eventName = !isArabic
    ? data?.event?.ui_name_en || data?.event?.name_en
    : data?.event?.ui_name_ar || data?.event?.name_ar;
  const linkedEvent = !isArabic ? data?.linkedEvent?.ui_name_en : data?.linkedEvent?.ui_name_ar;
  const eventType = !isArabic ? data?.event_type_en : data?.event_type_ar;
  // const standType = data?.stand_type_en || data?.stand_type_ar;

  const carriersArray = [
    ...data?.configCarriers?.map((item: any) => {
      return !isArabic ? item?.carrierFactor?.carrier?.carrier_name_en : item?.carrierFactor?.carrier?.carrier_name_ar;
    }),
  ];
  const carrier: any = carriersArray?.length
    ? carriersArray?.length === 1
      ? carriersArray[0]
      : `${carriersArray[0]} +${carriersArray?.length - 1}`
    : "-";

  const standTypeArray = [
    ...new Set(
      data?.configCarriers?.map((item) => {
        return !isArabic ? item?.carrierFactor?.stand_type_en : item?.carrierFactor?.stand_type_ar;
      }),
    ),
  ];
  const standType: any = standTypeArray?.join(", ");

  const aircraftTypeArray = [
    ...new Set(
      data?.configCarriers?.map((item) => {
        return !isArabic ? item?.carrierFactor?.aircraft_type_en : item?.carrierFactor?.aircraft_type_ar;
      }),
    ),
  ];
  const aircraftType: any = aircraftTypeArray?.join(", ");
  // const aircraftType: any = aircraftTypeArray?.length
  //   ? aircraftTypeArray?.length === 1
  //     ? aircraftTypeArray[0]
  //     : `${aircraftTypeArray[0]} +${aircraftTypeArray?.length - 1}`
  //   : "-";

  const timeOfDayArray = [
    ...new Set(
      data?.configCarriers?.map((item) => {
        return !isArabic ? item?.carrierFactor?.time_of_day_en : item?.carrierFactor?.time_of_day_ar;
      }),
    ),
  ];
  const timeOfDay: any = timeOfDayArray?.join(", ");
  // const timeOfDay: any = timeOfDayArray?.length
  //   ? timeOfDayArray?.length === 1
  //     ? timeOfDayArray[0]
  //     : `${timeOfDayArray[0]} +${timeOfDayArray?.length - 1}`
  // //   : "-";

  return (
    <TableRow
      sx={{
        borderBottom: "0px solid black!important",
        height: "63px",
        "&:hover": {
          background: "#0A1A29",
        },
      }}
    >
      <ConfigTableStyles.Cell
        component="th"
        scope="row"
        align="left"
        sx={{
          fontWeight: "bold",
          opacity: 1,
          paddingLeft: "16px",
          color: "#fff",
        }}
      >
        {eventName || "-"}
      </ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{eventType || "-"}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{linkedEvent || "-"}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">
        <span style={{ color: "#A99908" }}>{data?.minStartDelay || "-"},</span>
        <span style={{ color: "#BC7710" }}> {data?.middleStartDelay || "-"},</span>
        <span style={{ color: "#AF3434" }}> {data?.maxStartDelay || "-"}</span>
      </ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{data?.idealDuration || "-"}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">
        <span style={{ color: "#A99908" }}>{data?.minEndDelay || "-"},</span>
        <span style={{ color: "#BC7710" }}> {data?.middleEndDelay || "-"},</span>
        <span style={{ color: "#AF3434" }}> {data?.maxEndDelay || "-"}</span>
      </ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{standType || "-"}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{carrier}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{aircraftType}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell align="left">{timeOfDay}</ConfigTableStyles.Cell>
      <ConfigTableStyles.Cell
        align="right"
        onMouseEnter={() => setButtons(true)}
        onMouseLeave={() => setButtons(false)}
        sx={{
          width: "0",
          paddingRight: "16px",
        }}
      >
        {buttons ? (
          <ConfigTableStyles.ButtonContainer>
            <ButtonsGroup data={data} refetchConfigData={refetchConfigData} />
          </ConfigTableStyles.ButtonContainer>
        ) : (
          <ConfigTableStyles.ButtonContainer></ConfigTableStyles.ButtonContainer>
        )}
      </ConfigTableStyles.Cell>
    </TableRow>
  );
};

export default ConfigTableRow;
