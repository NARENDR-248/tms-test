import theme from "@/utils/theme";
import CardStyles from "./styles";
import { FC } from "react";
import CallIcon from "@mui/icons-material/Call";
import { alpha, colors } from "@mui/material";
import { formatTime, formatTime24Hours } from "@/utils/dateHelpers";

interface Props {
  id: string;
  time: string;
  message: string;
  severity: string;
  groundServiceCompanyName: string;
  groundServiceCompanyContact: string;
  arrival_code: string;
  departure_code: string;
  gateName: string;
}

const NotificationCard: FC<Props> = (props: Props) => {
  const {
    id,
    groundServiceCompanyContact,
    groundServiceCompanyName,
    message,
    severity,
    time,
    gateName,
    arrival_code,
    departure_code,
  } = props;

  return (
    <CardStyles.Container
      sx={{
        backgroundColor: alpha(colors.yellow[900], 0.3), //this should change depending on severity
        borderLeft: `5px solid ${alpha(colors.yellow[900], 1)}`, //this should change depending on severity
        color: theme.palette.common.white,
      }}
    >
      <CardStyles.TopBar>
        <CardStyles.ID sx={{ backgroundColor: alpha(colors.yellow[900], 1) }}>
          {`${arrival_code}-${departure_code}`}
        </CardStyles.ID>
        <CardStyles.Time>{time ? formatTime24Hours(time) : ""}</CardStyles.Time>
      </CardStyles.TopBar>
      <CardStyles.Text>{message}</CardStyles.Text>
      <CardStyles.Call
        sx={{
          color: alpha(colors.yellow[900], 1),
          // backgroundColor: `${color}25`,
          backgroundColor: alpha(colors.yellow[900], 0.2),
        }}
      >
        <CallIcon />
        {groundServiceCompanyName + " " + groundServiceCompanyContact}
      </CardStyles.Call>
    </CardStyles.Container>
  );
};

export default NotificationCard;
