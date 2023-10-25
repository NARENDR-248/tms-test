import { IconButton, Select } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteUserGroupModal } from "../modals/Delete";
import MoreIcon from "@/__assets/icons/More";
import DropdownStyles from "./styled";
import EditUserGroupModal from "../../modals/editGroup";

const UserGroupActions = (userGroupId: any) => {
  const [modalStates, setModalStates] = useState<any>({
    edit: false,
    delete: false,
  });

  const { t } = useTranslation();

  const handleOpenDelete = () => {
    setModalStates({
      edit: false,
      delete: true,
    });
  };

  const handleOpenEdit = () => {
    setModalStates({
      edit: true,
      delete: false,
    });
  };

  const handleClose = () => {
    setModalStates({
      edit: false,
      delete: false,
    });
  };

  return (
    <>
      <Select
        sx={{
          boxShadow: "none !important",
          ".MuiOutlinedInput-notchedOutline": { border: "0 !important" },
        }}
        renderValue={() => {
          return (
            <IconButton>
              <MoreIcon isVertical={true} color="#9f9f9f" />
            </IconButton>
          );
        }}
        displayEmpty
        IconComponent={() => null}
        inputProps={{ sx: { padding: "0 !important" } }}
      >
        <DropdownStyles.StyledMenuItem
          sx={{
            color: "#06A7E0",
          }}
          onClick={handleOpenEdit}
        >
          <Image src={"/Edit.png"} alt="Edit" height={15} width={15} />
          {t("edit")}
        </DropdownStyles.StyledMenuItem>
        <DropdownStyles.StyledMenuItem
          sx={{
            color: "#CD0808",
          }}
          onClick={handleOpenDelete}
        >
          <Image src={"/Delete.png"} alt="Delete" height={15} width={15} />
          {t("delete")}
        </DropdownStyles.StyledMenuItem>
      </Select>
      {modalStates.delete && <DeleteUserGroupModal open={modalStates} close={handleClose} userGroupId={userGroupId} />}
      {modalStates.edit && (
        <EditUserGroupModal open={modalStates.edit} handleClose={handleClose} userGroupId={userGroupId} />
      )}
    </>
  );
};

export default UserGroupActions;
