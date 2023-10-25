import theme from "@/utils/theme";
import React, { useRef } from "react";
import LiveView from "./components/liveView";
import MenuBar from "./components/menuBar";
import TurnAroundStyles from "./styles";
import FlightTimings from "./components/flightTimings";
import { NotificationsList } from "../notifications/notificationsList";
import TimeStampsTable from "./components/timeStamps";
import { useTranslation } from "react-i18next";
import { getParams } from "@/utils/getParams";
import { useTerminalsStore } from "@/store/terminalsStore";
import { useGatesForTerminal } from "@/apis/gates/useGatesForTerminal";
import useTerminals from "@/apis/terminals/useTerminals";
import { useEffect, useState } from "react";
import { getGate } from "@/apis/gates/getGate";
import { useRouter } from "next/navigation";
import EventVideoFeed from "./components/eventVideoFeed";
import Gantt from "./components/gantt";
import { Socket, io } from "socket.io-client";
import { getTurnAround } from "@/apis/turnArounds/getTurnAround";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import getEventsForTurnAroundLogs from "@/apis/eventsLogs/getEventsLogsForTurnArounds";
import { useQueryClient } from "react-query";

const TurnArounds = () => {
  const { terminalId, gateId, setTerminalId, setGateId } = useTerminalsStore();

  const { isSuccess, data: terminals } = useTerminals();
  const { data: gates } = useGatesForTerminal(terminalId);

  const [prevTurnAround, setPrevTurnAround] = useState<any>(null);
  // Will be move in chart component //
  const [videoFeedState, setVideoFeedState] = useState({
    open: false,
    name: "",
    startTime: new Date().toISOString(),
    endTime: new Date().toISOString(),
  });
  // const [open, setOpen] = useState(false);

  const handleVideoFeedModalOpen = (name: string, startTime: string, endTime: string) => {
    setVideoFeedState({
      open: true,
      name: name,
      startTime: startTime,
      endTime: endTime,
    });
  };
  const handleVideoFeedModalClose = () => {
    setVideoFeedState({
      open: false,
      name: "",
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    });
  };

  const videoInfo = {
    name: "Cargo door aft open",
    startTime: "2023-07-03T14:31:00",
    endTime: "2023-07-03T15:28:04",
    // endTime: null,
  };
  const queryClient = useQueryClient();
  useEffect(() => {
    const run = async () => {
      // const { terminalId: terminalIdParam, gateId: gateIdParam } = getParams(window.location.search);
      const { gateId: gateIdParam } = getParams(window.location.search);
      // SOME ERROR HANDLING
      queryClient.invalidateQueries("belongingToGate");
      setGateId(gateIdParam!);
    };
    run();
  }, []);

  const router = useRouter();
  useEffect(() => {
    const run = async () => {
      if (gateId == "") {
      } else if (terminals) {
        let params = new URLSearchParams(window.location.search);
        params.set("gateId", gateId);
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        queryClient.invalidateQueries("belongingToGate");
        window.history.replaceState({}, "", newUrl);
        // 404 check
        let gateData = await getGate(gateId!, router);

        for (let i = 0; i < terminals.length; ++i) {
          if (gateData.terminal_id === terminals[i].id) {
            setTerminalId(terminals[i].id);
          }
        }
      }
    };
    run();
  }, [terminals, gateId]);

  useEffect(() => {
    if (gates && gates.length) {
      if (gateId === "") {
        queryClient.invalidateQueries("belongingToGate");
        setGateId(gates[0].id);
      }
    }
  }, [gates]);

  const socketRef = useRef<Socket | null>(null);
  const setTurnAround = useTurnaroundStore((state) => state.setTurnAround);
  const setLive = useTurnaroundStore((state) => state.setLive);
  const setEvents = useTurnaroundStore((state) => state.setEvents);
  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const live = useTurnaroundStore((state) => state.live);
  const events = useTurnaroundStore((state) => state.events);
  const reEstablishSocket = useTurnaroundStore((state) => state.reEstablishSocket);
  const setReEstablishSocket = useTurnaroundStore((state) => state.setReEstablishSocket);

  const getEventsLogs = () => {
    console.log("callling eventlOs");
    if (socketRef.current) {
      socketRef.current.disconnect();
      // return;
    }

    const socket = io("http://localhost:4000/eventsLogs");

    socket.emit(
      "turnAroundRoom",
      {
        gateId,
      },
      (response: any) => {},
    );

    // Set up event listeners for socket events
    socket.on("joinTurnAroundRoomResponse", (data) => {});
    socket.on("delete", (data) => {
      if (data.flag) {
        if (live) {
          setTurnAround(null);
          setEvents([]);
        }
      }
    });

    // FIX
    // TURNAROUND IS NULL. Thus re fetching takes place.
    socket.on("getLiveStatus", async (data: any) => {
      // refetch();
      console.log("HIHU", data);
      const { turnAroundId: turnAroundIdParam } = getParams(window.location.search);
      let turnAroundDataExists = false;
      if (typeof data.empty !== "undefined") {
        // data not present in cache
        // if param ID, then check DB
        if (turnAroundIdParam) {
          // if (turnAround != null) {
          // if (turnAround.id === turnAroundIdParam) {
          //   turnAroundDataExists = true;
          // }
          // }
          // if (!turnAroundDataExists) {
          // HITTING DB
          let turnAroundData = await getTurnAround(turnAroundIdParam);
          const events = await getEventsForTurnAroundLogs(turnAroundIdParam);
          setTurnAround(turnAroundData);
          setEvents(events);
          // }
          // }
          setLive(false);
          return;
        } else {
          setTurnAround(null);
          setLive(true);
          return;
        }
      } else {
        // DB AND SOCKETS
        let turnArIdFromRedis = data.turnAroundId;
        // let turnAroundDataExists = false;

        // data present
        if (turnAroundIdParam != null) {
          // if user is looking for the turnAround in cache
          if (turnArIdFromRedis === turnAroundIdParam) {
            // if (turnAround != null) {
            //   if (turnAround.id === turnArIdFromRedis) {
            //     turnAroundDataExists = true;
            //   }
            // }

            // if (!turnAroundDataExists) {
            // if (turnAround === data.turnAround) {
            console.log("HERE I AM t ", turnAround);
            console.log("HERE I AM d", data.turnAround);
            setTurnAround(data.turnAround);
            // }
            // }
            setLive(true);
            setEvents(data.events);
            return;
          } else {
            // if user is looking for different turnAround

            // if (turnAround != null) {
            //   if (turnAroundIdParam == turnAround.id) {
            //     turnAroundDataExists = true;
            //   }
            // }

            // if (!turnAroundDataExists) {
            let turnAroundData = await getTurnAround(turnAroundIdParam);
            setTurnAround(turnAroundData);
            // }
            const events = await getEventsForTurnAroundLogs(turnAroundIdParam);
            setEvents(events);
            setLive(false);
            return;
          }
        } else {
          // let turnAroundData = await getTurnAround(turnArIdFromRedis);
          setTurnAround(data.turnAround);
          setEvents(data.events);
          setLive(true);
          return;
        }
      }
    });

    socket.on("noData", (data: any) => {
      setTurnAround(null);
    });

    socket.on("delete", (data: any) => {
      if (data.flag) {
        setTurnAround(null);
      }
    });

    // socket.on("error", (error: any) => {
    // });

    // socket.on("disconnect", () => {});

    socketRef.current = socket;
  };

  useEffect(() => {
    const run = async () => {
      getEventsLogs();
    };
    if (gateId != null) {
      // Prob: re establising the connection
      // when turn Around changes, when gateId changes
      // turnAround changes frequently,
      // re esTABLISH WHENEVER IS SET, then re ESTABLISH
      // getEventsLogs();
      // }
      run();
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [reEstablishSocket]);

  console.log("ABCD", turnAround);
  console.log("ABCD", events);

  useEffect(() => {
    if (gateId !== "") {
      setReEstablishSocket();
    }
  }, [gateId]);
  useEffect(() => {
    if (!live) {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    } else {
      // getEventsLogs();
    }
  }, [live]);

  return (
    <TurnAroundStyles.RootContainer>
      {/* DEBUGGING PURPOSES */}
      {/* <div style={{ color: "white" }}>{JSON.stringify(reEstablishSocket)}</div> */}
      <TurnAroundStyles.Container>
        <MenuBar />
        <TurnAroundStyles.SubLayout1>
          <LiveView />
          <FlightTimings />
        </TurnAroundStyles.SubLayout1>
        <TurnAroundStyles.SubLayout2 sx={{ margin: "3em 0" }}>
          <EventVideoFeed
            open={videoFeedState.open}
            close={handleVideoFeedModalClose}
            videoInfo={{
              name: videoFeedState.name,
              startTime: videoFeedState.startTime,
              endTime: videoFeedState.endTime,
            }}
            isLive={videoFeedState.endTime == null ? true : false}
          />
          <Gantt handleVideoFeedModalOpen={handleVideoFeedModalOpen} />
        </TurnAroundStyles.SubLayout2>
        <TimeStampsTable />
      </TurnAroundStyles.Container>
      <TurnAroundStyles.NotificationsContainer>
        <NotificationsList />
      </TurnAroundStyles.NotificationsContainer>
    </TurnAroundStyles.RootContainer>
  );
};

export { TurnArounds };
