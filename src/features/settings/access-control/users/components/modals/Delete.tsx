import Trash from "@/__assets/icons/Trash";
import { deleteUser } from "@/apis/settings/access-control/deleteUser";
import theme from "@/utils/theme";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useTranslation } from "react-i18next";
import ModalsStyles from "./styled";
import { useMutation } from "react-query";
import { queryClient } from "@/apis/__helpers/request";

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

export const DeleteUserModal = ({ open, close, id, refetchUsers }: any) => {
  const { t } = useTranslation();

  const handleDeleteUser = async () => {
    try {
      deleteuser(id);
    } catch (error) {
      console.error("Error deleting the user:", error);
    }
  };
  const { mutate: deleteuser } = useMutation(deleteUser, {
    onSuccess: (data) => {
      console.log("deleted user Successss...", data);
      close();
      refetchUsers();
    },
    onError: (error) => {
      console.log("deleted user Errorrrr...", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("CreateUser");
    },
  });

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
            <ModalsStyles.DeleteText>{t("um.delete-user")}</ModalsStyles.DeleteText>
          </ModalsStyles.DeleteSubDiv>
          <ModalsStyles.DeleteSubText>{t("um.delete-user-text")}</ModalsStyles.DeleteSubText>
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
              onClick={handleDeleteUser}
            >
              {t("delete")}
            </Button>
          </ModalsStyles.DeleteButtonDiv>
        </ModalsStyles.DeleteDiv>
      </Box>
    </Modal>
  );
};
