import { ResponsiveBar } from "@nivo/bar";

import { salaryData } from "../../data/salary";
import theme from "../../lib/nivo";
import Tooltip from "../Tooltip";

export default function SalaryByGender() {
  return (
    <div className="h-[450px] font-medium">
      <ResponsiveBar
        data={salaryData.slice().reverse()}
        layout="horizontal"
        keys={["Male", "Female", "Other"]}
        indexBy="salary"
        margin={{ top: 20, right: 10, bottom: 0, left: 90 }}
        padding={0.3}
        colors={{ scheme: "red_blue" }}
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
  );
}
