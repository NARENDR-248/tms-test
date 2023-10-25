import React, { useEffect, useState } from "react";
import ChangePasswordStyles from "./styles";
import ColonIcon from "@/__assets/icons/ColonIcon";
import Inputs from "../components/inputs";
import { useMutation, useQueryClient } from "react-query";
import { editProfile } from "@/apis/profile/editProfile";
import { notifyError, notifySuccess } from "@/components/snackbar";

const ChangePassword = () => {
  const [user, setUser] = useState<any>(null);
  const queryClient = useQueryClient();

  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [reEnterNewPassword, setReEnterNewPassword] = useState(null);

  const [oldPasswordError, setOldPasswordError] = useState<any>(null);
  const [newPasswordError, setNewPasswordError] = useState<any>(null);
  const [reEnterPasswordError, setReEnterPasswordError] = useState<any>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonDisabled = () => {
    if (
      oldPassword &&
      newPassword &&
      reEnterNewPassword &&
      !oldPasswordError &&
      !newPasswordError &&
      !reEnterPasswordError
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    handleButtonDisabled();
  }, [oldPassword, newPassword, reEnterNewPassword, oldPasswordError, newPasswordError, reEnterPasswordError]);

  useEffect(() => {
    const user: any = localStorage.getItem("rac-user");
    setUser(JSON.parse(user));
  }, []);

  const { mutate: updateProfile } = useMutation((variables: any) => editProfile(variables?.id, variables?.payload), {
    onSuccess: (data) => {
      console.log("Password Updated Successfully", data);
      notifySuccess("Password Updated Successfully");
      setOldPassword(null);
      setNewPassword(null);
      setReEnterNewPassword(null);
      setIsLoading(false);
    },
    onError: (error: any) => {
      setIsLoading(false);
      console.log("Password Update Errorrrr...", error);
      notifyError(error.response.data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("editProfile");
    },
  });

  const handlePasswordChange = () => {
    if (newPassword === reEnterNewPassword) {
      setError(null);
      setIsLoading(true);
      const payload = {
        oldPassword: oldPassword,
        password: newPassword,
      };

      updateProfile({ id: user?.id, payload: payload });
    } else {
      setError("Password not matched.");
    }
  };

  return (
    <ChangePasswordStyles.Container>
      <ChangePasswordStyles.Text>Change Password</ChangePasswordStyles.Text>
      <ChangePasswordStyles.Content>
        <ChangePasswordStyles.InputGroup>
          <ChangePasswordStyles.Label>Old Password</ChangePasswordStyles.Label>
          <ColonIcon />
          <Inputs
            type="text"
            value={oldPassword}
            setValue={setOldPassword}
            setPasswordError={setOldPasswordError}
            isPasswordField={true}
          />
        </ChangePasswordStyles.InputGroup>
        <ChangePasswordStyles.InputGroup>
          <ChangePasswordStyles.Label>New Password</ChangePasswordStyles.Label>
          <ColonIcon />
          <Inputs
            type="text"
            value={newPassword}
            setValue={setNewPassword}
            setPasswordError={setNewPasswordError}
            isPasswordField={true}
          />
        </ChangePasswordStyles.InputGroup>
        <ChangePasswordStyles.InputGroup>
          <ChangePasswordStyles.Label>Re-enter New Password</ChangePasswordStyles.Label>
          <ColonIcon />
          <Inputs
            type="text"
            value={reEnterNewPassword}
            setValue={setReEnterNewPassword}
            setPasswordError={setReEnterPasswordError}
            isPasswordField={true}
          />
        </ChangePasswordStyles.InputGroup>
        <ChangePasswordStyles.Error>{error?.length ? error : null}</ChangePasswordStyles.Error>
        <ChangePasswordStyles.CustomButton
          sx={{
            "&:disabled": {
              pointerEvents: "all !important",
            },
          }}
          disabled={isButtonDisabled}
          onClick={handlePasswordChange}
        >
          {isLoading ? "Loading..." : "Save Change"}
        </ChangePasswordStyles.CustomButton>
      </ChangePasswordStyles.Content>
    </ChangePasswordStyles.Container>
  );
};

export { ChangePassword };
