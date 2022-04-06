import { ResponsiveWaffle } from "@nivo/waffle";

import SocialSharing from "../SocialSharing";

import theme from "../../lib/nivo";
import { getPercentage } from "../../lib/helpers";
import { TOTAL_RESPONSES } from "../../lib/constants";

import genderJson from "../../data/charts/gender.json";
const { genderData, count } = genderJson;

export default function GenderWaffle() {
  return (
    <div id="gender" className="chart">
      <div className="social-share-header">
        <h2 className="title">Gender</h2>
        <SocialSharing
          path="/findings#gender"
          imageLink={`/static/charts/gender.png`}
          ga4Label="Gender"
        />
      </div>
      <p>Trend: Only 1 in 10 developers are females/others</p>
      <div className="mt-4 md:mt-6 lg:mt-10 h-28 text-gray-900">
        <ResponsiveWaffle
          data={genderData}
          total={count}
          rows={1}
          columns={10}
          padding={-20}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
          colors={["#d02078", "#f76c51", "#f6e36c"]}
          theme={theme}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 35,
              translateY: 10,
              itemWidth: 130,
              itemHeight: 20,
              symbolSize: 20,
              symbolShape: "circle",
            },
          ]}
          cellComponent={CustomCell}
        />
      </div>
      <p className="mt-4 chart-footer">
        {count} responses ({getPercentage(count, TOTAL_RESPONSES, 1)}% of total
        responses)
      </p>
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
    cx={x + size / 2}
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
