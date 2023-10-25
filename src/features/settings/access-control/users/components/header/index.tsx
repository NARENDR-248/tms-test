import React, { useState } from "react";
import HeaderStyles from "./styled";
import AddUserModal from "../modals/Add";
import { useTranslation } from "react-i18next";

const Header = ({ refetchUsers }) => {
  const [modalStates, setModalStates] = useState<any>({
    add: false,
  });

  const { t } = useTranslation();

  const handleOpenEdit = () => {
    setModalStates({
      add: true,
    });
  };

  const handleClose = () => {
    setModalStates({
      add: false,
    });
  };
  return (
    <HeaderStyles.Container>
      <HeaderStyles.Heading>{t("um.user-list")}</HeaderStyles.Heading>
      <HeaderStyles.AddButton variant="contained" onClick={handleOpenEdit}>
        + {t("um.add-user")}
      </HeaderStyles.AddButton>
      <AddUserModal open={modalStates} handleClose={handleClose} refetchUsers={refetchUsers} />
    </HeaderStyles.Container>
  );
};

export default Header;
