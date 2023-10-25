import { styled } from "@mui/material";

const AccessControl = {
  Container: styled("div")(({ theme }) => ({
    // width: "100%",
    height: "100%",
    color: "white",
    marginLeft: "18px", // required becuase of menu
    marginRight: "18px", // required becuase of menu
    marginTop: "1em", // required becuase of menu
    display: "flex",
    flex: 1,
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
    ExtendedContainer: styled("div")(({ theme }) => ({
      // minWidth: "20vw",
      minHeight: "75vh",
      backgroundColor: "#1F3A51",
      padding: "1em 1em",
    })),
    ExtendedLink: styled("p")((props: { pathname: string; reference: string }) => {
      // console.log("props", props);
      return {
        padding: "1em",
        paddingLeft: "2em",
        paddingRight: "3em",
        fontWeight: "normal",
        color: !props.pathname.includes(props.reference) ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,1)",
        backgroundColor: props.pathname.includes(props.reference) ? "#152E44" : undefined,
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#152E44",
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

export default AccessControl;
