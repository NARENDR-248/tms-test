import { FC } from "react";
import FlightCodesStyles from "./styles";

interface Props {
  code: string;
  destination: string;
  float: string;
  src: string;
}

const FlightCodes: FC<Props> = (props) => {
  const { code, destination, float, src } = props;

  return (
    <FlightCodesStyles.Container>
      <FlightCodesStyles.Code>{code}</FlightCodesStyles.Code>
      <FlightCodesStyles.Split sx={{ float: float }}>
        <FlightCodesStyles.Icon height={20} width={20} src={src} alt="icon" />
        <FlightCodesStyles.Destination>{destination}</FlightCodesStyles.Destination>
      </FlightCodesStyles.Split>
    </FlightCodesStyles.Container>
  );
};

export default FlightCodes;
