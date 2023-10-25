import { useEffect, useState } from "react";
import MenuBarStyles from "../../styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/utils/theme";
import useGetTerminals from "@/apis/terminals/useGetTerminals";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useQueryClient } from "react-query";
import { useTranslation } from "react-i18next";
import { useTurnaroundStore } from "@/store/turnaroundStore";

const TerminalsDropdown = () => {
  const setCurrentTerminal = useTerminalsStore((state) => state.setTerminalId);
  const setGateId = useTerminalsStore((state) => state.setGateId);
  const currentTerminal = useTerminalsStore((state) => state.terminalId);

  const setLive = useTurnaroundStore((state) => state.setLive);
  const setEvents = useTurnaroundStore((state) => state.setEvents);
  const setTurnAround = useTurnaroundStore((state) => state.setTurnAround);
  const setReEstablishSocket = useTurnaroundStore((state) => state.setReEstablishSocket);

  const handleTerminalChange = (event: any) => {
    setCurrentTerminal(event.target.value);
    setGateId("");

    setTurnAround(null);
    setLive(true);
    setReEstablishSocket();
    setEvents([]);
  };

  const { data } = useGetTerminals();

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  return (
    <>
      <MenuBarStyles.StyledSelect
        value={currentTerminal}
        onChange={handleTerminalChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        className="terminal-dropdown"
        IconComponent={(props) => <ExpandMoreIcon {...props} style={{ color: theme.palette.common.white }} />}
        MenuProps={{
          MenuListProps: {
            sx: {
              background: theme.palette.primary.light,
            },
          },
        }}
      >
        <MenuBarStyles.StyledMenuItem disabled value="">
          {currentTerminal ? <em>{t("select-a-terminal")}</em> : ""}
        </MenuBarStyles.StyledMenuItem>
        {data?.map((terminal: { id: string; name: string; apron_name_en: string; apron_name_ar: string }) => {
          return (
            <MenuBarStyles.StyledMenuItem
              key={terminal.id}
              value={terminal.id}
              // sx={{ color: "white", marginLeft: "1em" }}
            >
              {terminal.name} ( {isArabic ? terminal.apron_name_ar : terminal.apron_name_en} )
            </MenuBarStyles.StyledMenuItem>
          );
        })}
      </MenuBarStyles.StyledSelect>
    </>
  );
};

export default TerminalsDropdown;
