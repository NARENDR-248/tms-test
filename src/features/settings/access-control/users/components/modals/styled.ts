import { FormControl, Switch, TextField, Typography, styled } from "@mui/material";

const ModalsStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "1.5em 2em",
    gap: "25px",
    borderRadius: "8px",
  })),
  Header: styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  })),
  HeaderText: styled(Typography)(() => ({
    fontSize: "1.3em",
    fontWeight: "bold",
  })),
  ModalForm: styled(FormControl)(() => ({
    display: "flex",
    width: "100%",
  })),
  DataDiv: styled("div")(() => ({
    // minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.6em",
  })),

  KeyValueDiv: styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "0.3em",
  })),

  Label: styled("div")(() => ({
    width: "30%",
    fontSize: "1em",
    fontWeight: "600",
    color: "#9F9F9F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1em",
    alignItems: "center",
  })),

  ColonDiv: styled("div")(() => ({})),

  InputDiv: styled("div")(() => ({
    width: "70%",
  })),
  InputField: styled(TextField)(() => ({
    backgroundColor: "#1F3A51",
    // height: "35px",
    // maxHeight: "35px",
    width: "100%",
    borderRadius: "5px",
    ".MuiOutlinedInput-input": {
      color: "#fff !important",
    },
    "& .MuiInputBase-input": {
      //This class targets the text inside the input.
      padding: "5px 8px",
      color: `white !important`,
    },
  })),

  CustomSwitch: styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: "#fff", // thumb color

      "&.Mui-checked": {
        color: "#fff", // thumb color when checked

        "& + .MuiSwitch-track": {
          backgroundColor: "#3BA5E1", // track color when checked
        },
      },

      "& + .MuiSwitch-track": {
        backgroundColor: "#B7B7B7", // track color
      },
    },
  })),

  ButtonsDiv: styled("div")(() => ({
    width: "100%",
    padding: "1.3em 1em 0 1em",
    marginTop: "1.5em",
    borderTop: "1px solid #0A1313",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "1em",
  })),

  DeleteDiv: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    borderRadius: "8px",
  })),

  DeleteSubDiv: styled("div")(() => ({
    display: "flex",
    gap: "30px",
  })),

  DeleteText: styled("p")(() => ({
    color: "#fff",
    fontSize: "24px",
    fontWeight: 700,
  })),

  DeleteSubText: styled("p")(() => ({
    fontWeight: "400",
    fontSize: "0.9em",
    textAlign: "center",
    color: "#FFF",
    opacity: 0.5,
  })),

  DeleteButtonDiv: styled("div")(() => ({
    display: "flex",
    gap: "10px",
  })),
};

export default ModalsStyles;
