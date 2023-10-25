import { useConfigDrawerStore } from "@/store/configStore";
import i18n from "@/utils/i18n";
import { ConfigDrawerStyles } from "./styles";
import { CreateConfig } from "../modals/CreateConfig";

const ConfigDrawer = ({ refetchConfigData }: any) => {
  const configDrawerInfo = useConfigDrawerStore((state) => state.configDrawerInfo);
  const setConfigDrawerInfo = useConfigDrawerStore((state) => state.setConfigDrawerInfo);

  const isArabic = i18n.language.startsWith("ar_AR");

  const handleCloseDrawer = () => {
    setConfigDrawerInfo({
      open: false,
      id: "",
      create: false,
      edit: false,
      duplicate: false,
    });
  };

  return (
    <ConfigDrawerStyles.Drawer
      id="config-drawer-test"
      anchor={"right"}
      open={configDrawerInfo.open}
      onClose={handleCloseDrawer}
      // variant="temporary"
      variant="persistent"
      ModalProps={{
        keepMounted: true,
      }}
      SlideProps={{
        direction: isArabic ? "right" : "left",
      }}
    >
      <ConfigDrawerStyles.ListContainer>
        <CreateConfig refetchConfigData={refetchConfigData} />
      </ConfigDrawerStyles.ListContainer>
    </ConfigDrawerStyles.Drawer>
  );
};

export default ConfigDrawer;
