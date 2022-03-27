import { ResponsiveWaffle } from "@nivo/waffle";

import theme from "../lib/nivo";
import { genderData, total } from "../data/gender";

export default function GenderWaffle() {
  return (
    <div id="gender" className="chart">
      <h2 className="title">Gender</h2>
      <p>Trend: Only 1 in 10 developers are female/other</p>
      <div className="mt-4 md:mt-6 lg:mt-10 h-28 text-gray-900">
        <ResponsiveWaffle
          data={genderData}
          total={total}
          rows={1}
          columns={10}
          padding={-20}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
          colors={["#d02078", "#f4a14f", "#f6e36c"]}
          theme={theme}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateY: 10,
              itemWidth: 100,
              itemHeight: 20,
              symbolSize: 20,
              symbolShape: "circle",
            },
          ]}
          cellComponent={CustomCell}
        />
      </div>
    </div>
  );
}

const CustomCell = ({
  position,
  size,
  x,
  y,
  color,
  fill,
  opacity,
  borderWidth,
  borderColor,
  data,
  onHover,
  onLeave,
  onClick,
}) => (
  <circle
    r={size / 4}
    cx={x + size / 4}
    cy={y + size / 4}
    fill={fill || color}
    strokeWidth={borderWidth}
    stroke={borderColor}
    opacity={opacity}
    onMouseEnter={onHover}
    onMouseMove={onHover}
    onMouseLeave={onLeave}
    onClick={(event) => {
      onClick({ position, color, x, y, data }, event);
    }}
  />
);
