import { useEffect, useState } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";

import Tooltip from "./Tooltip";
import SocialSharing from "../SocialSharing";

import theme from "../../lib/nivo";
import { getPercentage } from "../../lib/helpers";
import { BREAKPOINTS, TOTAL_RESPONSES } from "../../lib/constants";

import { useWindowSize } from "../../hooks/useWindowSize";

import malaysia from "../../data/geojson/malaysia";
import locationJson from "../../data/charts/location.json";
const { count, locationData } = locationJson;

export default function LocationChoropleth() {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width < BREAKPOINTS.LG) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  return (
    <div id="location" className="chart">
      <div className="social-share-header">
        <h2 className="title">Location</h2>
        <SocialSharing
          path="/findings#location"
          imageLink={`/static/charts/location.png`}
          ga4Label="Location"
        />
      </div>
      <p>
        Trend: Close to 80% of developers reside within the borders of Selangor
      </p>
      <div className="overflow-x-auto">
        <div className="mt-4 h-96 min-w-[880px] text-black">
          <ResponsiveChoropleth
            data={locationData}
            features={malaysia.features}
            projectionTranslation={[0, 1]}
            projectionRotation={[isMobile ? -98 : -96, 0, 0]}
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
            valueFormat={(value) => {
              if (value !== 5) return `${Number(value).toFixed(1)}%`;
              else return `${value * 20}%`;
            }}
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
      <p className="mt-2 chart-footer">
        {count} responses ({getPercentage(count, TOTAL_RESPONSES, 1)}% of total
        responses)
      </p>
    </div>
  );
}
