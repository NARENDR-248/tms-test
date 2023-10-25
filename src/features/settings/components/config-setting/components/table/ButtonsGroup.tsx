import { Button, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteConfigModal } from "../modals/DeleteConfigModal";
import { EditConfigModal } from "../modals/EditConfigModal";
import MoreIcon from "@/__assets/icons/More";
import DropdownStyles from "./dropdownStyles";
import ConfigDrawer from "../configDrawer";
import { useConfigDrawerStore } from "@/store/configStore";

const ButtonsGroup = ({ data, refetchConfigData }: any) => {
  const [modalStates, setModalStates] = useState<any>({
    edit: false,
    delete: false,
  });

  const setConfigDrawerInfo = useConfigDrawerStore((state) => state.setConfigDrawerInfo);
  const configDrawerInfo = useConfigDrawerStore((state) => state.configDrawerInfo);

  const handleEditConfig = () => {
    setConfigDrawerInfo({
      open: true,
      id: data?.id,
      create: false,
      edit: true,
      duplicate: false,
    });
  };

  const handleDuplicateConfig = () => {
    setConfigDrawerInfo({
      open: true,
      id: data?.id,
      create: false,
      edit: false,
      duplicate: true,
    });
  };

  const { t, i18n } = useTranslation();

  const isArabic = i18n.language.startsWith("ar_AR");

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
          return <MoreIcon isVertical={false} color="#9f9f9f" />;
        }}
        displayEmpty
        IconComponent={() => null}
        inputProps={{ sx: { padding: "0 !important" } }}
      >
        <DropdownStyles.StyledMenuItem onClick={handleDuplicateConfig}>
          <Image src={"/Duplicate.png"} alt="Duplicate" height={15} width={15} />
          {t("duplicate")}
        </DropdownStyles.StyledMenuItem>
        <DropdownStyles.StyledMenuItem
          sx={{
            color: "#06A7E0",
          }}
          onClick={handleEditConfig}
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
      <DeleteConfigModal open={modalStates} close={handleClose} id={data?.id} refetchConfigData={refetchConfigData} />
      {/* <EditConfigModal open={modalStates} close={handleClose} id={data.id} /> */}
      <ConfigDrawer />
    </>
  );
};

export default ButtonsGroup;
