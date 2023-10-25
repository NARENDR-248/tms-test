import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import theme from "@/utils/theme";
import Trash from "@/__assets/icons/Trash";
import { useTranslation } from "react-i18next";
import { deleteConfiguration } from "@/apis/settings/config-setting/deleteConfiguration";
import ConfigModalsStyles from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25em",
  backgroundColor: theme.palette.primary.light,
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",

  "@media (min-width: 420px) and (max-width: 820px)": {
    width: "25em",
  },
};

export const DeleteConfigModal = ({ open, close, id, refetchConfigData }: any) => {
  const { t } = useTranslation();

  const handleDeleteConfig = async () => {
    try {
      const deleteResponse = await deleteConfiguration(id);

      close();
      refetchConfigData();
    } catch (error) {
      close();
      console.error("Error deleting configuration:", error);
    }
  };

  return (
    <Modal
      open={open.delete}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ConfigModalsStyles.DeleteDiv>
          <ConfigModalsStyles.DeleteSubDiv>
            <Trash />
            <ConfigModalsStyles.DeleteText>{t("delete-config")}</ConfigModalsStyles.DeleteText>
          </ConfigModalsStyles.DeleteSubDiv>
          <ConfigModalsStyles.DeleteSubText>{t("delete-text")}</ConfigModalsStyles.DeleteSubText>
          <ConfigModalsStyles.DeleteButtonDiv>
            <Button
              variant="outlined"
              sx={{
                width: "140px",
                height: "45px",
                color: "#fff",
                borderColor: "#fff",
                textTransform: "none",
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
                backgroundColor: "#FF375E",
                color: "#fff",
                width: "140px",
                height: "45px",
                border: "none",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#FF375E",
                },
              }}
              onClick={handleDeleteConfig}
            >
              {t("delete")}
            </Button>
          </ConfigModalsStyles.DeleteButtonDiv>
        </ConfigModalsStyles.DeleteDiv>
      </Box>
    </Modal>
  );
};
