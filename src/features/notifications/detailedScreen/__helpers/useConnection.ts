import { useGatesForTerminal } from "@/apis/gates/useGatesForTerminal";
import useNotifications from "@/apis/notificaions/useNotifications";
import useTerminals from "@/apis/terminals/useTerminals";
import { useCallback, useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useConnection = (
  terminalId: string,
  gateId: string,
  turnaroundId: string,
  dateRange: [null | Date, null | Date],
  fetchForAllGates: boolean,
) => {
  const [connection, setConnection] = useState<"sockets" | "rest">("sockets");

  const [isIdle, setIdle] = useState(true);

  useEffect(() => {}, [fetchForAllGates, gateId]);

  useEffect(() => {
    if (dateRange[0] && dateRange[1]) {
      setConnection("rest");
    } else {
      setConnection("sockets");
    }
  }, [dateRange, terminalId, gateId]);

  useEffect(() => {
    if (connection === "sockets" && fetchForAllGates) {
      connectToSelectedGate("", true, turnaroundId);
    } else if (connection === "sockets" && gateId) {
      connectToSelectedGate(gateId, false, turnaroundId);
    }
  }, [connection, gateId, fetchForAllGates, turnaroundId]);

  const { data: terminals, isLoading: isTerminalsLoading, refetch: refetchTerminals } = useTerminals();
  const { data: gates, isLoading: isGatesLoading, refetch: refetchGates } = useGatesForTerminal(terminalId);
  const {
    data: notificationsFromRest,
    isLoading: isNotificationsFromRestLoading,
    refetch: refetchNotifications,
  } = useNotifications(connection, gateId, dateRange[0], dateRange[1]);

  const socketRef = useRef<Socket | null>(null);
  const [notificationsFromSocket, setNotificationsFromSocket] = useState<Array<any>>([]);
  const connectToSelectedGate = useCallback(
    (gateId: string, fetchForAllGates: boolean, turnaroundId: string) => {
      if (socketRef.current) {
        // socketRef.current.emit("leaveGateForNotifications");
        socketRef.current.disconnect();
        // setNotificationsFromSocket([]);
      }

      const socket = io("http://localhost:4000/notifications");

      socket.on("connect", () => {});

      // socket.emit("leaveGateForNotifications", { gateId: gateId });

      if (fetchForAllGates) {
        console.info(`Joining gate ${gateId} for all notifs`);
        socket.emit("joinAllGatesForNotifications", {
          fetchForAllGates: true,
        });
      } else {
        console.info(`Joining gate ${gateId} for notifs`);
        socket.emit("joinGateForNotifications", {
          gateId: gateId,
          turnaroundId: turnaroundId,
          fetchForAllGates: false,
        });
      }

      socket.on(`notifications`, (notifications: any) => {
        setIdle(false);
        setNotificationsFromSocket((prev) => notifications.data);
      });

      socket.on(`notificationsFromAllGates`, (notifications: any) => {
        setIdle(false);
        setNotificationsFromSocket((prev) => notifications.data);
      });

      socket.on(`gateIdle`, (isIdle: any) => {
        setIdle(isIdle);
      });

      socket.on("error", (error: any) => {});

      socket.on("disconnect", () => {});

      socketRef.current = socket;
    },
    [gateId, fetchForAllGates, turnaroundId],
  );

  return {
    terminals,
    gates,
    notificationsFromSocket,
    notificationsFromRest,
    connectToSelectedGate,
    setConnection,
    isTerminalsLoading,
    isGatesLoading,
    isNotificationsFromRestLoading,
    refetchTerminals,
    refetchGates,
    refetchNotifications,
    connection,
    isIdle,
  };
};
