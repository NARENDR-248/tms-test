import { FC, MouseEvent } from "react";

interface Props {
  //   props: any;
}
const NotificationsIcon: FC<Props> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    // {...props}
  >
    <path
      stroke="#CED1D4"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.656}
      d="M14.022 3.396c-3.862 0-7 3.138-7 7v3.371c0 .712-.304 1.797-.665 2.404l-1.342 2.228c-.828 1.377-.257 2.905 1.26 3.418a24.408 24.408 0 0 0 15.482 0c1.411-.466 2.03-2.135 1.26-3.418l-1.342-2.228c-.35-.607-.653-1.692-.653-2.404v-3.371c0-3.85-3.15-7-7-7Z"
    />
    <path
      stroke="#CED1D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.656}
      d="M16.18 3.733a7.88 7.88 0 0 0-4.316 0 2.316 2.316 0 0 1 2.158-1.47c.98 0 1.82.607 2.159 1.47v0Z"
    />
    <path
      stroke="#CED1D4"
      strokeMiterlimit={10}
      strokeWidth={1.656}
      d="M17.523 23.507a3.51 3.51 0 0 1-3.5 3.5 3.512 3.512 0 0 1-2.473-1.027 3.511 3.511 0 0 1-1.027-2.473"
    />
  </svg>
);
export default NotificationsIcon;
