import theme from "@/utils/theme";
import { CheckCircleOutline, ErrorOutline, InfoOutlined, WarningAmberOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Slide, toast } from "react-toastify";

interface ISnackbarProps {
  message: string;
}

export const notifyWarning = (message: any) => {
  return toast.warn(<ErrorSnackBar message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
    icon: false,
    style: {
      backgroundColor: theme.palette.warning.main,
      color: "white",
    },

    hideProgressBar: true,
  });
};

export const notifyError = (message: any) => {
  return toast.error(<ErrorSnackBar message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
    icon: false,
    style: {
      backgroundColor: theme.palette.error.main,
      color: "white",
    },

    hideProgressBar: true,
  });
};

export const notifySuccess = (message: string) => {
  return toast.success(<SuccessSnackBar message={message} />, {
    position: toast.POSITION.BOTTOM_CENTER,
    icon: false,
    style: {
      backgroundColor: theme.palette.success.main,
      color: "white",
    },
    hideProgressBar: true,
  });
};

const SuccessSnackBar: React.FC<ISnackbarProps> = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <CheckCircleOutline />
      <Typography sx={{ ml: 1 }}>{props.message}</Typography>
    </Box>
  );
};

const ErrorSnackBar: React.FC<ISnackbarProps> = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <ErrorOutline /> <Typography sx={{ ml: 1 }}>{props.message}</Typography>
    </Box>
  );
};
const WarningSnackBar: React.FC<ISnackbarProps> = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <WarningAmberOutlined />
      <Typography sx={{ ml: 1 }}>{props.message}</Typography>
    </Box>
  );
};
const InfoSnackBar: React.FC<ISnackbarProps> = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <InfoOutlined /> <Typography sx={{ ml: 1 }}>{props.message}</Typography>
    </Box>
  );
};
