import React from "react";
import NavbarStyles from "./styledComponents";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import FiltersIcon from "@/__assets/icons/FiltersIcon";
import { useFilterFlightsDrawerStore } from "@/store/filterFlightsDrawerStore";
import FiltersDrawer from "../../features/flights/components/menubar/FiltersDrawer";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const isNotMobile = useMediaQuery("(min-width: 420px)");
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const setIsDrawerOpen = useFilterFlightsDrawerStore((state) => state.setIsDrawerOpen);
  const isDrawerOpen = useFilterFlightsDrawerStore((state) => state.isDrawerOpen);

  const handleFiltersIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <NavbarStyles.Container>
      <NavbarStyles.ButtonsContainer>
        <NavbarStyles.Button
          sx={{
            fontSize: pathname === "/" ? "1.8em" : "1.3em",
            opacity: pathname === "/" ? "1" : "0.6",
          }}
          onClick={() => router.push("/")}
        >
          {t("overview")}
        </NavbarStyles.Button>
        <NavbarStyles.Button
          className="flights-navbar-button"
          sx={{
            fontSize: pathname.includes("/flights") ? "1.8em" : "1.3em",
            opacity: pathname.includes("/flights") ? "1" : "0.6",
            marginLeft: "0.2em",
          }}
          onClick={() => router.push("/flights/ongoing")}
        >
          {t("flights")}
        </NavbarStyles.Button>
      </NavbarStyles.ButtonsContainer>

      {pathname.includes("flights") && (
        <NavbarStyles.FiltersButton>
          <IconButton id="filter-icon-test" onClick={handleFiltersIconClick}>
            <FiltersIcon />
          </IconButton>
          <FiltersDrawer />
        </NavbarStyles.FiltersButton>
      )}
    </NavbarStyles.Container>
  );
};

export default Navbar;
