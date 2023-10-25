import React, { useState } from "react";
import HeaderStyles from "./styled";
import { useTranslation } from "react-i18next";
import Search from "../search";
import CreateGroupModal from "../../modals/createGroup";
import shadows from "@mui/material/styles/shadows";

const Header: React.FC<{ onSearch: Function }> = ({ onSearch }) => {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState<any>(false);

  const { t } = useTranslation();

  const openModal = () => {
    setShowCreateGroupModal(true);
  };

  return (
    <HeaderStyles.Container>
      <HeaderStyles.Heading>{t("um.user-group")}</HeaderStyles.Heading>
      <HeaderStyles.ActionsContainer>
        <Search onSearch={onSearch} />
        <HeaderStyles.AddButton variant="contained" onClick={openModal}>
          + {t("um.add-user-group")}
        </HeaderStyles.AddButton>
      </HeaderStyles.ActionsContainer>
      {showCreateGroupModal && (
        <CreateGroupModal
          showCreateGroupModal={showCreateGroupModal}
          setShowCreateGroupModal={setShowCreateGroupModal}
        />
      )}
    </HeaderStyles.Container>
  );
};

export default Header;
