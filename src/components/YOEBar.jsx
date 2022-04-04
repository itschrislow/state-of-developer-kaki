import { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

import { yoeData, count } from "../data/yoe";
import theme from "../lib/nivo";
import Tooltip from "./Tooltip";
import SocialSharing from "./SocialSharing";
import { getPercentage } from "../lib/helpers";
import { TOTAL_RESPONSES } from "../lib/constants";

const YoeKeys = {
  Count: "count",
  Percentage: "percentage",
};

export default function YOEBar() {
  const [key, setKey] = useState(YoeKeys.Percentage);

  return (
    <div id="experience" className="chart">
      <div className="social-share-header">
        <h2 className="title">Years of Experience</h2>
        <SocialSharing path="/findings/#experience" />
      </div>
      <p>
        Trend: Almost 60% of developers have either {"<"}1 YOE or between 2-5
        YOE
      </p>
      <div className="overflow-x-auto">
        <div className="mt-4 h-96 min-w-[600px] text-gray-900 font-mono">
          <ResponsiveBar
            data={yoeData}
            keys={[key]}
            indexBy="yoe"
            margin={{ top: 40, right: 0, bottom: 25, left: 30 }}
            padding={0.4}
            theme={theme}
            valueFormat={(value) =>
              `${value}${key === YoeKeys.Percentage ? "%" : ""}`
            }
            defs={[
              {
                id: "gradient",
                type: "linearGradient",
                colors: [
                  { offset: 0, color: "#d02078" },
                  { offset: 100, color: "#f36b55" },
                ],
              },
            ]}
            fill={[{ match: "*", id: "gradient" }]}
            labelSkipWidth={12}
            labelSkipHeight={12}
            gridYValues={
              key === YoeKeys.Percentage
                ? [0, 5, 10, 15, 20, 25, 30]
                : [0, 25, 50, 75, 100, 125, 150, 175, 200]
            }
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              tickValues:
                key === YoeKeys.Percentage
                  ? [0, 5, 10, 15, 20, 25, 30]
                  : [0, 25, 50, 75, 100, 125, 150, 175, 200],
              format: (value) =>
                `${value}${key === YoeKeys.Percentage ? "%" : ""}`,
            }}
            tooltip={({ indexValue, value }) => (
              <Tooltip
                label={indexValue}
                value={`${value}${key === YoeKeys.Percentage ? "%" : ""}`}
              />
            )}
          />
        </div>
      </div>
      <p className="my-4 chart-footer">
        {count} responses ({getPercentage(count, TOTAL_RESPONSES, 1)}% of total
        responses)
      </p>
      <div className="w-full flex justify-center">
        <div className="tabs">
          <button
            onClick={() => setKey(YoeKeys.Percentage)}
            className={`button ${
              key === YoeKeys.Percentage ? "active-button" : ""
            }`}
          >
            Percentage
          </button>
          <button
            onClick={() => setKey(YoeKeys.Count)}
            className={`button ${key === YoeKeys.Count ? "active-button" : ""}`}
          >
            Count
          </button>
        </div>
      </div>
    </div>
  );
}
