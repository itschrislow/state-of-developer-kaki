import { ResponsiveBar } from "@nivo/bar";

import { salaryData } from "../../data/salary";
import theme from "../../lib/nivo";
import Tooltip from "../Tooltip";

export default function SalaryByYoe() {
  return (
    <div className="h-[450px]">
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
        margin={{ top: 20, right: 10, bottom: 0, left: 90 }}
        padding={0.3}
        colors={{ scheme: "red_blue" }}
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
  );
}
