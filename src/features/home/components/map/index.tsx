"use client";

import { useEffect, useRef } from "react";
import { backgroundColor } from "@/features/constants/colors";
import MapSC from "./styles";
import createTerminal from "./engine/createTerminal";
import MapGenerator from "./MapGenerator";
import { useTranslation } from "react-i18next";

let isFirst = false;
const Map = ({ data }: any) => {
  const svgRef = useRef(null);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar_AR");

  useEffect(() => {
    const run = async () => {
      //  Dynamic Import
      const d3 = await import("d3");

      let map: any = d3.select(svgRef.current);
      // if (isArabic) {
      // map = d3.select(svgRefAr.current);
      // } else {
      // map = d3.select(svgRefEn.current);
      // }
      // map.selectAll("*").remove();
      // // Variables
      let width = parseFloat(map.style("width").split("p")[0]);
      let height = parseFloat(map.style("height").split("p")[0]);
      const initialWidth = width;
      const initialHeight = height;
      let currentWidth = initialWidth;
      let currentHeight = initialHeight;

      map.attr("width", "100%").attr("height", "100%").style("background-color", backgroundColor);

      // Create a group for the map content to handle zoom and pan
      const mapGroup = map.append("g");

      // Create terminals
      for (let i = 0; i < data.length; ++i) {
        let obj = data[i];
        createTerminal(mapGroup, obj, isArabic);
      }

      let initialTransform: any = {
        k: 0.2,
        x: 356,
        y: 103,
      };
      let initialTransformString = `translate(${initialTransform.x}, ${initialTransform.y}) scale(${initialTransform.k})`;
      
      // Add Zoom Functionality
      const zoom: any = d3
      .zoom()
      // .translateBy([100,50])
      .scaleExtent([0.1, 5]) // Set the minimum and maximum zoom level
      .on("zoom", handleZoom); // Call the handleZoom function on zoom events
      var transform = d3.zoomIdentity.translate(initialTransform.x, initialTransform.y).scale(0.2);
      // Apply the zoom behavior to the SVG element
      map.call(zoom)
      .call(zoom.transform, transform) // Calls/inits handleZoom
      // .attr("transform",initialTransformString)       
      // .scale(.5)
      ;
      
      function handleZoom(event: any) {
        const { transform } = event;
        console.log("DRE: transform", transform)
        // currentWidth = initialWidth * transform.k;
        // currentHeight = initialHeight * transform.k;
          console.log("transform", transform);
          mapGroup.attr("transform", transform);
        // Update the map group's background rect size
        // map
        //   .select("g")
        //   .attr("width", currentWidth)
        //   .attr("height", currentHeight);
      }
    };
    // This check is required so that there are no reference errors
    if (typeof window !== "undefined") {
      run();
    }
  }, [window]);

  return (
    <MapSC.Container>
      {/* <p style={{color:"white"}}>{JSON.stringify(isFirst)}</p> */}
      <svg direction="ltr" ref={svgRef}></svg>
      <MapGenerator />
    </MapSC.Container>
  );
};

export default Map;
