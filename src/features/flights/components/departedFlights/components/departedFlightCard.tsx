import React from "react";
import DepartedFlightComponentStyles from "./styled";
import { tianjinAirlines } from "../../../../../../public/carrierLogos/tianjinAirlines";
import ConnectingDots from "@/__assets/icons/ConnectingDots";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import OnTimeIcon from "@/__assets/icons/OnTimeIcon";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { formatHoursAndMinutes24Hours } from "@/utils/dateHelpers";
import i18n from "@/utils/i18n";

type DepartedFlightComponentProps = {
  data: any;
  onClick: () => void;
};
const DepartedFlightComponent: React.FC<DepartedFlightComponentProps> = ({ data, onClick }) => {
  const { t } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  return (
    <DepartedFlightComponentStyles.Container onClick={onClick}>
      <DepartedFlightComponentStyles.TopDiv>
        <DepartedFlightComponentStyles.CarrierLogoDiv>
          <Image src={tianjinAirlines} alt="carrierLogo" width={20} height={20} />
        </DepartedFlightComponentStyles.CarrierLogoDiv>
        <DepartedFlightComponentStyles.FlightDetailsDiv>
          <DepartedFlightComponentStyles.ArrivalDiv>
            <DepartedFlightComponentStyles.ArrivalCodeDiv>
              {data.arrivalCode}
            </DepartedFlightComponentStyles.ArrivalCodeDiv>
            <DepartedFlightComponentStyles.ArrivedFromDiv>
              <FlightLandIcon fontSize="small" />
              {data.arrivedFrom}
            </DepartedFlightComponentStyles.ArrivedFromDiv>
          </DepartedFlightComponentStyles.ArrivalDiv>

          <DepartedFlightComponentStyles.FromAndToLinkDiv>
            <ConnectingDots />
          </DepartedFlightComponentStyles.FromAndToLinkDiv>

          <DepartedFlightComponentStyles.DepartureDiv>
            <DepartedFlightComponentStyles.DepartureCodeDiv>
              {data.departureCode}
            </DepartedFlightComponentStyles.DepartureCodeDiv>
            <DepartedFlightComponentStyles.DepartedFromDiv>
              <FlightTakeoffIcon fontSize="small" />
              {data.departureTo}
            </DepartedFlightComponentStyles.DepartedFromDiv>
          </DepartedFlightComponentStyles.DepartureDiv>
        </DepartedFlightComponentStyles.FlightDetailsDiv>
      </DepartedFlightComponentStyles.TopDiv>

      <DepartedFlightComponentStyles.MiddleDiv>
        <DepartedFlightComponentStyles.DelayDiv>
          <OnTimeIcon />
          {t("no-delay")}
        </DepartedFlightComponentStyles.DelayDiv>
        <DepartedFlightComponentStyles.GateNumberDiv>
          <DepartedFlightComponentStyles.TitleDiv>{t("gate")}</DepartedFlightComponentStyles.TitleDiv>
          <DepartedFlightComponentStyles.NumberDiv>
            {isArabic
              ? data.gate.terminal.name_en.length < 2
                ? "T" + data.gate.terminal.name_ar + " - " + data.gate.name_ar
                : data.gate.terminal.name_ar + " - " + data.gate.name_ar
              : data.gate.terminal.name_en.length < 2
              ? "T" + data.gate.terminal.name_en + " - " + data.gate.name_en
              : data.gate.terminal.name_en + " - " + data.gate.name_en}
          </DepartedFlightComponentStyles.NumberDiv>
        </DepartedFlightComponentStyles.GateNumberDiv>
      </DepartedFlightComponentStyles.MiddleDiv>

      <DepartedFlightComponentStyles.BottomDiv>
        <DepartedFlightComponentStyles.Row1>
          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>STA</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.TimeDiv>
              {formatHoursAndMinutes24Hours(data.sibt)}
            </DepartedFlightComponentStyles.TimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>

          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>STD</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.TimeDiv>
              {formatHoursAndMinutes24Hours(data.sobt)}
            </DepartedFlightComponentStyles.TimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>

          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>ATD</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.TimeDiv>
              {formatHoursAndMinutes24Hours(data.aobt)}
            </DepartedFlightComponentStyles.TimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>
        </DepartedFlightComponentStyles.Row1>

        <DepartedFlightComponentStyles.Row2>
          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>AIBT</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.FaddedTimeDiv>
              {formatHoursAndMinutes24Hours(data.aibt)}
            </DepartedFlightComponentStyles.FaddedTimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>

          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>POBT</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.FaddedTimeDiv>
              {formatHoursAndMinutes24Hours(data.pobt)}
            </DepartedFlightComponentStyles.FaddedTimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>

          <DepartedFlightComponentStyles.FlightTimes>
            <DepartedFlightComponentStyles.TimeTitleDiv>ETD</DepartedFlightComponentStyles.TimeTitleDiv>
            <DepartedFlightComponentStyles.FaddedTimeDiv>
              {formatHoursAndMinutes24Hours(data.eobt)}
            </DepartedFlightComponentStyles.FaddedTimeDiv>
          </DepartedFlightComponentStyles.FlightTimes>
        </DepartedFlightComponentStyles.Row2>
      </DepartedFlightComponentStyles.BottomDiv>
    </DepartedFlightComponentStyles.Container>
  );
};

export default DepartedFlightComponent;
