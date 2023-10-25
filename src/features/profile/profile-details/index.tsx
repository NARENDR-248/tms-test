"use client";

import React, { useEffect, useState } from "react";
import { ProfileDetailsStyles } from "./styles";
import ColonIcon from "@/__assets/icons/ColonIcon";
import Inputs from "../components/inputs";
import EditImage from "@/__assets/icons/EditImage";
import { useUserProfileDetails } from "@/apis/profile/useProfileDetails";
import { useAuth } from "@/store/authStore";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { notifyError, notifySuccess } from "@/components/snackbar";
import { editProfile } from "@/apis/profile/editProfile";

const ProfileDetails = () => {
  // const { user, checkAuth } = useAuth();
  const queryClient = useQueryClient();

  const [user, setUser] = useState<any>(null);

  const { data: userDetails, refetch } = useUserProfileDetails(user?.id);

  const [firstName, setFirstName] = useState(userDetails?.firstName || null);
  const [lastName, setLastName] = useState(userDetails?.lastName || null);
  const [email, setEmail] = useState(userDetails?.email || null);
  const [phone, setPhone] = useState(userDetails?.phone || null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user: any = localStorage.getItem("rac-user");
    setUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    setFirstName(userDetails?.firstName);
    setLastName(userDetails?.lastName);
    setEmail(userDetails?.email);
    setPhone(userDetails?.phone);
  }, [userDetails]);

  const { mutate: updateProfile } = useMutation((variables: any) => editProfile(variables?.id, variables?.payload), {
    onSuccess: (data) => {
      console.log("Profile Updated Successfully", data);
      notifySuccess("Profile Updated Successfully");
      refetch();
      setIsLoading(false);
    },
    onError: (error: any) => {
      setIsLoading(false);
      console.log("Profile Update Errorrrr...", error);
      notifyError(error.response.data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("editProfile");
    },
  });

  const handleProfileChanges = () => {
    setIsLoading(true);
    const payload = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    updateProfile({ id: user?.id, payload: payload });
  };

  return (
    <ProfileDetailsStyles.Container>
      <ProfileDetailsStyles.ImageBox>
        <ProfileDetailsStyles.CustomImage src="/user.png" alt="image" />
        <ProfileDetailsStyles.IconBox>
          <EditImage />
        </ProfileDetailsStyles.IconBox>
      </ProfileDetailsStyles.ImageBox>
      <ProfileDetailsStyles.Content>
        <ProfileDetailsStyles.InputGroup>
          <ProfileDetailsStyles.Label>First Name</ProfileDetailsStyles.Label>
          <ColonIcon />
          <Inputs type="text" value={firstName} setValue={setFirstName} setPasswordError="" isPasswordField={false} />
        </ProfileDetailsStyles.InputGroup>
        <ProfileDetailsStyles.InputGroup>
          <ProfileDetailsStyles.Label>Last Name</ProfileDetailsStyles.Label>
          <ColonIcon />
          <Inputs type="text" value={lastName} setValue={setLastName} setPasswordError="" isPasswordField={false} />
        </ProfileDetailsStyles.InputGroup>
        <ProfileDetailsStyles.InputGroup>
          <ProfileDetailsStyles.Label>Email</ProfileDetailsStyles.Label>
          <ColonIcon />
          <Inputs type="email" value={email} setValue={setEmail} setPasswordError="" isPasswordField={false} />
        </ProfileDetailsStyles.InputGroup>
        <ProfileDetailsStyles.InputGroup>
          <ProfileDetailsStyles.Label>Phone Number</ProfileDetailsStyles.Label>
          <ColonIcon />
          <Inputs type="text" value={phone} setValue={setPhone} setPasswordError="" isPasswordField={false} />
        </ProfileDetailsStyles.InputGroup>
        <ProfileDetailsStyles.CustomButton
          sx={{
            "&:disabled": {
              pointerEvents: "all !important",
            },
          }}
          onClick={handleProfileChanges}
        >
          {isLoading ? "Loading..." : "Save Change"}
        </ProfileDetailsStyles.CustomButton>
      </ProfileDetailsStyles.Content>
    </ProfileDetailsStyles.Container>
  );
};

export { ProfileDetails };
