import { useEffect, useState } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

import theme from "../lib/nivo";
import Tooltip from "./Tooltip";
import { median, average } from "../data/satisfaction";
import SocialSharing from "./SocialSharing";

const SatisfactionKeys = {
  Median: "Median",
  Average: "Average",
};

export default function SatisfactionScatterPlot() {
  const [satisfactionData, setSatisfactionData] = useState(median);
  const [key, setKey] = useState(SatisfactionKeys.Median);

  useEffect(() => {
    if (key === SatisfactionKeys.Median) setSatisfactionData(median);
    else if (key === SatisfactionKeys.Average) setSatisfactionData(average);
  }, [key]);

  return (
    <div id="satisfaction" className="chart">
      <div className="social-share-header">
        <h2 className="title">Satisfaction</h2>
        <SocialSharing path="/findings/#satisfaction" />
      </div>
      <p>
        Trend: The satisfaction level of developers increases as monthly base
        salary increases.
      </p>
      <br />
      <p>
        Note 1: This trend does not take into account factors other than monthly
        base salary which may not give the full picture
      </p>
      <br />
      <p>
        Note 2: Based on the non-aggregated dataset, the correlation between
        satisfaction and monthly base salary is not as strong as portrayed.
        However, this trend is due to a higher maximum monthly base salary as
        the satisfaction level increases.
      </p>
      <div className="overflow-x-auto">
        <div className="h-[500px] min-w-[500px] text-gray-900">
          <ResponsiveScatterPlot
            data={satisfactionData}
            margin={{ top: 30, right: 5, bottom: 70, left: 65 }}
            xScale={{ type: "linear", min: 1, max: "10" }}
            yScale={{ type: "linear", min: 0, max: "8000" }}
            yFormat=">-.2f"
            enableGridX={false}
            nodeSize={11}
            colors={["#f5f84c"]}
            theme={theme}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Satisfaction",
              legendPosition: "middle",
              legendOffset: 46,
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: `${
                key !== SatisfactionKeys.Raw ? key + " " : ""
              }Monthly Base Salary (MYR)`,
              legendPosition: "middle",
              legendOffset: -60,
            }}
            tooltip={({ node: { formattedY } }) => (
              <Tooltip label="Monthly Salary" value={`MYR ${formattedY}`} />
            )}
          />
        </div>
      </div>
      <div className="mt-2 w-full flex justify-center">
        <div className="tabs ml-16">
          <button
            onClick={() => setKey(SatisfactionKeys.Median)}
            className={`button ${
              key === SatisfactionKeys.Median ? "active-button" : ""
            }`}
          >
            Median
          </button>
          <button
            onClick={() => setKey(SatisfactionKeys.Average)}
            className={`button ${
              key === SatisfactionKeys.Average ? "active-button" : ""
            }`}
          >
            Average
          </button>
        </div>
      </div>
    </div>
  );
}
