"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { format, parse } from "date-fns";
import theme from "@/utils/theme";
import { io } from "socket.io-client";
import axios from "axios";
import tmsRequest from "@/apis/__helpers/request";

import { v4 as uuidv4 } from "uuid";

interface FormInputs {
  turnAroundId: string;
  gateId: string;
  session: "open" | "closed";
  events: {
    id: string;
    name: string;
    enabled: boolean;
    updateTime: string;
  }[];
}

const eventsList = [
  { id: "5AE9433E-F36B-1410-887E-00E1B76A10D3", name: "Airplane Stationary" },
  {
    id: "5EE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Chocks On-Block/Off-Block",
  },
  { id: "62E9433E-F36B-1410-887E-00E1B76A10D3", name: "On-Block/Off Block" },
  { id: "66E9433E-F36B-1410-887E-00E1B76A10D3", name: "Push Back Vehicle" },
  { id: "6AE9433E-F36B-1410-887E-00E1B76A10D3", name: "LMC of baggage" },
  {
    id: "6EE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Jet Bridge connect/disconnect",
  },
  {
    id: "72E9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Stairs connect/disconnect",
  },
  { id: "76E9433E-F36B-1410-887E-00E1B76A10D3", name: "Passenger Bus" },
  {
    id: "7AE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Passenger Embark/Disembark",
  },
  {
    id: "7EE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Cargo/Baggage Door Open & Close",
  },
  { id: "82E9433E-F36B-1410-887E-00E1B76A10D3", name: "Baggage/Cargo Loader" },
  { id: "86E9433E-F36B-1410-887E-00E1B76A10D3", name: "Marshaller" },
  { id: "8AE9433E-F36B-1410-887E-00E1B76A10D3", name: "Head Set Man" },
  { id: "8EE9433E-F36B-1410-887E-00E1B76A10D3", name: "Medical Lift" },
  {
    id: "92E9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Pre-Condition Air Events (APU)",
  },
  { id: "96E9433E-F36B-1410-887E-00E1B76A10D3", name: "Ground Power Unit" },
  {
    id: "9AE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Vacuum Lavatory Service",
  },
  { id: "9EE9433E-F36B-1410-887E-00E1B76A10D3", name: "Cabin Cleaning" },
  { id: "A2E9433E-F36B-1410-887E-00E1B76A10D3", name: "Potable Water Truck" },
  { id: "A6E9433E-F36B-1410-887E-00E1B76A10D3", name: "Fuelling" },
  {
    id: "AAE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Catering Service Truck",
  },
  {
    id: "AEE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Wind Shield Window Cleaners",
  },
  { id: "B2E9433E-F36B-1410-887E-00E1B76A10D3", name: "Galley Service Truck" },
  { id: "B6E9433E-F36B-1410-887E-00E1B76A10D3", name: "Workers PPE" },
  { id: "BAE9433E-F36B-1410-887E-00E1B76A10D3", name: "Vehicle Overspeed" },
  {
    id: "BEE9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Inappropriate Vehicle Parking",
  },
  {
    id: "C2E9433E-F36B-1410-887E-00E1B76A10D3",
    name: "Incorrect vehicle entry/exit",
  },
];

const FormComponent: React.FC = () => {
  const { handleSubmit, control, setValue } = useForm<FormInputs>();
  const [events, setEvents] = useState(
    eventsList.map((event) => ({
      id: event.id,
      name: event.name,
      enabled: false,
      updateTime: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
    })),
  );

  // const [socket, setSocket] = useState<any>(null);

  // useEffect(() => {
  //   const socketIOClient = io("http://localhost:4000/eventsLogs");
  //   setSocket(socketIOClient);
  //   return () => {
  //     socketIOClient.disconnect();
  //   };
  // }, []);

  const onSubmit = async (data: FormInputs) => {
    data.events = events.filter((event) => event.enabled);
    // socket?.emit("sendData", data);

    await tmsRequest.post("http://localhost:4000/v1/turnArounds/stream", data);
  };

  return (
    <Box p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="row" gap={4}>
          <Controller
            name="turnAroundId"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Turnaround ID" />}
          />

          {/* add one more controller for gateId */}

          <Controller
            name="gateId"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} label="Gate ID" />}
          />

          <Controller
            name="session"
            control={control}
            defaultValue="open"
            render={({ field }) => (
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                {...field}
              >
                <FormControlLabel
                  value="open"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{
                        color: "black",
                      }}
                    >
                      Open
                    </Typography>
                  }
                />

                <FormControlLabel
                  value="closed"
                  control={<Radio />}
                  label={
                    <Typography
                      sx={{
                        color: "black",
                      }}
                    >
                      Closed
                    </Typography>
                  }
                />
              </RadioGroup>
            )}
          />
          <Button type="submit">Submit</Button>
          <Button
            onChange={() => {
              const newTurnAroundId = uuidv4();
              //set new turnaround
              setValue("turnAroundId", newTurnAroundId);
            }}
          >
            Generate Turnaround Id
          </Button>
        </Stack>

        <Grid container spacing={2}>
          {events.map((event, index) => (
            <Grid item xs={3} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={event.enabled}
                    onChange={(e) => {
                      const newEvents = [...events];
                      newEvents[index].enabled = e.target.checked;
                      setEvents(newEvents);
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: "black",
                      width: "300px",
                    }}
                  >
                    {event.name}
                  </Typography>
                }
              />
              <TextField
                label="Timestamp"
                type="datetime-local"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{}}
                value={event.updateTime}
                onChange={(e) => {
                  const newEvents = [...events];
                  newEvents[index].updateTime = e.target.value;
                  setEvents(newEvents);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </form>
    </Box>
  );
};

export default FormComponent;
