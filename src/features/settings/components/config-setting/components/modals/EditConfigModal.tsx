import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import theme from "@/utils/theme";
import { useTranslation } from "react-i18next";
import { SelectForModals } from "../selectForModals/SelectForModals";
import InputForModals from "../inputForModals/InputForModals";
import DelaysForModals from "../delaysForModals/DelaysForModals";
import Image from "next/image";
import ConfigModalsStyles from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35em",
  height: "40em",
  backgroundColor: theme.palette.primary.light,
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",

  "@media (max-width: 420px)": {
    width: "22em",
    p: "12px",
  },
};

export const EditConfigModal = ({ open, close, id }: any) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={open.edit}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ConfigModalsStyles.Container>
          <ConfigModalsStyles.HeadingContainer>
            <ConfigModalsStyles.Heading>{t("edit-config")}</ConfigModalsStyles.Heading>
            <Image
              src="/close2.png"
              alt="close icon"
              width={23}
              height={23}
              style={{ cursor: "pointer" }}
              onClick={close}
            />
          </ConfigModalsStyles.HeadingContainer>
          <ConfigModalsStyles.SubContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("event-name")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <SelectForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("carrier")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <SelectForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("aircraft-type")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <SelectForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("time-of-day")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <SelectForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("start-delay")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <DelaysForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("ideal-duration")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <InputForModals />
            </ConfigModalsStyles.FeildContainer>
            <ConfigModalsStyles.FeildContainer>
              <ConfigModalsStyles.FeildTextContainer>
                <ConfigModalsStyles.FeildText>{t("end-delay")}</ConfigModalsStyles.FeildText>
              </ConfigModalsStyles.FeildTextContainer>
              <DelaysForModals />
            </ConfigModalsStyles.FeildContainer>
          </ConfigModalsStyles.SubContainer>
          <ConfigModalsStyles.ButtonContainer
            style={{
              justifyContent: "flex-end",
              gap: "20px",
            }}
          >
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
              onClick={close}
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
            >
              {t("save-changes")}
            </Button>
          </ConfigModalsStyles.ButtonContainer>
        </ConfigModalsStyles.Container>
      </Box>
    </Modal>
  );
};
