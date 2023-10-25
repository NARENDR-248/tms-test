import Image from "next/image";
import {
  styled,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const Components = {
  RenameDialog: styled(Dialog)(() => ({
    ".MuiDialog-paper": {
      background: "#152E44",
      padding: "27px 28px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      width: "429px",
      maxWidth: "100%",
    },
  })),
  RDialogEditIcon: styled(Image)(() => ({
    marginRight: "11px",
  })),
  RDialogTitle: styled(DialogTitle)(() => ({
    fontSize: "24px",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: "0.6px",
    display: "flex",
    alignItems: "center",
  })),
  RDialogContent: styled(DialogContent)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0px",
    width: "100%",
  })),
  RDialogInput: styled(TextField)(() => ({
    width: "100%",
    height: "51px",
    marginTop: "14px",
    marginBottom: "10px",
    ".MuiTextField-root": {
      // border: "none", // Remove default border
      "&:hover": {
        borderColor: "rgba(255,255,255,0.15)", // Remove hover border
      },
      "&.Mui-focused": {
        borderColor: "rgba(255,255,255,0.25)", // Remove focused border
      },
    },
  })),
  RDialogErrorText: styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: 400,
    color: "rgb(95, 33, 32)",
    marginTop: "8px",
    width: "100%",
    maxWidth: "100%",
  })),
  RDialogContextText: styled(DialogContentText)(() => ({
    fontSize: "16px",
    fontWeight: 400,
    color: "rgba(255,255,255,0.5)",
    marginTop: "22px",
    width: "302px",
    maxWidth: "100%",
    textAlign: "center",
  })),
  RDialogActions: styled(DialogActions)(() => ({})),
  RDialogCancelBtn: styled(Button)(() => ({
    padding: "13px 43px",
    borderRadius: "5px",
    background: "transparent",
    border: "1px solid #ffffff",
    fontSize: "16px",
    fontWeight: 600,
    color: "rgba(255,255,255,1)",
    textTransform: "capitalize",
    marginRight: "18px",
    flex: 1,
    "@media (max-width: 576px)": {
      padding: "5px 15px",
    },
  })),
  RDialogRenameBtn: styled(LoadingButton)(() => ({
    padding: "13px 43px",
    borderRadius: "5px",
    background: "#06A7E0",
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
    textTransform: "capitalize",
    flex: 1,
    "@media (max-width: 576px)": {
      padding: "5px 15px",
    },
  })),
};
