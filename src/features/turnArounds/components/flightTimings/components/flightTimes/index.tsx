import { FC } from "react";
import FlightTimesStyles from "./styles";
import { useTranslation } from "react-i18next";

interface Props {
  isScheduled: boolean;
  title: string;
  time?: string;
  sidebar?: boolean;
}

const FlightTimes: FC<Props> = (props) => {
  const { isScheduled, title, time } = props;

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language ? i18n.language.startsWith("ar_AR") : false;

  return (
    <FlightTimesStyles.Container
      sx={{
        width: props.sidebar
          ? "100%"
          : // time === "From RAC ESB" ? "70%" :
            "50%",
        // flexDirection: isArabic ? "row-reverse" : "row",
      }}
    >
      <FlightTimesStyles.Title>{title}</FlightTimesStyles.Title>
      <FlightTimesStyles.Time
        sx={{
          fontSize: isScheduled ? "1.2em" : "1em",
          opacity: isScheduled ? "1" : "0.7",
          textAlign: time === "From RAC ESB" ? "left" : "right",
        }}
      >
        {time === "From RAC ESB" ? t("from-rac-esb") : time}
      </FlightTimesStyles.Time>
    </FlightTimesStyles.Container>
  );
};

export default FlightTimes;
