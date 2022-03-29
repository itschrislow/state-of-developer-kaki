import { ResponsiveChoropleth } from "@nivo/geo";

import Tooltip from "./Tooltip";
import theme from "../lib/nivo";
import malaysia from "../data/malaysia";
import { locationData } from "../data/location";

export default function LocationChoropleth() {
  return (
    <div id="location" className="chart">
      <h2 className="title">Location</h2>
      <p>
        Trend: Close to 80% of developers are based in Selangor, Kuala Lumpur
        and Putrajaya
      </p>
      <div className="overflow-x-auto">
        <div className="mt-4 h-96 min-w-[880px] text-black">
          <ResponsiveChoropleth
            data={locationData}
            features={malaysia.features}
            projectionTranslation={[0, 1]}
            projectionRotation={[-98, 0, 0]}
            projectionScale={2750}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors={[
              "#FCC1AA",
              "#FBA48C",
              "#FA967D",
              "#F9886F",
              "#F76C51",
              "#F76C51",
              "#F56654",
              "#F15A5B",
              "#ED4E62",
              "#E94268",
            ]}
            domain={[0, 5]}
            label="properties.name"
            valueFormat={(value) => `${value * 20}%`}
            borderWidth={0.5}
            borderColor="#152538"
            theme={theme}
            legends={[
              {
                anchor: "bottom-left",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                symbolSize: 18,
              },
            ]}
            tooltip={({ feature: { color, id, value } }) => (
              <Tooltip color={color} label={id} value={`${value}%`} />
            )}
          />
        </div>
      </div>
    </div>
  );
}
