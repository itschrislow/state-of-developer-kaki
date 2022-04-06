import { ResponsiveBar } from "@nivo/bar";

import Tooltip from "../Tooltip";

import theme from "../../../lib/nivo";

import salaryJson from "../../../data/charts/salary.json";
const { salaryData } = salaryJson;

export default function SalaryByGender() {
  return (
    <div>
      <p className="trend">
        Trend: As the salary level increases, the percentage of women/other
        developers decreases
      </p>
      <div className="overflow-x-auto">
        <div className="h-[450px] min-w-[600px] font-medium">
          <ResponsiveBar
            data={salaryData.slice().reverse()}
            layout="horizontal"
            keys={["Male", "Female/Other"]}
            indexBy="salary"
            margin={{ top: 20, right: 0, bottom: 0, left: 85 }}
            padding={0.3}
            colors={["#f9a03f", "#e5366f", "#7d1290"]}
            labelSkipWidth={18}
            labelSkipHeight={12}
            valueFormat={(value) => `${value}%`}
            theme={theme}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisBottom={null}
            tooltip={({ indexValue, value, color }) => (
              <Tooltip color={color} label={indexValue} value={`${value}%`} />
            )}
            legends={[
              {
                dataFrom: "keys",
                anchor: "top-left",
                direction: "row",
                justify: false,
                translateY: -20,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                symbolSize: 20,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
