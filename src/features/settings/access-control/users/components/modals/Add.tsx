import React, { useState } from "react";
import { Modal, Button, Box, IconButton, InputAdornment } from "@mui/material";
import ModalsStyles from "./styled";
import theme from "@/utils/theme";
import CloseX from "@/__assets/icons/CloseX";
import { useTranslation } from "react-i18next";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMutation } from "react-query";
import { useCreateUser } from "@/apis/settings/access-control/useCreateUser";

// Importing TS Types
import { TAddUser } from "./Types";
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

const AddUserModal = ({ open, handleClose, refetchUsers }) => {
  const [user, setUser] = useState<TAddUser>({
    firstName: "",
    lastName: "",
    designation: "",
    phone: "",
    email: "",
    password: "",
  });
  const [userStatus, setUserStatus] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleUserStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserStatus(event.target.checked);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const { t } = useTranslation();

  const handleAddUserInputs = (e) => {
    setUser((prevUser) => {
      const temp = {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
      return temp;
    });
  };

  const handleUserSubmit = () => {
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      designation: user.designation,
      phone: user.phone,
      email: user.email,
      isActive: userStatus,
      password: user.password,
    };
    addUser(userData);
  };

  const { mutate: addUser } = useMutation(useCreateUser, {
    onSuccess: (data) => {
      console.log("Create user Successss...", data);
      handleClose();
      refetchUsers();
    },
    onError: (error) => {
      console.log("Create user Errorrrr...", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("CreateUser");
    },
  });
  return (
    <Modal
      open={open.add}
      onClose={handleClose}
      aria-labelledby="add-user-modal-title"
      aria-describedby="add-user-modal-description"
    >
      <Box sx={style}>
        <ModalsStyles.Container>
          <ModalsStyles.Header>
            <ModalsStyles.HeaderText>{t("um.add-user")}</ModalsStyles.HeaderText>
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
                  <ModalsStyles.InputField autoComplete="off" name="firstName" onChange={handleAddUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.lastName")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="lastName" onChange={handleAddUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.designation")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="designation" onChange={handleAddUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.email")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="email" onChange={handleAddUserInputs} />
                </ModalsStyles.InputDiv>
              </ModalsStyles.KeyValueDiv>

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.phone")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField name="phone" onChange={handleAddUserInputs} />
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

              <ModalsStyles.KeyValueDiv>
                <ModalsStyles.Label>
                  {t("um.password")}
                  <ModalsStyles.ColonDiv>:</ModalsStyles.ColonDiv>
                </ModalsStyles.Label>
                <ModalsStyles.InputDiv>
                  <ModalsStyles.InputField
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleAddUserInputs}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                            {showPassword ? (
                              <Visibility fontSize="small" sx={{ color: "white" }} />
                            ) : (
                              <VisibilityOff fontSize="small" sx={{ color: "white" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
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
                onClick={handleUserSubmit}
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
                {t("create")}
              </Button>
            </ModalsStyles.ButtonsDiv>
          </ModalsStyles.ModalForm>
        </ModalsStyles.Container>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
