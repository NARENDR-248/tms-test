import { useTurnAround } from "@/apis/turnArounds/useTurnAround";
import FlightTimingsStyles from "../../styles";
import { useTurnaroundStore } from "@/store/turnaroundStore";
import { Skeleton, Typography } from "@mui/material";
import theme from "@/utils/theme";
import FlightCodes from "../flightCodes";
import FlightTimes from "../flightTimes";
import { useTranslation } from "react-i18next";
import FlightTimesStyles from "../flightTimes/styles";
import { formatHoursAndMinutes24Hours } from "@/utils/dateHelpers";

export const DisplayData = ({ turnAroundId, showSideBar }: any) => {
  const turnAround = useTurnaroundStore((state) => state.turnAround);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language ? i18n.language.startsWith("ar_AR") : false;

  console.log("turnAround", turnAround);
  return (
    <FlightTimingsStyles.Wrapper>
      <FlightTimingsStyles.SubContainer>
        <FlightTimingsStyles.CodeContent>
          {/* {!data || isLoading ? (
            <>
              <Typography variant="h5">
                <Skeleton
                  sx={{ bgcolor: theme.palette.primary.main }}
                  variant="rounded"
                  width={100}
                  height={75}
                />
              </Typography>
              <FlightTimingsStyles.DashDivider></FlightTimingsStyles.DashDivider>
              <Typography variant="h5">
                <Skeleton
                  sx={{ bgcolor: theme.palette.primary.main }}
                  variant="rounded"
                  width={100}
                  height={75}
                />
              </Typography>
            </>
          ) : ( */}
          <>
            {/* <p style={{ color: "white" }}>{data.carrier_name_en}</p>
              <p style={{ color: "white" }}>{data.carrier_name_ar}</p> */}
            <FlightCodes
              code={turnAround.arrivalCode}
              destination={turnAround.arrivedFrom}
              float="left"
              src="FlightLand.svg"
            />
            {showSideBar ? <FlightTimingsStyles.DashDivider></FlightTimingsStyles.DashDivider> : null}
            <FlightCodes
              code={turnAround.departureCode}
              destination={turnAround.departureTo}
              float="right"
              src="FlightTakeOff.svg"
            />
          </>
          {/* )} */}
        </FlightTimingsStyles.CodeContent>
        <FlightTimingsStyles.BottomContent>
          <FlightTimingsStyles.InBlock>
            {/* {!data || isLoading ? (
              <>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={100}
                  />
                </Typography>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={100}
                  />
                </Typography>
              </>
            ) : ( */}
            <FlightTimingsStyles.InFlexer>
              <FlightTimes
                isScheduled={false}
                title="STA"
                time={turnAround.sibt ? formatHoursAndMinutes24Hours(turnAround.sibt) : "-"}
              />

              <FlightTimes
                isScheduled={false}
                title="ATA"
                time={turnAround.aibt ? formatHoursAndMinutes24Hours(turnAround.aibt) : "-"}
              />
            </FlightTimingsStyles.InFlexer>
            <FlightTimingsStyles.InFlexer>
              <FlightTimes
                isScheduled={false}
                title="ETA"
                time={turnAround.eibt ? formatHoursAndMinutes24Hours(turnAround.pibt) : "-"}
              />
              <FlightTimes isScheduled={false} title="" time={""} />
            </FlightTimingsStyles.InFlexer>
            {/* )} */}
          </FlightTimingsStyles.InBlock>
          <FlightTimingsStyles.OutBlock>
            {/* {!data || isLoading ? (
              <div style={{ display: "flex", gap: "0.5em" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <Typography variant="h5">
                    <Skeleton
                      sx={{ bgcolor: theme.palette.primary.main }}
                      variant="rounded"
                      width={100}
                    />
                  </Typography>
                  <Typography variant="h5">
                    <Skeleton
                      sx={{ bgcolor: theme.palette.primary.main }}
                      variant="rounded"
                      width={100}
                    />
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <Typography variant="h5">
                    <Skeleton
                      sx={{ bgcolor: theme.palette.primary.main }}
                      variant="rounded"
                      width={100}
                    />
                  </Typography>
                  <Typography variant="h5">
                    <Skeleton
                      sx={{ bgcolor: theme.palette.primary.main }}
                      variant="rounded"
                      width={100}
                    />
                  </Typography>
                </div>
              </div>
            ) : ( */}

            <FlightTimingsStyles.InFlexer>
              <FlightTimes
                isScheduled={false}
                title="STD"
                time={
                  // turnAround.aobt == null
                  //   ? "From RAC ESB"
                  turnAround.sobt ? formatHoursAndMinutes24Hours(turnAround.sobt) : "-"
                }
              />
              <FlightTimes
                isScheduled={false}
                title="ATD"
                time={turnAround.aobt ? formatHoursAndMinutes24Hours(turnAround.aobt) : "-"}
              />
            </FlightTimingsStyles.InFlexer>
            <FlightTimingsStyles.InFlexer>
              <FlightTimes
                isScheduled={false}
                title="ETD"
                time={
                  // turnAround.aobt == null
                  // ? "From RAC ESB"
                  turnAround.eobt ? formatHoursAndMinutes24Hours(turnAround.eobt) : "-"
                }
              />
              <FlightTimes
                isScheduled={false}
                title="POBT"
                time={turnAround.pobt ? formatHoursAndMinutes24Hours(turnAround.pobt) : "-"}
              />
            </FlightTimingsStyles.InFlexer>

            {/* )} */}
          </FlightTimingsStyles.OutBlock>
        </FlightTimingsStyles.BottomContent>
      </FlightTimingsStyles.SubContainer>
      {showSideBar ? (
        <>
          <FlightTimingsStyles.Divider />
          <FlightTimingsStyles.DividerReplacer />
          <FlightTimingsStyles.SideLayout>
            {/* {!data || isLoading ? (
              <>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={150}
                  />
                </Typography>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={150}
                  />
                </Typography>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={150}
                  />
                </Typography>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={150}
                  />
                </Typography>
                <Typography variant="h5">
                  <Skeleton
                    sx={{ bgcolor: theme.palette.primary.main }}
                    variant="rounded"
                    width={150}
                  />
                </Typography>
              </>
            ) : ( */}
            <>
              <FlightTimes
                sidebar
                isScheduled={true}
                title={`${t("firstPassengerDisembark")}:`}
                time={
                  turnAround.firstPassengerDisembark
                    ? formatHoursAndMinutes24Hours(turnAround.firstPassengerDisembark)
                    : "-"
                }
              />
              <FlightTimes
                sidebar
                isScheduled={true}
                title={`${t("lastPassengerDisembark")}:`}
                time={
                  turnAround.lastPassengerDisembark
                    ? formatHoursAndMinutes24Hours(turnAround.lastPassengerDisembark)
                    : "-"
                }
              />
              <FlightTimes
                sidebar
                isScheduled={true}
                title={`${t("firstPassengerEmbark")}:`}
                time={
                  turnAround.firstPassengerEmbark ? formatHoursAndMinutes24Hours(turnAround.firstPassengerEmbark) : "-"
                }
              />
              <FlightTimes
                sidebar
                isScheduled={true}
                title={`${t("lastPassengerEmbark")}:`}
                time={
                  turnAround.lastPassengerEmbark ? formatHoursAndMinutes24Hours(turnAround.lastPassengerEmbark) : "-"
                }
              />
              {turnAround.groundServicesCompany && (
                <FlightTimesStyles.Container
                  sx={{
                    maxWidth: "100%",
                    // flexDirection: isArabic ? "row-reverse" : "row",
                  }}
                >
                  <FlightTimesStyles.Title>{`${t("ground-services-company")}:`}</FlightTimesStyles.Title>
                  <FlightTimesStyles.Time
                    sx={{
                      fontSize: "1em",
                      opacity: "0.7",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={turnAround.groundServicesCompany.image}
                      width={20}
                      height={20}
                      style={{
                        objectFit: "contain",
                        height: "1.5em",
                        width: "1.5em",
                        marginLeft: "0.3em",
                        marginRight: "0.3em",
                        borderRadius: "100%",
                      }}
                    />
                    <p style={{ color: "white" }}>
                      {isArabic ? turnAround.groundServicesCompany.name_ar : turnAround.groundServicesCompany.name_en}
                    </p>
                  </FlightTimesStyles.Time>
                </FlightTimesStyles.Container>
              )}
            </>
            {/* )} */}
          </FlightTimingsStyles.SideLayout>
        </>
      ) : null}
    </FlightTimingsStyles.Wrapper>
  );
};
