import { ResponsiveBar } from "@nivo/bar";

import { salaryData } from "../../data/salary";
import theme from "../../lib/nivo";

export default function SalaryBar() {
  return (
    <div>
      <p className="trend">
        Trend: 39.5% of developers have a monthly base salary of MYR 5-10k
      </p>
      <div className="h-[450px] font-medium">
        <ResponsiveBar
          data={salaryData}
          keys={["count"]}
          indexBy="salary"
          margin={{ top: 20, right: 30, bottom: 30, left: 60 }}
          padding={0.3}
          theme={theme}
          defs={[
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "#f43f5e" },
                { offset: 100, color: "#881337" },
              ],
            },
          ]}
          fill={[{ match: "*", id: "gradient" }]}
          labelSkipWidth={12}
          labelSkipHeight={12}
          gridYValues={[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250]}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            tickValues: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250],
          }}
          tooltip={({ indexValue, value }) => (
            <div style={{ color: "#000", background: "#fff", padding: 12 }}>
              {indexValue}: {value}
            </div>
          )}
        />
      </div>
    </div>
  );
}
