import { ResponsiveBar } from "@nivo/bar";

import Tooltip from "../Tooltip";

import theme from "../../../lib/nivo";

import salaryJson from "../../../data/charts/salary.json";
const { salaryData } = salaryJson;

export default function SalaryByYoe() {
  return (
    <div>
      <p className="trend">
        Trend: Developers with {"<"}5 YOE make up the majority of developers
        earning a monthly base salary up to MYR 5k while developers with {">"}5
        YOE tend to earn at least MYR 5k and above
      </p>
      <div className="overflow-x-auto">
        <div className="h-[450px] min-w-[750px] font-medium">
          <ResponsiveBar
            data={salaryData.slice().reverse()}
            layout="horizontal"
            keys={[
              "<1 year",
              "1-2 years",
              "2-5 years",
              "5-10 years",
              "10-20 years",
              ">20 years",
            ]}
            indexBy="salary"
            margin={{ top: 20, right: 0, bottom: 0, left: 85 }}
            padding={0.3}
            colors={[
              "#f9a03f",
              "#f76c51",
              "#e5366f",
              "#b90b85",
              "#7d1290",
              "#331886",
            ]}
            labelSkipWidth={14}
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
                itemsSpacing: 2,
                itemWidth: 110,
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
