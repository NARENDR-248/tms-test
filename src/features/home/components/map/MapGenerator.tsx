import { useEffect, useRef, useState } from "react";
import GateCard from "./engine/ui/gateCard/GateCard";
import ReactDOM from "react-dom";
import { Socket, io } from "socket.io-client";
import { useTranslation } from "react-i18next";
import { copyFile } from "fs";
import { update } from "cypress/types/lodash";

let k = 0;

const MapGenerator = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  const [s, setS] = useState<any>([]);
  const socketRef = useRef<Socket | null>(null);
  const [socketData, setSocketData] = useState<any>(new Map());

  const updateSocketData = (gateData) => {
    let gateName = gateData.gate.name_en;
    console.log("newMap copied from", socketData);
    setSocketData(
      new Map(
        socketData.set(gateName, {
          ...gateData,
          delayShowcase: gateData.delayShowcase,
          level: gateData.progress,
        }),
      ),
    );
  };

  const initializeMap = async () => {
    const d3 = await import("d3");
    setTimeout(() => {
      const portalTargets = d3.selectAll(".gates").nodes();
      setS(portalTargets);
    }, 0); // Using a minimal timeout to ensure async rendering
  };

  const initializeSockets = async () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      // return;
    }

    const socket = io("http://localhost:4000/gates");

    // JOIN Room
    socket.emit("joinGatesRoom", {}, () => {});

    socket.on("joinGatesRoomResponse", (data) => {});
    // GET ALL GATES DATA
    socket.on("allGatesData", (data) => {
      let localMap = new Map();

      for (const element of data) {
        let gateName = element.gate.name_en;
        localMap.set(gateName.toString(), {
          ...element,
          delayShowcase: element.delayShowcase,
          level: element.progress,
        });
      }
      console.log("Req localMap", localMap);

      setSocketData(localMap);
    });
    // GET SINGLE GATE CHANGE
    socket.on("changesInGate", async (data) => {
      updateSocketData(data); // Update the state with the new Map
    });

    // GATE DELETED
    socket.on("gateDeleted", (data) => {
      console.log("DELETEDDDDDDDDDDDDDDD", data);
      setSocketData(new Map(socketData.set(data.gateName, { gateId: data.gateId, empty: true })));
    });

    socketRef.current = socket;
  };

  console.log("newMap final", socketData);
  // Changing of Terminal Name (based on language selected)
  useEffect(() => {
    const run = async () => {
      let gates = document.getElementsByClassName("gates");
      for (let i = 0; i < gates.length; ++i) {
        console.log("gaga", gates[i]);
        // gates[i].innerHTML = "<div>hello</div>";
      }
      let elements = document.getElementsByClassName("terminalName");
      if (elements) {
        interface CustomHTMLElementForTerminal {
          textContent: any;
          attributes: {
            name_en: {
              value: string;
            };
            name_ar: {
              value: string;
            };
          };
          style: {
            fontSize: string;
          };
        }
        for (let i = 0; i < elements.length; ++i) {
          let element = elements[i] as unknown as CustomHTMLElementForTerminal;
          element.textContent = isArabic ? element.attributes.name_ar!.value : element.attributes.name_en!.value;

          if (isArabic) {
            element.style.fontSize = "25px";
          } else {
            element.style.fontSize = "18px";
          }
        }
      }
    };
    run();
  }),
    [isArabic];
  useEffect(() => {
    const run = async () => {
      await initializeMap();
      await initializeSockets();
    };
    run();
  }, []);

  return (
    <>
      {s.map((target) => {
        let rotate = 0;
        let flip = false;
        let name = "";
        let id = target.attributes.id.value;
        try {
          if (typeof target.attributes.rot.value != "undefined") {
            rotate = parseInt(target.attributes.rot.value);
          }
          if (typeof target.attributes.flip.value != "undefined") {
            flip = target.attributes.flip.value === "true";
          }

          if (typeof target.attributes.name.value != "undefined") {
            name = target.attributes.name.value;
          }
        } catch (err) {
          console.error(err);
        }
        let data: any = null;

        if (socketData.has(name)) {
          let socData = socketData.get(name);
          if (typeof socData.empty !== "undefined") {
            data = {
              id: k++,
              flip,
              name: name,
              rotate,
              gateId: socData.gateId,
              level: 0,
            };
          } else {
            console.log("socData", socData);
            data = {
              ...socData,
              id: socData.id,
              flip,
              name: name,
              rotate,
            };
          }
        } else {
          data = {
            id: k++,
            flip: flip,
            gateId: null,
            level: 0,
            name,
            rotate: rotate,
          };
        }
        const portalContent = <GateCard key={data.id} data={data} />;
        return ReactDOM.createPortal(portalContent, target);
      })}
    </>
  );
};

export default MapGenerator;
