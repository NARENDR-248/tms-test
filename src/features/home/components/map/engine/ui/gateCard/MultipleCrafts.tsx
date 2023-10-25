import Plane from "../../../drawings/commons/shapes/Plane";

const MultipleCrafts = ({ data }: any) => {
  const { name, level } = data;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        gap: "0.1em",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "80%",
          backgroundColor: "#12283D",
          display: "flex",
          flexDirection: data.flip ? "column-reverse" : "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#E1E1E1",
            height: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 3px",
          }}
        >
          <p style={{ color: "#676767" }}>{name.split(" ")[1]}</p>
          <img src="/miniLogo.png" alt="RAC LOGO" width={15} height={15} />
        </div>
        <div
          style={{
            position: "relative",
            height: "80%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              rotate: data.flip ? "180deg" : "0deg",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Plane />
          </div>
          <div
            style={{
              rotate: data.flip ? "180deg" : "0deg",
              width: "100%",
              height: `${level ? level : 0}%`,
              position: "absolute",
              bottom: 0,
              zIndex: 1,
              backgroundColor: "#3BA5E1",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: "90%",
          height: "80%",
          backgroundColor: "#12283D",
          display: "flex",
          flexDirection: data.flip ? "column-reverse" : "column",
        }}
      >
        <div
          style={{
            backgroundColor: "#E1E1E1",
            height: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 3px",
          }}
        >
          <p style={{ color: "#676767" }}>{name.split(" ")[1]}</p>
          <img src="/miniLogo.png" alt="RAC LOGO" width={15} height={15} />
        </div>
        <div
          style={{
            position: "relative",
            height: "80%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              rotate: data.flip ? "180deg" : "0deg",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 2,
            }}
          >
            <Plane />
          </div>
          <div
            style={{
              rotate: data.flip ? "180deg" : "0deg",
              width: "100%",
              height: `${level ? level : 0}%`,
              position: "absolute",
              bottom: 0,
              zIndex: 1,
              backgroundColor: "#3BA5E1",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCrafts;
