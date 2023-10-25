import { FC } from "react";

interface Props {
  color: string;
  isVertical: boolean;
}
const MoreIcon: FC<Props> = (props) => {
  const { color, isVertical } = props;

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isVertical ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <circle cx="5.87939" cy="12" r="2" fill={color} />
      <circle cx="12.8794" cy="12" r="2" fill={color} />
      <circle cx="19.8794" cy="12" r="2" fill={color} />
    </svg>
  );
};

export default MoreIcon;
