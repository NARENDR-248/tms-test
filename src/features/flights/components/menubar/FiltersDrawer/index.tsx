import i18n from "@/utils/i18n";
import { FiltersDrawerComponents } from "./styles";
import { useFilterFlightsDrawerStore } from "@/store/filterFlightsDrawerStore";
import FiltersForm from "./filtersForm/filtersForm";

const FiltersDrawer = () => {
  const isDrawerOpen = useFilterFlightsDrawerStore((state) => state.isDrawerOpen);
  const isArabic = i18n.language.startsWith("ar_AR");
  const handleCloseDrawer = () => {
    useFilterFlightsDrawerStore.setState({ isDrawerOpen: false });
  };
  return (
    <FiltersDrawerComponents.Drawer
      id="filters-drawer"
      anchor={"bottom"}
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      variant="temporary"
      sx={{
        ".MuiDrawer-paper": {
          borderRadius: "25px 25px 0 0",
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <FiltersDrawerComponents.FiltersContainer>
        <FiltersForm />
      </FiltersDrawerComponents.FiltersContainer>
    </FiltersDrawerComponents.Drawer>
  );
};

export default FiltersDrawer;
