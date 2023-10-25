"use client";

import { Box, Slider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { useCallback, useEffect, useRef, useState } from "react";
import { Data } from ".";

import { humanizeDuration } from "@/utils/dateHelpers";
import { useTranslation } from "react-i18next";
import { useTerminalsStore } from "@/store/terminalsStore";
import CONSTANTS from "@/store/constants";

const CATEGORYAXISWIDTH: number = 100;
const EXTRALIGHTCOLOR: string = "rgba(98, 156, 204, 1)";
const LIGHTCOLOR: string = "#35546E";

const BARHEIGHT: number = 10;
const VERTICALOFFSET = 25;
const BARVERTICALSPACING = 65;

export const Chart: React.FC<{
  bars: Data;
  handleVideoFeedModalOpen: any;
  start: Date | null;
  end: Date | null;
}> = ({ bars, handleVideoFeedModalOpen, start, end }) => {
  const [followVerticalIndicator, setFollowVerticalIndicator] = useState<boolean>(true);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");
  const gateId = useTerminalsStore((state) => state.gateId);
  const [scaleFactor, setScaleFactor] = useState(2000);

  useEffect(() => {
    if (gateId === CONSTANTS.gate21) {
      setScaleFactor(4000);
    } else if (gateId === CONSTANTS.gate23) {
      setScaleFactor(3000);
    } else {
      // targetting gate25
      setScaleFactor(3000);
    }
  }, [gateId]);

  const tooltipRef = useRef(null);
  const xAxisRef = useRef(null);
  const indicatorRef = useRef(null);
  const drawCount = useRef(0);
  const chartRef = useRef(null);

  const generalGanttCatAxisRef = useRef(null);
  const generalGanttYAxisRef = useRef(null);
  const generalGanttRef = useRef(null);

  const passengersGanttYAxisRef = useRef(null);
  const passengersGanttCatAxisRef = useRef(null);
  const passengersGanttRef = useRef(null);

  const cargoGanttCatAxisRef = useRef(null);
  const cargoGanttYAxisRef = useRef(null);
  const cargoGanttRef = useRef(null);

  const serviceGanttCatAxisRef = useRef(null);
  const serviceGanttYAxisRef = useRef(null);
  const serviceGanttRef = useRef(null);

  const drawHorizontalIndicator = useCallback(
    async (xScale) => {
      // Select the vertical line if it exists, otherwise create it
      const d3 = await import("d3");
      const main = d3.select(generalGanttRef.current);
      let indicatorBase: any = main.select(".indicatorBase");
      if (indicatorBase.empty()) {
        indicatorBase = main.append("line").attr("class", "indicatorBase"); // give it a class for selection
      }
      let startDate = new Date(start!);
      startDate.setMinutes(startDate.getMinutes() - 15);
      indicatorBase
        .attr("y1", 0)
        .attr("y2", 0)
        // .style("stroke-dasharray", "3, 3") // make the line dashed
        .style("stroke", "rgba(111, 206, 116, 0.4)")
        .style("stroke-width", 10)
        .join(
          (enter) => enter.append("line").attr("class", "indicatorBase"),
          (update) => update,
          (exit) => exit.remove(),
        )
        .transition() // Add a transition
        .duration(500) // Specify the duration of the transition in milliseconds
        .attr("x1", xScale(start))
        .attr("x2", xScale(end));
      ////////////////////
      let indicator: any = main.select(".indicator");
      if (indicator.empty()) {
        indicator = main.append("line").attr("class", "indicator"); // give it a class for selection
      }
      indicator
        .attr("y1", 0)
        .attr("y2", 0)
        // .style("stroke-dasharray", "3, 3") // make the line dashed
        .style("stroke", "rgba(111, 206, 116, 1)")
        .style("stroke-width", 10)
        .join(
          (enter) => enter.append("line").attr("class", "indicator"),
          (update) => update,
          (exit) => exit.remove(),
        )
        .transition() // Add a transition
        .duration(500) // Specify the duration of the transition in milliseconds
        .attr("x1", xScale(start))
        .attr("x2", xScale(end));
    },
    [start, end],
  );
  const drawVerticalIndicator = useCallback(
    async (main, barGroupCount, xScale) => {
      // Select the vertical line if it exists, otherwise create it
      let verticalLine = main.select(".verticalLine");
      if (verticalLine.empty()) {
        verticalLine = main.append("line").attr("class", "verticalLine"); // give it a class for selection
      }
      verticalLine
        .attr("y1", 0)
        .attr("y2", barGroupCount * BARVERTICALSPACING)
        .style("stroke-dasharray", "3, 3") // make the line dashed
        .style("stroke", "white")
        .join(
          (enter) => enter.append("line").attr("class", "verticalLine"),
          (update) => update,
          (exit) => exit.remove(),
        )
        .transition() // Add a transition
        .duration(500) // Specify the duration of the transition in milliseconds
        .attr("x1", (d) => xScale(end))
        .attr("x2", (d) => xScale(end));

      //access the chart container div using chartRef and set its horizontal scroll position such that the end of the chart is at the center of the container
    },
    [end],
  );
  const drawLabels = useCallback((main, bars, xScale, yScale, isArabic) => {
    // // Add labels above bars
    main
      .selectAll(".bar-label")
      .data(bars)
      .join("text")
      .attr("class", "bar-label")
      .attr("x", (bar) => xScale(new Date(bar.start)))
      .attr("y", (bar, i) => yScale(bar.group) - 2)
      .attr("transform", `translate(0, ${BARVERTICALSPACING / 2 - 10})`)
      .text((d) => {
        if (isArabic) {
          d.name = d.name_ar;
        }

        if (!d.isFirstSlot) {
          return "";
        }

        if (d.name.includes("Delay") || d.name.includes("تأخير")) {
          return "";
        } else return d.name;

        // if (d.isFirstSlot) {
        //   if (d.hasStartDelay) {
        //     if (d.name.toLowerCase().includes("delay")) {
        //       return d.name.replace("startDelay", "");
        //     } else {
        //       return "";
        //     }
        //   } else {
        //     return d.name.toLowerCase().includes("delay") ? "" : d.name;
        //   }
        // } else {
        //   return "";
        // }
      })
      .style("font-size", "11px")
      .style("font-weight", "bold")
      .style("fill", "#629CCC"); // Label Text Color
  }, []);
  const drawBars = useCallback(
    async (main, bars, xScale, yScale, barGroupCount, category) => {
      const d3 = await import("d3");
      const tooltip = d3.select(tooltipRef.current);

      main
        .selectAll("rect")
        .data(bars[category])
        .join(
          (enter) => enter.append("rect"),
          (update) => update,
          (exit) => exit.remove(),
        )

        .attr("x", (bar) => (isArabic ? xScale(bar.end) : xScale(bar.start)))
        .attr("y", (bar) => yScale(bar.group))
        .attr("transform", `translate(0, ${BARVERTICALSPACING / 2 - 5})`)
        .attr("height", BARHEIGHT)
        .attr("fill", (bar, i) =>
          bar.name.toLowerCase().includes("delay") || bar.name.toLowerCase().includes("تأخير")
            ? "url(#diagonalHatch)"
            : LIGHTCOLOR,
        )
        .style("cursor", "pointer")
        .on("click", (event, d) => {
          // handleVideoFeedModalOpen(d.name, d.start, d.end);
        })
        .on("mouseover", (event, d) => {
          const isDelayBar = d?.name?.includes("Delay");

          tooltip
            .style("display", "block")
            .style("border", isDelayBar ? "1px solid orange" : `1px solid ${EXTRALIGHTCOLOR}`);

          // if (isArabic) {
          //   tooltip
          //     .style("left", `${event.clientX - 20}px`)
          //     .style("top", () => {
          //       return `${event.clientY}px`;
          //     });
          // } else {
          tooltip.style("left", `${event.clientX + 20}px`).style("top", () => {
            return `${event.clientY}px`;
          });
          // }

          var text = d3.select("#tooltip-text").text("").attr("y", 15).style("fill", LIGHTCOLOR);

          text.append("tspan").text(d.name).style("font-size", "14px").style("font-weight", 700);

          text
            .append("tspan")
            .style("font-size", "14px")
            .style("font-weight", 700)
            .attr("x", 0)
            .attr("dy", "1.2em")
            .text(`Started at ${format(d.start, "hh:mm:ss a")}`);

          text
            .append("tspan")
            .style("font-size", "14px")
            .style("font-weight", 700)
            .attr("x", 0)
            .attr("dy", "1.2em")
            .text(`${d.hasEnded ? "Ended at" : "Last observed at"} ${format(d.end, "hh:mm:ss a")}`);

          text
            .append("tspan")
            .attr("x", 0)
            .attr("dy", "1.2em")
            .style("font-size", "14px")
            .style("font-weight", 700)
            .text(`Duration: ${humanizeDuration(d.start, d.end, isArabic ? "arabic" : "english")}`);
        })
        .on("mousemove", (event, d) => {
          // if (isArabic) {
          //   tooltip
          //     .style("right", `${event.clientX - 20}px`)
          //     .style("top", () => {
          //       return `${event.clientY}px`;
          //     });
          // } else {
          tooltip.style("left", `${event.clientX + 20}px`).style("top", () => {
            return `${event.clientY}px`;
          });
          // }
        })
        .on("mouseleave", (event, d) => {
          tooltip
            .transition() // Add a transition
            .duration(300)
            .style("display", "none");
        })
        // .on("mousemove", (event, d) => {
        //   const [x, y] = d3.pointer(event);
        //   tooltip.style("left", `${x}px`).style("top", () => {
        //     const tooltipVerticalOffset = getTooltipVerticalOffset(
        //       bars,
        //       category
        //     );
        //     return yScale(d.group) + tooltipVerticalOffset + 20;
        //   });
        // })
        // .on("mouseleave", (event, d) => {
        //   tooltip
        //     .transition() // Add a transition
        //     .duration(300)
        //     .attr("opacity", 0);

        // .html(`<div>${d.name}</div>`);
        // })
        .transition() // Add a transition
        .duration(300) // Specify the duration of the transition in milliseconds
        .attr("width", (d) => {
          return isArabic ? xScale(d.start) - xScale(d.end) : xScale(d.end) - xScale(d.start);
        });
    },
    [bars],
  );

  useEffect(() => {
    const draw = async () => {
      drawCount.current += 1;
      const d3 = await import("d3");
      d3.select(xAxisRef.current).selectAll("*").remove();
      d3.select(indicatorRef.current).selectAll("*").remove();

      d3.select(generalGanttCatAxisRef.current).selectAll("*").remove();
      d3.select(generalGanttYAxisRef.current).selectAll("*").remove();

      d3.select(passengersGanttCatAxisRef.current).selectAll("*").remove();
      d3.select(passengersGanttYAxisRef.current).selectAll("*").remove();

      d3.select(cargoGanttCatAxisRef.current).selectAll("*").remove();
      d3.select(cargoGanttYAxisRef.current).selectAll("*").remove();

      d3.select(serviceGanttCatAxisRef.current).selectAll("*").remove();
      d3.select(serviceGanttYAxisRef.current).selectAll("*").remove();

      if (!xAxisRef.current || !start || !end || !scaleFactor) {
        return;
      }
      const { xScale } = await setupXAxis(xAxisRef, start, end, scaleFactor, isArabic, gateId);

      for (let category in bars) {
        const yAxisRef = eval(`${category}GanttYAxisRef`);
        const categoryAxisRef = eval(`${category}GanttCatAxisRef`);
        const ganttRef = eval(`${category}GanttRef`);
        const yScale = await setupYAxis(yAxisRef, bars[category]);
        // const barGroupCount = [
        //   ...new Set(bars[category].map((bar) => bar.name)),
        // ].length;

        // Unique Bars
        let realCount = 0;
        let barsData = bars[category];
        let finalData: any = [];
        for (let i = 0; i < barsData.length; ++i) {
          let found = false;
          for (let j = 0; j < finalData.length; ++j) {
            if (finalData[j].group === barsData[i].group) {
              found = true;
              break;
            }
          }
          if (!found) {
            finalData.push(barsData[i]);
          }
        }
        let barGroupCount = finalData.length;
        await setupCatAxis(categoryAxisRef, t(category), barGroupCount, isArabic);
        const hoursBetweenStartAndEnd = getHoursBetween(start, end);
        const main = d3
          .select(ganttRef.current)
          .attr("width", hoursBetweenStartAndEnd >= 3 ? hoursBetweenStartAndEnd * scaleFactor : 3 * scaleFactor)
          .attr("height", finalData.length * BARVERTICALSPACING);

        if (bars[category].length === 0) continue;
        await drawBars(main, bars, xScale, yScale, barGroupCount, category);
        await drawLabels(main, bars[category], xScale, yScale, isArabic);
        await drawHorizontalIndicator(xScale);
        await drawVerticalIndicator(main, barGroupCount, xScale);
        // if (followVerticalIndicator && chartRef.current.scrollLeft) {
        //   chartRef.current.scrollLeft =
        //     xScale(end) - chartRef.current.clientWidth / 2;
        // }
      }
    };

    if (start && end) {
      draw();
    }

    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw);
    };
  }, [
    window.innerWidth,
    bars,
    scaleFactor,
    xAxisRef.current,
    followVerticalIndicator,
    start,
    end,
    // isArabic,
  ]);

  // const [scaleFactorMin, setScaleFactorMin] = useState<any>(200);

  // useEffect(() => {
  //   const hoursBetweenStartAndEnd = getHoursBetween(start, end);

  //   const currentWidth = hoursBetweenStartAndEnd * scaleFactor;

  //   const minWidth = window.innerWidth - 120;

  //   if (currentWidth < minWidth) {
  //     setScaleFactorMin(minWidth / hoursBetweenStartAndEnd);
  //   }
  // }, [scaleFactor, start, end]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0B2032",
        // direction: "ltr",
      }}
    >
      {/* <Box p={2}></Box> */}
      <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between" p={2}>
        {/* <IconButton
          disabled={followVerticalIndicator}
          color="secondary"
          onClick={() => {
            //increase end by 5 minutes
            setFollowVerticalIndicator(true);
          }}
        >
          <CenterFocusStrong />
        </IconButton> */}
        <Typography
          style={{
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "1em",
            color: "#FFF",
          }}
        >
          {t("event-timeline")}
        </Typography>
        <Slider
          sx={{
            width: "150px",
          }}
          dir={isArabic ? "rtl" : "ltr"}
          size="small"
          color="secondary"
          aria-label="Volume"
          value={scaleFactor}
          min={400}
          max={7000}
          onChange={(e: any) => {
            if (e?.target?.value) {
              setScaleFactor(parseInt(e.target.value));

              // chartRef.current.scrollLeft =
              // xScale(end) - chartRef.current.clientWidth / 2;
            }
          }}
        />
      </Stack>

      <Stack direction={"row"}>
        <Stack
          // border={"1px solid red"}
          direction={"column"}
          mt={`${VERTICALOFFSET + 25}px`}
        >
          <Stack
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            direction={"row"}
          >
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={generalGanttCatAxisRef}
            />
            <svg
              // style={{
              //   border: "1px solid green",
              // }}
              ref={generalGanttYAxisRef}
            />
          </Stack>
          <Stack
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            direction={"row"}
          >
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={passengersGanttCatAxisRef}
            />
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={passengersGanttYAxisRef}
            />
          </Stack>
          <Stack
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            direction={"row"}
          >
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={cargoGanttCatAxisRef}
            />
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={cargoGanttYAxisRef}
            />
          </Stack>
          <Stack direction={"row"}>
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={serviceGanttCatAxisRef}
            />
            <svg
              style={
                {
                  // border: "1px solid green",
                }
              }
              ref={serviceGanttYAxisRef}
            />
          </Stack>
        </Stack>
        <Stack
          onWheel={(e) => {
            if (followVerticalIndicator) {
              setFollowVerticalIndicator(false);
            }
          }}
          onClick={(e) => {
            if (followVerticalIndicator) {
              setFollowVerticalIndicator(false);
            }
          }}
          direction={"column"}
          ref={chartRef}
          sx={{
            // width: "100%",
            overflowX: "scroll",
            overflowY: "hidden",
            // position: "relative",
            // border: "1px solid red",
            // paddingRight: "20px",
          }}
        >
          <svg
            id="chart-tooltip"
            style={{
              position: "fixed",
              height: "80px",
              width: "250px",
              fontSize: "10px",
              display: "none",
              background: "rgba(0,0,0,0.5)",
              border: `1px solid ${EXTRALIGHTCOLOR}`,
              backdropFilter: "blur(10px)",
              borderRadius: "5px",
              padding: "5px 0px 5px 5px",
            }}
            ref={tooltipRef}
          >
            <text
              style={{
                border: "3px solid red",
              }}
              id="tooltip-text"
              // writing-mode="rl-tb"
              // direction="rtl"
            ></text>
          </svg>
          <svg
            style={{
              height: `${VERTICALOFFSET}px`,
            }}
            ref={xAxisRef}
          />
          <svg
            style={{
              height: `${VERTICALOFFSET}px`,
            }}
            ref={indicatorRef}
          />

          <svg
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            ref={generalGanttRef}
          />

          <svg
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            ref={passengersGanttRef}
          />

          <svg
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
            ref={cargoGanttRef}
          />

          <svg ref={serviceGanttRef} />
        </Stack>
      </Stack>
    </div>
  );
};

