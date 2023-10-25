import React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import EventVideoModalStyles from "./styles";
import ModalCameraTabs from "../liveView/components/LiveViewModal/components/modalCameraTabs";
import { formatDate, formatDateWithMonthName, formatTime24Hours } from "@/utils/dateHelpers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  outline: "none",

  "@media (max-width: 820px)": {
    width: "85%",
  },

  "@media (max-width: 420px)": {
    width: "80%",
  },
};

const EventVideoFeed = (props: any) => {
  const { open, close, videoInfo, isLive } = props;

  if (!videoInfo) {
    return null;
  }

  const { name, startTime, endTime } = videoInfo;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="event-modal"
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <EventVideoModalStyles.EventDetails sx={{ display: "flex" }}>
            <EventVideoModalStyles.Name>{name}</EventVideoModalStyles.Name>
            <EventVideoModalStyles.TimeStamp sx={{ display: "flex" }}>
              <EventVideoModalStyles.SingleTimeStamp>
                <EventVideoModalStyles.Date>{formatDateWithMonthName(startTime)}</EventVideoModalStyles.Date>
                <EventVideoModalStyles.Time>{formatTime24Hours(startTime)}</EventVideoModalStyles.Time>
              </EventVideoModalStyles.SingleTimeStamp>
              <p
                style={{
                  color: "#629CCC",
                  opacity: 0.5,
                }}
              >
                -
              </p>
              <EventVideoModalStyles.SingleTimeStamp>
                <EventVideoModalStyles.Date>
                  {endTime == null ? "" : formatDateWithMonthName(endTime)}
                </EventVideoModalStyles.Date>
                <EventVideoModalStyles.Time>
                  {endTime == null ? "In-progress" : formatTime24Hours(endTime)}
                </EventVideoModalStyles.Time>
              </EventVideoModalStyles.SingleTimeStamp>
            </EventVideoModalStyles.TimeStamp>
          </EventVideoModalStyles.EventDetails>
          <EventVideoModalStyles.SubLayout>
            <ModalCameraTabs isLive={isLive} defaultCamera />
          </EventVideoModalStyles.SubLayout>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EventVideoFeed;
