import { ResponsiveWaffle } from "@nivo/waffle";

import theme from "../lib/nivo";
import { genderData, total } from "../data/gender";

export default function GenderWaffle() {
  return (
    <div className="py-10">
      <h2 className="title">Gender</h2>
      <p>Only 1 in 10 developers are female/other</p>
      <div className="mt-10 h-28 text-gray-900">
        <ResponsiveWaffle
          data={genderData}
          total={total}
          rows={1}
          columns={10}
          margin={{ top: 0, right: 0, bottom: 40, left: 0 }}
          colors={["#0ea5e9", "#bae6fd", "#fff"]}
          theme={theme}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateY: 40,
              itemWidth: 75,
              itemHeight: 20,
              symbolSize: 20,
            },
          ]}
        />
      </div>
    </div>
  );
}
