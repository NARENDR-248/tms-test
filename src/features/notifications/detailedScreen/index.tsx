"use-client";

import { Notifications } from "@mui/icons-material";
import { FormControl, MenuItem, Typography } from "@mui/material";

import DatePicker from "./components/DatePicker";
import { DetailedScreenComponents } from "./styled";
import useFilters from "./__helpers/useFilters";
import { useConnection } from "./__helpers/useConnection";
import NotificationCard from "../notificationsList/components/card";

// FETCH ALL NOTIFICATIONS FOR ALL GATES BY DEFAULT
// THREE LEVEL FITLERING - TERMINAL, GATE, DATERANGE PICKER
// SERVER SIDE PAGINATION

type Props = {};

const DetailedScreen = (props: Props) => {
  const { handleDateRangeChange, handleGateChange, handleTerminalChange, state } = useFilters();

  const {
    connectToSelectedGate,
    gates,
    isGatesLoading,
    isNotificationsFromRestLoading,
    isTerminalsLoading,
    notificationsFromRest,
    notificationsFromSocket,
    refetchGates,
    refetchNotifications,
    refetchTerminals,
    setConnection,
    terminals,
    connection,
  } = useConnection(state.terminalId, state.gateId, "", state.dateRange, false);

  return (
    <DetailedScreenComponents.Container>
      <DetailedScreenComponents.MenuBar>
        <DetailedScreenComponents.Title>
          <Notifications />
          Notifications
        </DetailedScreenComponents.Title>
        {connection === "rest" ? (
          <Typography color="white">Previous</Typography>
        ) : (
          <Typography color="white">Live</Typography>
        )}
        <DetailedScreenComponents.FiltersBar>
          <DetailedScreenComponents.TerminalsAndGates>
            <FormControl fullWidth>
              <DetailedScreenComponents.Label id="select-terminal">Select Terminal</DetailedScreenComponents.Label>
              <DetailedScreenComponents.Select
                sx={{
                  width: "150px",
                }}
                id="outlined-select-terminal"
                size="small"
                value={state.terminalId}
                onChange={handleTerminalChange}
                label="Select Terminal"
                placeholder="Please select a terminal"
              >
                {terminals?.map((terminal) => (
                  <MenuItem key={terminal.id} value={terminal.id}>
                    {terminal.name}
                  </MenuItem>
                ))}
              </DetailedScreenComponents.Select>
            </FormControl>
            <FormControl fullWidth>
              <DetailedScreenComponents.Label id="select-gate">Select Gate</DetailedScreenComponents.Label>
              <DetailedScreenComponents.Select
                sx={{}}
                variant="outlined"
                labelId="select-gate"
                size="small"
                label="Select Gate"
                value={state.gateId}
                onChange={handleGateChange}
                placeholder="Plase select a gate"
              >
                {gates?.map((gate: any) => (
                  <MenuItem key={gate.id} value={gate.id}>
                    {gate.name}
                  </MenuItem>
                ))}
              </DetailedScreenComponents.Select>
            </FormControl>
          </DetailedScreenComponents.TerminalsAndGates>
          <DetailedScreenComponents.DatePicker>
            <DatePicker
              startDate={state.dateRange[0]}
              endDate={state.dateRange[1]}
              setDateRange={handleDateRangeChange}
            />
          </DetailedScreenComponents.DatePicker>
        </DetailedScreenComponents.FiltersBar>
      </DetailedScreenComponents.MenuBar>

      <DetailedScreenComponents.CardsContainer>
        {connection === "sockets" ? (
          notificationsFromSocket.length > 0 ? (
            notificationsFromSocket.map((notif) => (
              <NotificationCard
                id={notif.id}
                key={notif.id}
                time={notif.time}
                message={notif.message}
                severity={notif.severity}
                groundServiceCompanyContact={notif.groundServiceCompanyName}
                groundServiceCompanyName={notif.groundServiceCompanyName}
                arrival_code={notif.arrival_code}
                departure_code={notif.departure_code}
                gateName={notif.gateName}
              />
            ))
          ) : (
            <div>No live notifications</div>
          )
        ) : notificationsFromRest && notificationsFromRest.length > 0 ? (
          notificationsFromRest.map((notif) => (
            <NotificationCard
              id={notif.id}
              key={notif.id}
              time={notif.time}
              message={notif.message}
              severity={notif.severity}
              groundServiceCompanyContact={notif.groundServiceCompanyName}
              groundServiceCompanyName={notif.groundServiceCompanyName}
              arrival_code={notif.arrival_code}
              departure_code={notif.departure_code}
              gateName={notif.gateName}
            />
          ))
        ) : (
          <div>No notifications</div>
        )}
      </DetailedScreenComponents.CardsContainer>
    </DetailedScreenComponents.Container>
  );
};

export default DetailedScreen;
