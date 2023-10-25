import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import theme from "@/utils/theme";
import { useTranslation } from "react-i18next";
import CarriersModalStyles from "./carriersModalStyles";
import Image from "next/image";
import { Backdrop } from "@mui/material";
import { Button } from "@mui/material";
import { IndeterminateCheckbox } from "../checkbox/IndeterminateCheckbox";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  backgroundColor: theme.palette.primary.light,
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",

  "@media (max-width: 420px)": {
    p: 0,
  },
};

export const CarriersModal = ({ open, close, carriers, setCarriers }: any) => {
  const [checkedCarriers, setCheckedCarriers] = React.useState([]);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  const handleCarriersApply = () => {
    setCarriers(checkedCarriers);
    close();
    setCheckedCarriers([]);
  };

  const handleClose = () => {
    close();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CarriersModalStyles.Container>
            <CarriersModalStyles.Header>
              <CarriersModalStyles.Title>{t("select-carrier")}</CarriersModalStyles.Title>
              <Image
                src="/Close2.png"
                alt="Close"
                height={20}
                width={20}
                style={{ cursor: "pointer" }}
                onClick={handleClose}
              />
            </CarriersModalStyles.Header>
            <CarriersModalStyles.List>
              <IndeterminateCheckbox
                selectedCarriers={carriers}
                checkedCarriers={checkedCarriers}
                setCheckedCarriers={setCheckedCarriers}
              />
            </CarriersModalStyles.List>
            <CarriersModalStyles.ButtonGroup>
              <Button
                variant="outlined"
                sx={{
                  width: "130px",
                  height: "40px",
                  color: "#fff",
                  borderColor: "#fff",
                  textTransform: "none",
                  borderRadius: "0",
                  "&:hover": {
                    borderColor: "#fff",
                  },
                }}
                onClick={handleClose}
              >
                {t("cancel")}
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#06A7E0",
                  color: "#fff",
                  width: "130px",
                  height: "40px",
                  border: "none",
                  textTransform: "none",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#06A7E0",
                  },
                }}
                onClick={handleCarriersApply}
              >
                {t("apply")}
              </Button>
            </CarriersModalStyles.ButtonGroup>
          </CarriersModalStyles.Container>
        </Box>
      </Modal>
      {/* <Backdrop
        sx={{ zIndex: "-1", opacity: 1 }}
        open={open}
        onClick={handleBackdropClick}
      /> */}
    </>
  );
};
