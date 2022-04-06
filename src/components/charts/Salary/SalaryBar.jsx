import { ResponsiveBar } from "@nivo/bar";

import Tooltip from "../Tooltip";

import theme from "../../../lib/nivo";

import salaryJson from "../../../data/charts/salary.json";
const { salaryData } = salaryJson;

export default function SalaryBar() {
  return (
    <div>
      <p className="trend">
        Trend: 39.8% of developers have a monthly base salary of MYR 5-10k
      </p>
      <div className="overflow-x-auto">
        <div className="h-[450px] min-w-[600px] font-medium">
          <ResponsiveBar
            data={salaryData}
            keys={["percentage"]}
            indexBy="salary"
            valueFormat={(value) => `${value}%`}
            margin={{ top: 40, right: 0, bottom: 30, left: 30 }}
            padding={0.3}
            theme={theme}
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
            gridYValues={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendPosition: "middle",
              tickValues: [0, 5, 10, 15, 20, 25, 30, 35, 40],
            }}
            tooltip={({ indexValue, value }) => (
              <Tooltip label={indexValue} value={`${value}%`} />
            )}
          />
        </div>
      </div>
    </div>
  );
}
