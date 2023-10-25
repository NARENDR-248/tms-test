interface IEvent {
  eventId: number;
  eventName: string;
  isOptional: boolean;
  occurance: null | number;
  linkedTo: any;
  priority: null | number;
  carrier: string;
  aircraftType: string;
  timeOfDay: string;
  children: [];
}
interface IEventConfig {
  id: number;
  eventId: number;
  event_name: string;
  linked_event_id: null | number;
  linked_event_name: string;
  event_type: string;
  min_occurance: number;
  max_occurance: number;
  dependency_type: string;
  start_delay_thresholds: boolean;
  min_start_delay: number;
  middle_start_delay: number;
  max_start_delay: number;
  ideal_duration: number;
  min_end_delay: number;
  middle_end_delay: number;
  max_end_delay: number;
  stand_type: string[];
  is_optional: boolean;
  carrier: any[];
  priority: number;
  children: [];
}

interface IApplicableFilters {
  carrier: string[];
  aircraftType: string[];
  timeOfDay: string[];
}

export type { IEvent, IEventConfig, IApplicableFilters };
