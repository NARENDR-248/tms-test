import styled from "@emotion/styled";

const PermissionsStyles = {
  Container: styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "0 1em",
    gap: "1em",
  })),
  Title: styled("p")(() => ({
    color: "white",
    fontWeight: "500",
    fontSize: "2em",
  })),
  CardsContainer: styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1em",
  })),
};

export default PermissionsStyles;
