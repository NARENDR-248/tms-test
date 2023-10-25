import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import theme from "@/utils/theme";
import Trash from "@/__assets/icons/Trash";
import { useTranslation } from "react-i18next";
import ModalsStyles from "./styled";

// Importing Contexts
import { RefetchContext } from "../..";

// Importing Custom APIs
import { deleteUserGroupsAPI } from "@/apis/settings/access-control/userGroupsAPIs";

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

export const DeleteUserGroupModal = ({ open, close, userGroupId }: any) => {
  const { t } = useTranslation();
  const { refetch } = React.useContext(RefetchContext);

  const handleDeleteGroup = async () => {
    try {
      await deleteUserGroupsAPI(userGroupId.userGroupId);
      refetch();
      close(true);
    } catch (err) {
      console.log(err);
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
        <ModalsStyles.DeleteDiv>
          <ModalsStyles.DeleteSubDiv>
            <Trash />
            <ModalsStyles.DeleteText>{t("um.delete-group")}</ModalsStyles.DeleteText>
          </ModalsStyles.DeleteSubDiv>
          <ModalsStyles.DeleteSubText>{t("um.delete-group-text")}</ModalsStyles.DeleteSubText>
          <ModalsStyles.DeleteButtonDiv>
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
              onClick={handleDeleteGroup}
            >
              {t("delete")}
            </Button>
          </ModalsStyles.DeleteButtonDiv>
        </ModalsStyles.DeleteDiv>
      </Box>
    </Modal>
  );
};
