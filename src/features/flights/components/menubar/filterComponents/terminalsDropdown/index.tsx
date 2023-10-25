import FlightTerminalsDropdownStyles from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "@/utils/theme";
import useGetTerminals from "@/apis/terminals/useGetTerminals";
import { useTranslation } from "react-i18next";
import { useFlightsTerminalStore } from "@/store/flightsTerminalStore";

export default function FlightTerminalsDropdown() {
  const terminalId = useFlightsTerminalStore((state) => state.terminalId);
  const setTerminalId = useFlightsTerminalStore((state) => state.setTerminalId);

  const handleTerminalChange = (event: any) => {
    const selectedTerminalId = event.target.value || "";
    setTerminalId(selectedTerminalId);
  };

  const { data } = useGetTerminals();

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  return (
    <>
      <FlightTerminalsDropdownStyles.StyledSelect
        value={terminalId}
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
        <FlightTerminalsDropdownStyles.ButtonContainer>
          <FlightTerminalsDropdownStyles.StyledButton variant="text" onClick={() => setTerminalId("")}>
            Clear filter
          </FlightTerminalsDropdownStyles.StyledButton>
        </FlightTerminalsDropdownStyles.ButtonContainer>
        <FlightTerminalsDropdownStyles.StyledMenuItem disabled value="" selected>
          {t("select-terminal")}
        </FlightTerminalsDropdownStyles.StyledMenuItem>
        {data?.map((terminal: { id: string; name: string; apron_name_en: string; apron_name_ar: string }) => {
          return (
            <FlightTerminalsDropdownStyles.StyledMenuItem
              key={terminal.id}
              value={terminal.id}
              // sx={{ color: "white", marginLeft: "1em" }}
            >
              {terminal.name} ( {isArabic ? terminal.apron_name_ar : terminal.apron_name_en} )
            </FlightTerminalsDropdownStyles.StyledMenuItem>
          );
        })}
      </FlightTerminalsDropdownStyles.StyledSelect>
    </>
  );
}