function getTooltipVerticalOffset(bars, category) {
  const categoryHeights = Object.keys(bars).map((category) => {
    let barsData = bars[category];
    let finalData: any = [];
    for (let i = 0; i < barsData.length; ++i) {
      let found = false;
      for (let j = 0; j < finalData.length; ++j) {
        if (finalData[j].group === barsData[i].group) {
          found = true;
          break;
        }
      }
      if (!found) {
        finalData.push(barsData[i]);
      }
    }
    let barGroupCount = finalData.length;

    return barGroupCount * BARVERTICALSPACING;
  });
  return categoryHeights.slice(0, Object.keys(bars).indexOf(category)).reduce((a, b) => a + b, 0);
}

function getHoursBetween(date1, date2) {
  var diffMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  return diffMilliseconds / (1000 * 60 * 60); // convert milliseconds to hours
}

async function setupXAxis(xAxisRef, start, end, scaleFactor, isArabic, gateId) {
  const d3 = await import("d3");

  const hoursBetweenStartAndEnd = getHoursBetween(start, end);

  const x = d3
    .select(xAxisRef.current)
    .attr("width", hoursBetweenStartAndEnd >= 3 ? hoursBetweenStartAndEnd * scaleFactor : 3 * scaleFactor);
  // .attr("height", 20);
  const startDate = new Date(start);

  const startDateMinusTwoMinutes = new Date(startDate.setMinutes(startDate.getMinutes() - 2));

  const endDatePlusTwoMinutes = new Date(new Date(end).setMinutes(new Date(end).getMinutes() + 2));

  const startPlusThreeHours = new Date(new Date(start).setHours(new Date(start).getHours() + 3));

  const xScale = d3
    .scaleTime()
    //domain of time that we want to display
    //domain will be from start to start plus 8 hours
    .domain([startDateMinusTwoMinutes, hoursBetweenStartAndEnd >= 3 ? endDatePlusTwoMinutes : startPlusThreeHours])
    //maps to pixels on the screen
    .range([
      isArabic ? (hoursBetweenStartAndEnd >= 3 ? hoursBetweenStartAndEnd * scaleFactor : 3 * scaleFactor) : 0,
      isArabic ? 0 : hoursBetweenStartAndEnd >= 3 ? hoursBetweenStartAndEnd * scaleFactor : 3 * scaleFactor,
    ]);

  x.selectAll(".x_axis").remove();

  const xAxis = d3
    .axisTop(xScale)
    .ticks(
      d3.timeMinute.every(
        scaleFactor >= 4000
          ? 1
          : scaleFactor <= 4000 && scaleFactor > 2000
          ? 2
          : scaleFactor <= 2000 && scaleFactor > 1000
          ? 5
          : 10,
      ),
    )
    .tickFormat((d: any, i) => format(d, "HH:mm"))
    .tickSize(9)
    .tickSizeOuter(2);

  //attaches the time axis
  x.append("g")
    .attr("transform", `translate(0, ${VERTICALOFFSET})`)
    .call(xAxis)
    .select(".domain")
    .style("stroke", "none") // hide axis line
    // .style("fill", "rgba(111, 206, 116, 1)")
    .attr("class", "x_axis");

  // x.selectAll(".tick line, .tick text").style("stroke", "rgba(53, 84, 110, 1)");

  x.selectAll(".tick line").style("stroke", "none"); // hide ticks
  x.selectAll(".tick text").style("stroke", "rgba(53, 84, 110, 1)");

  return {
    xScale,
    x,
    xAxis,
  };
}

