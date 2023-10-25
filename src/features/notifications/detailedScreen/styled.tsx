import { Stack, styled, Box, TextField, Typography, Select, StackProps, InputLabel } from "@mui/material";

export const DetailedScreenComponents = {
  Container: styled(Box)(({ theme }) => ({
    paddingTop: 20,
    maxWidth: theme.breakpoints.values.lg,
    margin: "auto",
  })),
  MenuBar: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  })),
  FiltersBar: styled(Stack)<StackProps>(({ theme }) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  })),
  DatePicker: styled(Stack)(({ theme }) => ({})),

  TerminalsAndGates: styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    gap: 10,
  })),

  Title: styled(Typography)(({ theme }) => ({
    display: "flex",
    color: "#ffffff",
    fontWeight: 900,
    fontSize: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  })),
  Select: styled(Select)(({ theme }) => ({
    width: "150px",
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  })),
  Label: styled(InputLabel)(({ theme }) => ({
    "&.Mui-focused": {
      color: "white",
    },
    "&": {
      color: "white",
    },
  })),

  CardsContainer: styled(Box)(({ theme }) => ({
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  })),
};
