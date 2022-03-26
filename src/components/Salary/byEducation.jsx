import { ResponsiveBar } from "@nivo/bar";

import { salaryData } from "../../data/salary";
import theme from "../../lib/nivo";
import Tooltip from "../Tooltip";

export default function SalaryByEducation() {
  return (
    <div>
      <p className="trend">
        Trend: At least 75% of developer across all salary levels have higher
        education in a tech-related field
      </p>
      <div className="h-[450px] font-medium">
        <ResponsiveBar
          data={salaryData.slice().reverse()}
          layout="horizontal"
          keys={["Yes, related field", "Yes, unrelated field", "No", "Blank"]}
          indexBy="salary"
          margin={{ top: 20, right: 10, bottom: 0, left: 90 }}
          padding={0.3}
          colors={["#f9a03f", "#e5366f", "#7d1290", "#331886"]}
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
              itemsSpacing: 0,
              itemWidth: 175,
              itemHeight: 20,
              itemDirection: "left-to-right",
              symbolSize: 20,
            },
          ]}
        />
      </div>
    </div>
  );
}
