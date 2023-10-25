import { SelectChangeEvent } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useImmer } from "use-immer";

export default function useFilters() {
  const [state, setState] = useImmer({
    terminalId: "",
    gateId: "",
    dateRange: [null, null] as [Date | null, Date | null],
  });

  useEffect(() => {
    const params: any = new URLSearchParams(window.location.search);
    const newTerminalId: any = params.get("terminalId") || "";
    const newGateId: any = params.get("gateId") || "";
    const newStartDate: any = params.get("startDate") ? new Date(params.get("startDate")) : null;
    const newEndDate: any = params.get("endDate") ? new Date(params.get("endDate")) : null;

    setState((draft) => {
      draft.gateId = newGateId;
      draft.terminalId = newTerminalId;
      draft.dateRange = [newStartDate, newEndDate];
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (state.terminalId) {
      params.set("terminalId", state.terminalId);
    }
    if (state.gateId) {
      params.set("gateId", state.gateId);
    }

    if (state.dateRange[0] && state.dateRange[1]) {
      params.set("startDate", state.dateRange[0]?.toISOString());
      params.set("endDate", state.dateRange[1]?.toISOString());
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, [state.gateId, state.terminalId, state.dateRange]);

  const handleTerminalChange = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      setState((draft) => {
        draft.terminalId = e.target.value as string;
      });
    },
    [setState],
  );

  const handleGateChange = useCallback(
    (e: SelectChangeEvent<unknown>) => {
      setState((draft) => {
        draft.gateId = e.target.value as string;
      });
    },
    [setState],
  );

  const handleDateRangeChange = (dateRange: any) => {
    setState((draft) => {
      draft.dateRange = dateRange;
    });
  };

  return {
    state,
    handleTerminalChange,
    handleGateChange,
    handleDateRangeChange,
  };
}
