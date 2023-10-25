import { Tooltip } from "@mui/material";
import { CustomSwitchStyles } from "./styles";

const CustomSwitch = ({ linkedEvent, showStartDelayThreshold, setShowStartDelayThreshold }: any) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const startDelayThresholdHandler = (e: any) => {
    setShowStartDelayThreshold(e.target.checked);
  };

  return linkedEvent === "optional" ? (
    <Tooltip title="Select linked event" placement="right">
      <span>
        <CustomSwitchStyles.CustomSwitch
          {...label}
          checked={showStartDelayThreshold}
          onChange={startDelayThresholdHandler}
          disabled={true}
        />
      </span>
    </Tooltip>
  ) : (
    <CustomSwitchStyles.CustomSwitch
      {...label}
      checked={showStartDelayThreshold}
      onChange={startDelayThresholdHandler}
    />
  );
};

export default CustomSwitch;
