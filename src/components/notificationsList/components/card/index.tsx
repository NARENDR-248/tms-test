import theme from "@/utils/theme";
import CardStyles from "./styles";
import { FC } from "react";

interface Props {
  ID: string;
  time: string;
  description: string;
  color: string;
}

const Card: FC<Props> = (props) => {
  const { ID, time, description, color } = props;

  return (
    <CardStyles.Container
      sx={{
        backgroundColor: `${color}41`,
        borderLeft: `5px solid ${color}`,
        color: theme.palette.common.white,
      }}
    >
      <CardStyles.TopBar>
        <CardStyles.ID sx={{ backgroundColor: color }}>{ID}</CardStyles.ID>
        <CardStyles.Time>{time}</CardStyles.Time>
      </CardStyles.TopBar>
      <CardStyles.Text>{description}</CardStyles.Text>
    </CardStyles.Container>
  );
};

export default Card;
