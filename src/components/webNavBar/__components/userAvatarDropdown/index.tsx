import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import UserAvatar from "./styledComponents";
import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks";
import NavBarStyles from "../../styles";
import { useMemo } from "react";
import { AdminPanelSettingsOutlined, DisplaySettings, Logout, PersonOutline } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
const TriggerMenu = () => {};
const UserAvaterDropdown = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  const menus = useMemo(() => {
    return [
      {
        name_en: "Profile",
        name_ar: "حساب تعريفي",
        icon: (
          <PersonOutline
            sx={{
              color: "white",
            }}
          />
        ),
        // handler: () => alert("test"),
        handler: () => {},
      },
      {
        name_en: "Admin",
        name_ar: "مسؤل",
        icon: (
          <AdminPanelSettingsOutlined
            sx={{
              color: "white",
            }}
          />
        ),
        handler: () => {},
      },
      {
        name_en: "Preferences",
        name_ar: "التفضيلات",
        icon: (
          <DisplaySettings
            sx={{
              color: "white",
            }}
          />
        ),
        // icon: <RoomPreferences />,
        handler: () => {},
      },
      {
        name_en: "Logout",
        name_ar: "تسجيل خروج",
        icon: (
          <Logout
            sx={{
              color: "white",
            }}
          />
        ),
        handler: () => {
          localStorage.removeItem("x-access-token");
          localStorage.removeItem("x-refresh-token");
          localStorage.removeItem("rac-user");

          router.push("/login");
        },
      },
    ];
  }, []);

  return (
    <UserAvatar.Container>
      <UserAvatar.StyledAvatar {...bindTrigger(popupState)} alt="Sultan Ibn Alawuddeen" src="/static/images/user.png" />
      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {menus.map((menu) => (
          <MenuItem
            key={menu.name_en}
            onClick={() => {
              menu.handler();
              popupState.close();
            }}
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {menu.icon}
            <Typography>{!isArabic ? menu.name_en : menu.name_ar}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </UserAvatar.Container>
  );
};

export default UserAvaterDropdown;
