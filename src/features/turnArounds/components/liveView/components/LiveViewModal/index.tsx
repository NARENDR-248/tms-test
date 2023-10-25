import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LiveViewModalStyles from "./style";
import FlightTimings from "../../../flightTimings";
import ModalCameraTabs from "./components/modalCameraTabs";
import EventCard from "./components/eventCard";
import useScreenSize from "@/utils/screenSize";
import { useCamerasStore } from "@/store/cameraStore";

const LiveViewModal = ({ cameraId, open, close }: any) => {
  let screenSize = useScreenSize();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: screenSize.width >= 800 ? "50%" : "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    outline: "none",
    "@media (max-width: 820px)": {
      flexDirection: "column",
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "5px",
        border: "1px solid gray",
      },
    },
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
          <LiveViewModalStyles.CameraView>
            <LiveViewModalStyles.SubLayout>
              <ModalCameraTabs cameraId={cameraId} isLive />
            </LiveViewModalStyles.SubLayout>
            <FlightTimings showSideBar={false} />
          </LiveViewModalStyles.CameraView>
          {/* <LiveViewModalStyles.Progress>
            <LiveViewModalStyles.Heading>Progress</LiveViewModalStyles.Heading>
            <LiveViewModalStyles.DashedBorder>
              {[1, 2, 3, 4, 5].map((id) => {
                return (
                  <LiveViewModalStyles.Content key={id}>
                    <LiveViewModalStyles.TitleLayout>
                      <LiveViewModalStyles.TitleIndicator />
                      <LiveViewModalStyles.Title>
                        General
                      </LiveViewModalStyles.Title>
                    </LiveViewModalStyles.TitleLayout>
                    <LiveViewModalStyles.EventLayout>
                      {[1, 2, 3].map((id) => {
                        return <EventCard key={id} />;
                      })}
                    </LiveViewModalStyles.EventLayout>
                  </LiveViewModalStyles.Content>
                );
              })}
            </LiveViewModalStyles.DashedBorder>
          </LiveViewModalStyles.Progress> */}
        </Box>
      </Fade>
    </Modal>
  );
};

export default LiveViewModal;
