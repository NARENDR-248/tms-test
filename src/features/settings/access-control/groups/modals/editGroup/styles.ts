import {
  Button,
  Modal,
  TextField,
  Typography,
  Box,
  List,
  styled,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// import AddIcon from "@mui/icons-material";
import AddCircle from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateGroupModalSC = {
  Container: styled(Modal)(() => ({
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  })),
  SubContainer: styled("div")(() => ({
    width: "1010px",
    maxWidth: "1010px",
    backgroundColor: "#152E44",
    height: "inherit",
    maxHeight: "inherit",
    // borderWidth: "0px",
  })),
  TopBar: {
    Container: styled("div")(() => {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2em",
        padding: "2em 2em 0em 2em",
      };
    }),
    Title: styled("p")(() => ({
      fontSize: "1.3em",
      fontWeight: "bold",
    })),
  },

  Stepper: {
    Wrapper: styled("div")(() => ({
      display: "flex",
      padding: "0em 2em",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5em",
    })),
    Container: styled("div")(() => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5em",
      cursor: "pointer",
    })),
    Circle: {
      Container: styled("div")(() => ({
        width: "2em",
        height: "2em",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })),
      Number: styled("p")(() => ({})),
      Text: styled("p")(() => ({
        color: "#3BA5E1",
        fontWeight: "bold",
      })),
    },
    Dashes: {
      Container: styled("p")(() => ({
        display: "flex",
      })),
      Dash: styled("p")(() => ({
        color: "#3BA5E1",
      })),
    },
  },
  Line: styled("div")(() => ({
    backgroundColor: "#000",
    height: "1px",
    width: "100%",
    marginTop: "2em",
    marginBottom: "2em",
  })),
  Layout: {
    Container: styled("div")(() => ({
      display: "flex",
      padding: "0em 2em",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "29px",
      minHeight: "350px",
    })),
    Column: styled("div")(() => ({
      flex: 1,
    })),
  },
  Input: {
    Container: styled("div")(() => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "1em",
      marginBottom: "1.5em",
    })),
    Label: styled("p")(() => ({
      minWidth: "101px",
    })),
    Value: styled("div")(() => ({})),
    InputField: styled(TextField)(() => ({
      backgroundColor: "#1F3A51",
      // height: "20px",
      // maxHeight: "20px",
      width: "20em",
      textIndent: "10px",
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
  },
  BottomBar: {
    Container: styled("div")(() => ({
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0em 2em 2em 2em",
    })),
    Btn: styled(Button)(() => ({
      background: "transparent",
      border: "1.06px solid white",
      fontSize: "14px",
      fontWeight: "600",
      color: "white",
      borderRadius: "0",
      textTransform: "capitalize",
      marginLeft: "10px",
      marginRight: "10px",
      width: "121px",
      maxWidth: "100%",
      "&.next": {
        background: "#06A7E0",
        border: "1px solid transparent",
      },
    })),
    LdBtn: styled(LoadingButton)(() => ({
      background: "transparent",
      border: "1.06px solid white",
      fontSize: "14px",
      fontWeight: "600",
      color: "white",
      borderRadius: "0",
      textTransform: "capitalize",
      marginLeft: "10px",
      marginRight: "10px",
      width: "121px",
      maxWidth: "100%",
      "&.next": {
        background: "#06A7E0",
        border: "1px solid transparent",
      },
    })),
  },
  AssignMembers: {
    Title: styled(Typography)(() => ({
      fontSize: "16px",
      fontWeight: 400,
      color: "white",
      marginBottom: "10px",
    })),
    Container: styled(Box)(() => ({
      border: "1px solid rgba(255,255,255,0.15)",
      padding: "22px 16px",
      borderRadius: "2px",
    })),
    // Search: styled(TextField)(() => ({
    //   width: "100%",
    //   "&.custom-label": {
    //     fontSize: "14px",
    //     fontWeight: 500,
    //     color: "#ffffff",
    //   },
    //   "&.custom-outline": {
    //     borderColor: "rgba(255, 255, 255, 0.2)",
    //   },
    //   "&.custom-placeholder ::placeholder": {
    //     color: "rgba(255, 255, 255, 0.2)",
    //   },
    // })),
    Search: styled(TextField)(({ theme }) => ({
      width: "100%",
      height: "2.5em",
      padding: "0.2em 0.5em 0 0.5em",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      borderRadius: "3px",
      marginBottom: "10px",
      justifyContent: "center",
      "&.custom-textfield input": {
        fontSize: "14px",
        fontWeight: 500,
        color: "#ffffff",
      },
      "&.custom-placeholder ::placeholder": {
        color: "rgba(255, 255, 255, 0.9)",
      },
    })),
    ListUsers: styled(List)(() => ({
      maxHeight: "180px",
      overflow: "auto",
    })),
    ListGroups: styled(List)(() => ({
      maxHeight: "160px",
      overflow: "auto",
    })),
    ListItem: styled(ListItem)(() => ({
      alignItems: "center",
    })),
    IconButton: styled(IconButton)(() => ({})),
    AddIcon: styled(AddCircle)(() => ({})),
    DeleteIcon: styled(DeleteIcon)(() => ({})),
    ListItemAvatar: styled(ListItemAvatar)(() => ({
      margin: 0,
    })),
    ListItemText: styled(ListItemText)(() => ({
      margin: 0,
    })),
    ListItemIcon: styled(ListItemIcon)(() => ({
      margin: 0,
    })),
    UserName: styled(Typography)(() => ({
      fontSize: "16px",
      fontWeight: "500",
      color: "rgba(255,255,255,0.7)",
    })),
    GroupName: styled(ListItemText)(() => ({
      fontSize: "16px",
      fontWeight: "500",
      color: "rgba(255,255,255,0.7)",
    })),
    GroupDetail: styled(Typography)(() => ({
      fontSize: "9px",
      fontWeight: "500",
      color: "rgba(255,255,255,0.3)",
    })),
  },
};

export default CreateGroupModalSC;
