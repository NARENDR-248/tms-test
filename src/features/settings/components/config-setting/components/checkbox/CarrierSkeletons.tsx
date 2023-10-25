import theme from "@/utils/theme";
import { Skeleton } from "@mui/material";
import React from "react";

const CarrierSkeletons = () => {
  let my_array: any = [];

  for (let i = 1; i <= 35; i++) {
    my_array.push(i);
  }

  return (
    <div
      style={{
        height: "30em",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {my_array?.map((number) => {
        return (
          <Skeleton
            key={number}
            sx={{
              bgcolor: "linear-gradient(270deg, #828B93 0%, #5D656B 100%)",
              borderRadius: "5px",
            }}
            variant="rectangular"
            width={150}
            height={20}
            style={{ marginTop: "1.5em" }}
            animation="wave"
          />
        );
      })}
    </div>
  );
};

export default CarrierSkeletons;
