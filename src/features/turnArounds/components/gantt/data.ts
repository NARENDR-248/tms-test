import { convertTime } from "@/utils/dateHelpers";

const GeneralEvents = [
  "Airplane Stationary",
  "Chocks On-Block/Off-Block",
  "On-Block/Off Block",
  "Push Back Vehicle",
  "LMC of baggage",
];
const PassengersEvents = [
  "Jet Bridge connect/disconnect",
  "Stairs connect/disconnect",
  "Passenger Bus",
  "Passenger Embark/Disembark",
];

const CargoEvents = ["Cargo/Baggage Door Open & Close", "Baggage/Cargo Loader", "Belt Loader", "Conveyor Belt"];

const ServiceEvents = [
  "Marshaller",
  "Head Set Man",
  "Medical Lift",
  "Pre-Condition Air Events (APU)",
  "Ground Power Unit",
  "Vacuum Lavatory Service",
  "Cabin Cleaning",
  "Potable Water Truck",
  "Fuelling",
  "Catering Service Truck",
];

const AlarmEvents = [
  "Wind Shield Window Cleaners",
  "Galley Service Truck",
  "Workers PPE",
  "Vehicle Overspeed",
  "Inappropriate Vehicle Parking",
  "Incorrect vehicle entry/exit",
];

export interface TurnAround {
  turnAroundId: string;
  gateId: string;
  session: string;
  events: Event[];
}

export interface Event {
  id: string;
  name_en: string;
  name_ar: string;
  ui_name_en: string;
  ui_name_ar: string;
  slots: Slot[];
}

export interface Slot {
  type: string;
  startTime: string;
  updateTime: string;
  endTime: string | null;
  delays: Delay[];
}

export interface Delay {
  type: string;
  variant: string;
  color: string;
  startTime: string | null;
  updateTime: string | null;
}

const transformEventGroup = (events: Event[], groupEvents: string[]) => {
  // let final: any = [];
  // for (let i = 0; i < events.length; ++i) {
  //   let event = events[i];
  //   let isFirstSlot = true;

  //   if (groupEvents.includes(event.name_en)) {
  //     console.log("glue: event", event);
  //     let hasStartDelay = false;
  //     if (event.slots) {
  //       for (let j = 0; j < event.slots.length; ++j) {
  //         let slot = event.slots[j];
  //         console.log("glue: slot", slot);
  //         if (typeof slot.delays != "undefined") {
  //           for (let k = 0; slot.delays.length; ++k) {
  //             let delay = slot.delays[k];
  //             if (delay.type === "startDelay") {
  //               hasStartDelay = true;
  //             }
  //             console.log("glue: delay", delay);

  //             // final.push({
  //             //   name: event.name_en + " " + delay.type,
  //             //   name_ar: event.name_ar + " " + delay.type,
  //             //   start: convertTime(delay.startTime!),
  //             //   end: convertTime(delay.updateTime!),
  //             //   group: event.name_en,
  //             //   variant: delay.variant,
  //             //   hasStartDelay: hasStartDelay,
  //             //   isFirstSlot: isFirstSlot,
  //             // });
  //           }
  //         }
  //       }
  //       //           if (slot.startTime && slot.updateTime) {
  //       //             final.push({
  //       //               name: event.name_en,
  //       //               name_ar: event.name_ar,
  //       //               start: convertTime(slot.startTime),
  //       //               end: convertTime(slot.updateTime),
  //       //               group: event.name_en,
  //       //               hasStartDelay: hasStartDelay,
  //       //               isFirstSlot: isFirstSlot,
  //       //             });
  //       // }
  //       // }
  //     }
  //     console.log("final", final);
  //   }
  // }

  // //   console.log("final", final);
  // // }
  // // return final;
  return events
    .filter((event: any) => groupEvents.includes(event.name_en))
    .flatMap((eventFromCache) => {
      let isFirstSlot = true;
      let sortedSlots = eventFromCache.slots.sort(
        (a, b) => new Date(a.updateTime).valueOf() - new Date(b.updateTime).valueOf(),
      );

      return sortedSlots?.flatMap((slot, index) => {
        let hasStartDelay = false;
        const delays = slot?.delays
          ?.filter((d) => typeof d.startTime === "string" && typeof d.updateTime === "string")
          ?.map((delay) => {
            if (delay.type === "startDelay") {
              hasStartDelay = true;
            }
            return {
              name: eventFromCache.name_en + " " + "Start Delay",
              name_ar: eventFromCache.name_ar + " " + "تأخير البدء",
              start: convertTime(delay.startTime!),
              end: convertTime(delay.updateTime!),
              group: eventFromCache.name_en,
              variant: delay.variant,
              hasStartDelay: hasStartDelay,
              isFirstSlot: isFirstSlot,
            };
          });

        let arr: any = [];

        if (slot.startTime && slot.updateTime) {
          arr.push({
            name: eventFromCache.ui_name_en ? eventFromCache.ui_name_en : eventFromCache.name_en,
            name_ar: eventFromCache.ui_name_ar ? eventFromCache.ui_name_ar : eventFromCache.name_ar,
            start: convertTime(slot.startTime),
            end: convertTime(slot.updateTime),
            group: eventFromCache.name_en,
            hasStartDelay: hasStartDelay,
            isFirstSlot: isFirstSlot,
          });
        }

        if (delays) {
          arr.push(...delays);
        }
        isFirstSlot = false;
        return arr;
      });
    });
};

