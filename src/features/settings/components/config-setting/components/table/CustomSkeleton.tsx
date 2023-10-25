import theme from "@/utils/theme";
import { Skeleton } from "@mui/material";
import React from "react";

const CustomSkeletons = () => {
  const my_array: any = [];

  for (let i = 1; i <= 12; i++) {
    my_array.push(i);
  }

  return (
    <div style={{ padding: "1em" }}>
      <Skeleton
        sx={{
          bgcolor: "linear-gradient(270deg, #828B93 0%, #5D656B 100%)",
          borderRadius: "5px",
        }}
        variant="rectangular"
        height={50}
        animation="wave"
      />
      {my_array.map((number: any) => {
        return (
          <Skeleton
            key={number}
            sx={{
              bgcolor: "linear-gradient(270deg, #828B93 0%, #5D656B 100%)",
              borderRadius: "5px",
            }}
            variant="rectangular"
            height={25}
            style={{ marginTop: "1.5%" }}
            animation="wave"
          />
        );
      })}
    </div>
  );
};

export default CustomSkeletons;