import React, { useState } from "react";
import HeaderStyles from "./styled";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@/__assets/icons/Divider";
import DeleteIcon from "@/__assets/icons/DeleteIcon";
import EditIcon from "@/__assets/icons/EditIcon";
import { DeleteUserModal } from "../modals/Delete";

const Header = ({ groupName }: any) => {
  const [modalStates, setModalStates] = useState<any>({
    edit: false,
    delete: false,
  });

  const { t } = useTranslation();
  const { push } = useRouter();

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
    <HeaderStyles.Container>
      <HeaderStyles.LHSContainer>
        <HeaderStyles.ReturnButton
          variant="text"
          onClick={() => {
            push(`/settings/access-control/user-groups`);
          }}
        >
          <ArrowBackIcon fontSize="small" />
          {t("um.user-groups")}
        </HeaderStyles.ReturnButton>
        <Divider />
        <HeaderStyles.Heading>{groupName}</HeaderStyles.Heading>
        <HeaderStyles.DeleteButton variant="outlined" size="small" onClick={handleOpenDelete}>
          <DeleteIcon />
          {t("delete")}
        </HeaderStyles.DeleteButton>
        <HeaderStyles.EditButton variant="contained" size="small">
          <EditIcon />
          {t("edit")}
        </HeaderStyles.EditButton>
      </HeaderStyles.LHSContainer>
      <HeaderStyles.RHSContainer>
        <HeaderStyles.AddButton variant="contained">+ {t("um.add-user-group")}</HeaderStyles.AddButton>
      </HeaderStyles.RHSContainer>
      <DeleteUserModal open={modalStates} close={handleClose} />
    </HeaderStyles.Container>
  );
};

export default Header;