const transformEventGroupDB = (events: any[], groupEvents: any[]) => {
  let filteredEvents = events.filter((event: any) => groupEvents.includes(event.event.name_en));

  let finalArray: any = [];
  let uniqueIds: any = [];

  for (let i = 0; i < filteredEvents.length; ++i) {
    let eventLog = filteredEvents[i];
    let isFirstSlot = false;
    let found = false;
    for (let j = 0; j < uniqueIds.length; ++j) {
      if (uniqueIds[j] === eventLog.event.id) {
        found = true;
        break;
      }
    }
    if (!found) {
      uniqueIds.push(eventLog.event.id);
      isFirstSlot = true;
    }
    let hasStartDelay = false;
    if (eventLog.startTimeStartDelay) {
      hasStartDelay = true;
      finalArray.push({
        name: eventLog.event.ui_name_en
          ? eventLog.event.ui_name_en + " " + "Start Delay"
          : eventLog.event.name_en + " " + "Start Delay",
        name_ar: eventLog.event.ui_name_ar
          ? eventLog.event.ui_name_ar + " " + "تأخير البدء"
          : eventLog.event.name_ar + " " + "تأخير البدء",
        start: convertTime(eventLog.startTimeStartDelay),
        end: convertTime(eventLog.startTimeEndDelay),
        group: eventLog.event.name_en,
        variant: eventLog.startDelayVariant,
        hasStartDelay: hasStartDelay,
        isFirstSlot: isFirstSlot,
      });
    }
    if (eventLog.endTimeStartDelay) {
      finalArray.push({
        name: eventLog.event.ui_name_en
          ? eventLog.event.ui_name_en + " " + "End Delay"
          : eventLog.event.name_en + " " + "End Delay",
        name_ar: eventLog.event.ui_name_ar
          ? eventLog.event.ui_name_ar + " " + "تأخير النهاية"
          : eventLog.event.name_ar + " " + "تأخير النهاية",
        start: convertTime(eventLog.endTimeStartDelay),
        end: convertTime(eventLog.endTimeEndDelay),
        group: eventLog.event.name_en,
        variant: eventLog.endDelayVariant,
        hasStartDelay: hasStartDelay,
        isFirstSlot: isFirstSlot,
      });
    }
    finalArray.push({
      name: eventLog.event.ui_name_en ? eventLog.event.ui_name_en : eventLog.event.name_en,
      name_ar: eventLog.event.ui_name_ar ? eventLog.event.ui_name_ar : eventLog.event.name_ar,
      start: convertTime(eventLog.startTime),
      end: convertTime(eventLog.endTime),
      group: eventLog.event.name_en,
      isFirstSlot: isFirstSlot,
      hasStartDelay: hasStartDelay,
    });
  }

  return finalArray;
  // return filteredEvents.flatMap((eventFromDb: any) =>
  //   eventFromDb
  //     .filter((s: any) => !!s.startTime && !!s.endTime)
  //     ?.flatMap((slot: any) => {
  //       const delays = slot?.delays
  //         ?.filter((d: any) => !!d.startTime && !!d.updateTime)
  //         ?.map((delay: any) => ({
  //           name: eventFromDb.name_en + " " + delay.type,
  //           start: convertTime(delay.startTime),
  //           end: convertTime(delay.updateTime),
  //           group: eventFromDb.name_en,
  //           variant: delay.variant,
  //         }));

  //       const arr = [
  //         {
  //           name: eventFromDb.name_en,
  //           start: convertTime(slot.startTime),
  //           end: new Date(slot.updateTime),
  //           group: eventFromDb.name_en,
  //         },
  //       ];

  //       if (delays) {
  //         arr.push(...delays);
  //       }

  //       return arr;
  //     })
  // );
};

export const transformEvents = (events: any, live: boolean): any => {
  if (live) {
    return {
      general: transformEventGroup(events, GeneralEvents),
      passengers: transformEventGroup(events, PassengersEvents),
      cargo: transformEventGroup(events, CargoEvents),
      service: transformEventGroup(events, ServiceEvents),
    };
  } else {
    return {
      general: transformEventGroupDB(events, GeneralEvents),
      passengers: transformEventGroupDB(events, PassengersEvents),
      cargo: transformEventGroupDB(events, CargoEvents),
      service: transformEventGroupDB(events, ServiceEvents),
    };
  }
};
