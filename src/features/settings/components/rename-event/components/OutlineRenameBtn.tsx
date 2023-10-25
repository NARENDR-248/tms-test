import React, { FC } from "react";
import { useTranslation } from "react-i18next";

// Importing Custom Hooks
import { useRenamingEventDialog } from "../store";

// Icons & Images
import PencilIcon from "../assets/icons/rename-pencil.svg";

// Styled Components
import { Components } from "../styled-components/sc-orb";

const OutlineRenameBtn: FC<{ eventId: number; event: any }> = ({
  eventId,
  event,
}) => {
  const { t } = useTranslation();
  const { setIsRDOpen } = useRenamingEventDialog();
  return (
    <Components.RenameBtn onClick={() => setIsRDOpen(true, eventId, event)}>
      <Components.RenamePencil src={PencilIcon} alt="#" />
      <Components.RenameText>{t("rename-events.rename")}</Components.RenameText>
    </Components.RenameBtn>
  );
};

export default OutlineRenameBtn;