import styled from "@emotion/styled";

const PermissionCardStyles = {
  Container: styled("div")(() => ({
    minWidth: "30em",
    minHeight: "7em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.2em 1.6em",
    backgroundColor: "#152E44",
  })),
  TopContainer: styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  })),
  Title: styled("p")(() => ({
    color: "#3BA5E1",
    fontWeight: "500",
    fontSize: "1.2em",
    textTransform: "capitalize",
  })),
  ModalContainer: styled("div")(() => ({})),
  Description: styled("p")(({}) => ({
    color: "#fff",
    opacity: "0.5",
    fontWeight: "400",
    fontSize: "1em",
    textTransform: "capitalize",
  })),
};

export default PermissionCardStyles;
