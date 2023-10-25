import { useEffect, useState } from "react";
import Plane from "../../../drawings/commons/shapes/Plane";
import GateCardStyles from "./GateCardStyles";
import FlightLand from "@/__assets/icons/FlightLand";
import FlightTakeOff from "@/__assets/icons/FlightTakeOff";
import { useRouter } from "next/navigation";
import { useTerminalsStore } from "@/store/terminalsStore";
import { humanizeDuration } from "@/utils/dateHelpers";
import { useTranslation } from "react-i18next";
const GateCard = ({ data }: any) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const { name, level, flip, turnAround, delayShowcase } = data;
  const router = useRouter();
  if (data.gateId) {
  }
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    if (name === "22") {
      // console.log("gugu", data);
    }
  }, []);
  return (
    <GateCardStyles.Container
      onClick={() => {
        console.log("XYZ",data.gateId)
        if (data.gateId != null) {
          router.push(`turn-arounds?gateId=${data.gateId}`);
        }
      }}
      onMouseEnter={() => {
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
      }}
      style={{
        flexDirection: data.flip ? "column-reverse" : "column",
        rotate: `${data.rotate}deg`,
      }}
    >
      <GateCardStyles.Bar>
        <GateCardStyles.Number>{name}</GateCardStyles.Number>
        <img src="/miniLogo.png" alt="RAC LOGO" width={15} height={15} />
      </GateCardStyles.Bar>
      <GateCardStyles.Area>
        <GateCardStyles.Wrapper
          style={{
            rotate: data.flip ? "180deg" : "0deg",
          }}
        >
          {level ? <Plane /> : null}
        </GateCardStyles.Wrapper>
        <GateCardStyles.Indicator
          style={{
            rotate: data.flip ? "180deg" : "0deg",
            height: `${level}%`,
            backgroundColor: !delayShowcase
              ? "green"
              : delayShowcase.variant === "min"
              ? "yellow"
              : delayShowcase.variant === "mid"
              ? "orange"
              : "red",
          }}
        ></GateCardStyles.Indicator>
      </GateCardStyles.Area>
      {showTooltip && turnAround && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            top: 10,
            left: 10,
            width: "280px",
            overflow: "scroll",
            zIndex: 99,

            rotate: `${data.rotate < 0 ? Math.abs(data.rotate) : -data.rotate}deg`,
          }}
        >
          <GateCardStyles.Tooltip.FlightInfoContainer>
            <GateCardStyles.Tooltip.FlightInfoCol>
              <GateCardStyles.Tooltip.FlightCode>{turnAround.arrivalCode}</GateCardStyles.Tooltip.FlightCode>
              <GateCardStyles.Tooltip.FlightInfoColSubContainer>
                <FlightLand color={"rgba(0,0,0,0.3)"} />
                <GateCardStyles.Tooltip.CountryCode>{turnAround.arrivedFrom}</GateCardStyles.Tooltip.CountryCode>
              </GateCardStyles.Tooltip.FlightInfoColSubContainer>
            </GateCardStyles.Tooltip.FlightInfoCol>
            <GateCardStyles.Tooltip.Circle />
            <GateCardStyles.Tooltip.FlightInfoCol>
              <GateCardStyles.Tooltip.FlightCode>{turnAround.departureCode}</GateCardStyles.Tooltip.FlightCode>
              <GateCardStyles.Tooltip.FlightInfoColSubContainer>
                <FlightTakeOff color={"rgba(0,0,0,0.3)"} />
                <GateCardStyles.Tooltip.CountryCode>{turnAround.departureTo}</GateCardStyles.Tooltip.CountryCode>
              </GateCardStyles.Tooltip.FlightInfoColSubContainer>
            </GateCardStyles.Tooltip.FlightInfoCol>
          </GateCardStyles.Tooltip.FlightInfoContainer>
          {delayShowcase && (
            <GateCardStyles.DelayContainer>
              <GateCardStyles.DelayLabel>
                {delayShowcase.type === "startDelay" ? t("startDelay") : t("endDelay")}
              </GateCardStyles.DelayLabel>
              <GateCardStyles.DelayDesc
                style={{
                  color: "#DCA24C",
                }}
              >
                {isArabic ? delayShowcase.event.name_ar : delayShowcase.event.name_en}
                {": "}
                {humanizeDuration(delayShowcase.startTime, delayShowcase.updateTime, isArabic ? "arabic" : "english")}
                {/* Catering: 12 mins */}
              </GateCardStyles.DelayDesc>
            </GateCardStyles.DelayContainer>
          )}
        </div>
      )}
    </GateCardStyles.Container>
  );
};

export default GateCard;
// aibt: "2023-08-30T05:59:40.018Z";
// aobt: null;
// arrivalCode: "BA1442";
// arrivedFrom: "DXB";
// carrier_name_ar: "Arabic";
// carrier_name_en: "Saudia Airlines";
// configurationId: null;
// createdAt: "2023-08-30T00:29:40.026Z";
// departureCode: "EZY182";
// departureTo: "RSV";
// eobt: "2023-08-30T05:59:40.018Z";
// firstPassengerDisembark: "2023-08-30T05:59:40.018Z";
// firstPassengerEmbark: "2023-08-30T05:59:40.018Z";
// gateId: "50F66449-AA44-EE11-BFF7-088FC327E8E4";
// groundServicesCompanyId: "DC66433E-F36B-1410-8988-00DB4B75EBBD";
// id: "CF0477D2-03F9-4B1D-987A-DEC213BDD938";
// lastPassengerDisembark: "2023-08-30T05:59:40.018Z";
// lastPassengerEmbark: "2023-08-30T05:59:40.018Z";
// model_ar: "BOEING ARABIC";
// model_en: "BOEING";
// pibt: "2023-08-30T05:59:40.018Z";
// pobt: "2023-08-30T06:13:40.021Z";
// sibt: "2023-08-30T05:59:40.018Z";
// sobt: "2023-08-30T05:59:40.018Z";
// updatedAt: "2023-08-30T00:29:40.026Z";
