import HomeTable from "./components/homeTable";
import { useAllTerminalsWithGates } from "@/apis/terminals/useAllTerminalsWithGates";
import Navbar from "@/components/navbar.tsx";
import HomeStyles from "./styledComponents";
import React from "react";
import Map from "./components/map";
import mapData from "./components/map/mapData";
import FlightsStyles from "../flights/styledComponents";
import { NotificationsList } from "../notifications/notificationsList";

const Home = () => {
  const { data, error, isLoading } = useAllTerminalsWithGates();

  if (!error) {
  }
  // if (isLoading) {
  //   return <h4>Loading...</h4>;
  // }

  return (
    <HomeStyles.Container>
      {/* <HomeStyles.TableContainer>
        <HomeTable data={data} />
      </HomeStyles.TableContainer> */}
      <HomeStyles.TableContainer>
        {/* <HomeTable data={data} /> */}
        <HomeStyles.MenuBarContainer>
          <Navbar />
        </HomeStyles.MenuBarContainer>
        {typeof window != "undefined" ? <Map data={mapData} /> : null}
      </HomeStyles.TableContainer>
      <FlightsStyles.NotificationsContainer>
        <NotificationsList />
      </FlightsStyles.NotificationsContainer>
    </HomeStyles.Container>
  );
};

export { Home };
