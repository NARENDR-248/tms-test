import * as React from "react";
const MainArea = (obj) => {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${obj.containerWidth}" height="${obj.containerHeight}"
      style="${obj.debug ? "background-color: green;" : ""}"
      fill="none"
      {...props}
      viewBox="0 0 5461 1150"
      >
<path d="M3198.58 197.876H2356.52L2051.64 789.283H3499.28L3198.58 197.876Z" fill="#0D1F31"/>
<circle cx="2367.98" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2367.98" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2074.57" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2147.92" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2147.92" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2147.92" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2441.33" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2147.92" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3321.57" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3394.92" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3394.92" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3394.92" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3394.92" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2514.69" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2221.28" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3394.92" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2588.04" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2294.63" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3468.27" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2661.39" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2734.74" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2808.1" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2881.45" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2954.8" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3028.16" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3101.51" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3174.86" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2111.25" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2404.66" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2111.25" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3284.89" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2478.01" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2184.6" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3358.24" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3431.59" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3431.59" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2551.36" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2257.95" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3431.59" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2624.72" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2331.3" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2698.07" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2771.42" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2844.77" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2918.13" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="2991.48" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3064.83" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="220.799" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3138.18" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="257.475" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="294.151" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3248.21" cy="330.828" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="367.505" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="404.18" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="440.857" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="477.533" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="514.209" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="550.886" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="587.563" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="624.24" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="660.916" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="697.591" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="734.267" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<circle cx="3211.54" cy="770.943" r="11.4614" fill="#0A1B1A" stroke="#0D1F31" stroke-width="4.58455"/>
<g filter="url(#filter0_d_4200_15865)">
<path d="M3098.97 275.812H2466.24C2449.47 275.812 2434.04 284.966 2426 299.683L2286.65 554.839C2280.09 566.851 2279.24 581.166 2284.33 593.87L2491.69 1111.21C2498.66 1128.6 2515.51 1140 2534.24 1140H3029C3047.85 1140 3064.78 1128.46 3071.67 1110.91L3274.95 593.279C3279.81 580.911 3279.06 567.045 3272.9 555.271L3139.59 300.408C3131.68 285.288 3116.03 275.812 3098.97 275.812Z" fill="#0D1F31"/>
</g>
<g filter="url(#filter1_d_4200_15865)">
<path d="M3058.03 326.24H2505.1C2488.36 326.24 2472.95 335.367 2464.9 350.049L2344.53 569.644C2337.93 581.685 2337.08 596.051 2342.2 608.79L2523.12 1058.54C2530.1 1075.9 2546.94 1087.27 2565.65 1087.27H2995.78C3014.61 1087.27 3031.53 1075.76 3038.43 1058.24L3215.81 608.197C3220.7 595.795 3219.95 581.88 3213.75 570.077L3098.62 350.775C3090.7 335.689 3075.07 326.24 3058.03 326.24Z" fill="#12283D"/>
</g>
<g filter="url(#filter2_d_4200_15865)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M419.544 42C409.417 42 401.206 50.2103 401.206 60.3382V197.875H69.3631C55.5734 197.875 46.7173 212.524 53.1248 224.735L397.142 880.325C400.309 886.362 406.563 890.143 413.38 890.143H1990.75C1997.61 890.143 2003.9 886.309 2007.05 880.208L2345.03 224.617C2345.67 223.362 2346.16 222.083 2346.5 220.797H3209.76C3210.09 222.027 3210.55 223.251 3211.15 224.454L3540.89 880.044C3544 886.236 3550.34 890.143 3557.27 890.143H5067.82C5074.8 890.143 5081.17 886.183 5084.26 879.928L5408.21 224.338C5414.24 212.15 5405.37 197.875 5391.77 197.875H5104.96V60.3382C5104.96 50.2103 5096.74 42 5086.62 42H419.544Z" fill="#12283D"/>
</g>
<defs>
<filter id="filter0_d_4200_15865" x="2262.7" y="248.305" width="1033.76" height="900.864" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-9.1691"/>
<feGaussianBlur stdDeviation="9.1691"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4200_15865"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4200_15865" result="shape"/>
</filter>
<filter id="filter1_d_4200_15865" x="2320.55" y="307.901" width="916.792" height="797.712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="9.1691"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4200_15865"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4200_15865" result="shape"/>
</filter>
<filter id="filter2_d_4200_15865" x="0.569942" y="0.739043" width="5459.99" height="949.003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="9.1691"/>
<feGaussianBlur stdDeviation="25.215"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4200_15865"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4200_15865" result="shape"/>
</filter>
</defs>
</svg>
  `;
};
export default MainArea;
