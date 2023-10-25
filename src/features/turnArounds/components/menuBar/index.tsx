import { useRef, useState, useEffect } from "react";
import MenuBarStyles from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/utils/theme";
import TerminalsDropdown from "./components/terminalsDropdown";
import TurnAroundsDropdown from "./components/turnAroundsDropdown";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useGatesForTerminal } from "@/apis/gates/useGatesForTerminal";
import { useTranslation } from "react-i18next";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { useRouter } from "next/navigation";
import i18n from "@/utils/i18n";
import Link from "next/link";

const MenuBar = () => {
  const currentTerminal = useTerminalsStore((state) => state.terminalId);
  const setCurrentTerminal = useTerminalsStore((state) => state.setTerminalId);
  const gateId = useTerminalsStore((state) => state.gateId);
  const setCurrentGate = useTerminalsStore((state) => state.setGateId);
  const setLive = useTurnaroundStore((state) => state.setLive);
  const setEvents = useTurnaroundStore((state) => state.setEvents);
  const setTurnAround = useTurnaroundStore((state) => state.setTurnAround);
  const setReEstablishSocket = useTurnaroundStore((state) => state.setReEstablishSocket);
  const { data: gates } = useGatesForTerminal(currentTerminal);
  const { t } = useTranslation();

  const isArabic = i18n.language.startsWith("ar_AR");

  const handleGateChange = (event: any) => {
    setCurrentGate(event.target.value);
    setTurnAround(null);
    setLive(true);
    setReEstablishSocket();
    setEvents([]);
  };
  const router = useRouter();
  console.log("lifecycle", JSON.stringify(gateId.length));

  return (
    <MenuBarStyles.Container id="menu-bar-test">
      <MenuBarStyles.LeftAlign>
        <MenuBarStyles.LeftAlignBackContainer
          onClick={() => {
            router.push("/");
            setCurrentTerminal("");
            setCurrentGate("");
            setTurnAround(null);
            setLive(true);
            setEvents([]);
          }}
        >
          <MenuBarStyles.StyledWestIcon
            style={{
              rotate: isArabic ? "180deg" : "0deg",
            }}
          />
          <MenuBarStyles.PageName>{t("overview")}</MenuBarStyles.PageName>
        </MenuBarStyles.LeftAlignBackContainer>
        <MenuBarStyles.Divider />
        <TerminalsDropdown />
        <MenuBarStyles.StyledSelect
          value={gateId.length ? gateId : "empty"}
          className="gate-dropdown"
          onChange={handleGateChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          IconComponent={(props: any) => <ExpandMoreIcon {...props} style={{ color: theme.palette.common.white }} />}
          MenuProps={{
            MenuListProps: {
              sx: {
                background: theme.palette.primary.light,
              },
            },
          }}
        >
          <MenuBarStyles.StyledMenuItem disabled value="empty">
            {/* {gateId ? */}
            <em>{t("select-a-gate")}</em>
            {/* // : "hello"} */}
          </MenuBarStyles.StyledMenuItem>
          {gates?.map((gate: { id: string; name: string }) => {
            return (
              <MenuBarStyles.StyledMenuItem
                key={gate.id}
                value={gate.id}
                // sx={{ color: "white", marginLeft: "1em" }}
              >
                {gate.name}
              </MenuBarStyles.StyledMenuItem>
            );
          })}
        </MenuBarStyles.StyledSelect>
      </MenuBarStyles.LeftAlign>
      <MenuBarStyles.RightAlign>{gateId && <TurnAroundsDropdown />}</MenuBarStyles.RightAlign>
    </MenuBarStyles.Container>
  );
};

export default MenuBar;