async function setupCatAxis(categoryAxisRef, category, barCount, isArabic) {
  const d3 = await import("d3");

  const catY = d3
    .select(categoryAxisRef.current)
    .attr("width", CATEGORYAXISWIDTH)
    .attr("height", barCount * BARVERTICALSPACING);
  // Create yScale for cat
  const catYScale = d3
    .scaleBand()
    .domain([category])
    .range([0, barCount * BARVERTICALSPACING]);
  // Create yAxis
  const catYAxis = d3.axisLeft(catYScale).tickSize(0);
  // var width = +catY.style("width").replace("px", "");
  // Append yAxis and hide text
  catY
    .append("g")
    .attr("transform", `translate(${isArabic ? 20 : CATEGORYAXISWIDTH})`)
    .call(catYAxis)
    .select(".domain")
    .style("stroke", "none"); // hide axis line
  // .style("stroke", "rgba(111, 206, 116, 1)")
  // .style("fill", "rgba(111, 206, 116, 1)");
  // .selectAll("text")
  // .style("font-size", "0");

  catY
    .selectAll(".tick line, .tick text")
    .style("stroke", "rgba(98, 156, 204, 0)")
    .style("font-size", "12px")
    .style("text-transform", "uppercase")
    .style("fill", "#DADADA");

  return { catYScale, catY, catYAxis };
}

