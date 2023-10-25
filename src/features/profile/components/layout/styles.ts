import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "@/utils/theme";

const ProfileStyles = {
  RootContainer: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "95vh",
    display: "flex",
    padding: "1em",
    flexDirection: "column",
    gap: "1em",
  })),

  Container: styled(Box)(({}) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    gap: "1em",
  })),

  Text: styled("div")(({}) => ({
    color: "#FFF",
    fontSize: "1.7em",
    fontStyle: "normal",
    paddingLeft: "18px", // required becuase of menu
    fontWeight: 600,
  })),

  SideNav: {
    Container: styled("div")(({ theme }) => ({
      // minWidth: "20vw",
      minHeight: "75vh",
      backgroundColor: "#152E44",
      padding: "1em 0em",
    })),

    Link: styled("p")((props: { pathname: string; reference: string }) => {
      // console.log("props", props);
      return {
        padding: "1em",
        paddingLeft: "2em",
        paddingRight: "3em",
        fontWeight: "normal",
        color: !props.pathname.includes(props.reference) ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,1)",
        backgroundColor: props.pathname.includes(props.reference) ? "#1F3A51" : undefined,
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#1F3A51",
        },
      };
    }),
  },

  Content: styled("div")(({ theme }) => ({
    minHeight: "75vh",
    flex: 1,
    padding: "1em",
  })),
};

export default ProfileStyles;
