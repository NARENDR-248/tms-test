import React, { useEffect, useState } from "react";
import { Modal, Button, Box, IconButton } from "@mui/material";
import ModalsStyles from "./styled";
import theme from "@/utils/theme";
import CloseX from "@/__assets/icons/CloseX";
import InputField from "../textInput/Input";
import { useTranslation } from "react-i18next";
// Importing TS Types
import { TAddUser } from "./Types";
import { editUserRequest } from "@/apis/settings/access-control/editUser";
import { useMutation } from "react-query";
import { queryClient } from "@/apis/__helpers/request";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35em",
  backgroundColor: theme.palette.primary.light,
  boxShadow: 24,
  borderRadius: "8px",

  "@media (min-width: 450px) and (max-width: 820px)": {
    width: "25em",
  },
};

const EditUserModal = ({ open, handleClose, userDetails, refetchUsers }) => {
  const [user, setUser] = useState<TAddUser>({
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    designation: userDetails?.designation,
    phone: userDetails?.phone,
    email: userDetails?.email,
    password: userDetails?.password,
  });
  const [userStatus, setUserStatus] = useState(userDetails.isActive);

  useEffect(() => {
    setUser({
      firstName: userDetails?.firstName,
      lastName: userDetails?.lastName,
      designation: userDetails?.designation,
      phone: userDetails?.phone,
      email: userDetails?.email,
      password: userDetails?.password,
    });
    setUserStatus(userDetails?.isActive);
  }, [userDetails]);

  const handleEditUserInputs = (e) => {
    setUser((prevUser) => {
      const temp = {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
      return temp;
    });
  };
  const handleUserStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserStatus(event.target.checked);
  };
  const { t } = useTranslation();

  const handleEditUserSubmit = () => {
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      designation: user.designation,
      phone: user.phone,
      email: user.email,
      isActive: userStatus,
    };
    console.log(userData);
    editUser({ id: userDetails?.id, payload: userData });
  };

  const { mutate: editUser } = useMutation((variables: any) => editUserRequest(variables?.id, variables?.payload), {
    onSuccess: (data) => {
      console.log("Edit User Successss...", data);
      handleClose();
      refetchUsers();
    },
    onError: (error: any) => {
      console.log("Edit User Errorrrr...", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("edit");
    },
  });

  return (
    <Modal
      open={open.edit}
      onClose={handleClose}
      aria-labelledby="edit-user-modal-title"
      aria-describedby="edit-user-modal-description"
    >
      <Box sx={style}>
        <ModalsStyles.Container>
          <ModalsStyles.Header>
            <ModalsStyles.HeaderText>{t("um.edit-user")}</ModalsStyles.HeaderText>
            <IconButton onClick={handleClose}>
              <CloseX />
            </IconButton>
          </ModalsStyles.Header>
          <ModalsStyles.ModalForm>
            <ModalsStyles.DataDiv>
              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.firstName")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="firstName" value={user.firstName} onChange={handleEditUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.lastName")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="lastName" value={user.lastName} onChange={handleEditUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.designation")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField
                    name="designation"
                    value={user.designation}
                    onChange={handleEditUserInputs}
                  />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.email")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="email" value={user.email} onChange={handleEditUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.phone")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="phone" value={user.phone} onChange={handleEditUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.status")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.CustomSwitch checked={userStatus} onChange={handleUserStatusChange} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>
            </ModalsStyles.DataDiv>
            <ModalsStyles.ButtonsDiv>
              {/* Buttons for form submission and closing the modal*/}
              <Button
                variant="outlined"
                size="large"
                onClick={handleClose}
                sx={{
                  borderRadius: "0",
                  color: "#fff",
                  border: " 1px solid #fff",
                  textTransform: "capitalize",
                }}
              >
                {t("cancel")}
              </Button>
              <Button
                onClick={handleEditUserSubmit}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#06A7E0",
                  borderRadius: "0",
                  textTransform: "capitalize",
                  ":hover": {
                    backgroundColor: "#06A7E0",
                  },
                }}
              >
                {t("um.update")}
              </Button>
            </ModalsStyles.ButtonsDiv>
          </ModalsStyles.ModalForm>
        </ModalsStyles.Container>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