async function setupYAxis(yAxisRef, bars) {
  try {
    const d3 = await import("d3");
    const uniqueBars = [...new Set(bars.map((bar) => bar.group))];
    const y = d3
      .select(yAxisRef.current)
      .attr("width", 20)
      .attr("height", uniqueBars.length * BARVERTICALSPACING);
    // Create yScale
    const yScale = d3
      .scaleBand()
      .domain(bars.map((bar) => bar.group))
      .range([0, uniqueBars.length * BARVERTICALSPACING]);
    // Create yAxis
    const yAxis = d3.axisLeft(yScale).tickSize(0);

    var width = +y.style("width").replace("px", "");
    // Append yAxis and hide text
    y.append("g")
      // .attr("transform", `translate(${width},${50})`)
      .attr("transform", `translate(${width})`)
      .call(yAxis)
      // .style("stroke", "rgba(111, 206, 116, 1)")
      // .style("fill", "rgba(111, 206, 116, 1)")
      .style("left", "20")
      .selectAll("text")
      .style("font-size", "0")
      .select(".domain")
      .style("stroke", "none"); // hide axis line

    y.selectAll(".tick line, .tick text").style("stroke", "rgba(98, 156, 204, 0)").style("fill", LIGHTCOLOR);

    return yScale;
    //remove  stroke from axis
    // y.selectAll("line").style("stroke-width", "0");
  } catch (err) {
    console.error(err);
  }
}
