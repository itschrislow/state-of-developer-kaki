import { ResponsivePie } from "@nivo/pie";

import { higherEducation, bootcamp } from "../data/education";
import theme from "../lib/nivo";
import SocialSharing from "./SocialSharing";

export default function EducationPies() {
  return (
    <div id="education" className="chart">
      <div className="social-share-header">
        <h2 className="title">Education</h2>
        <SocialSharing path="/findings/%23education" />
      </div>
      <div className="mb-6 sm:mb-0 flex flex-col sm:flex-row-reverse items-center text-gray-900">
        <p className="mb-4 w-full sm:w-1/2 text-gray-100">
          Trend: {">"}80% of developers have a bachelor's degree or higher in a
          related field
        </p>
        <div className="w-full sm:w-1/2 font-medium">
          <div className="overflow-x-auto">
            <div className="min-w-[500px] h-80 flex items-center justify-center">
              <ResponsivePie
                data={higherEducation}
                value="percentage"
                margin={{ top: 35, right: 50, bottom: 35, left: 50 }}
                innerRadius={0.4}
                padAngle={0.5}
                cornerRadius={3}
                colors={["#e5366f", "#f4a14f", "#f36b55", "#7d1694"]}
                theme={theme}
                arcLabelsSkipAngle={15}
                valueFormat={(value) => `${value}%`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-gray-900">
        <p className="mb-4 w-full sm:w-1/2 text-gray-100">
          Trend: Only 37% of developers who did not have higher education or
          studied an unrelated field joined a bootcamp
        </p>
        <div className="w-full sm:w-1/2 h-80">
          <ResponsivePie
            data={bootcamp}
            margin={{ top: 30, right: 50, bottom: 20, left: 50 }}
            innerRadius={0.4}
            padAngle={0.5}
            cornerRadius={3}
            colors={["#e5366f", "#f4a14f"]}
            theme={theme}
            valueFormat={(value) => `${value}%`}
          />
        </div>
      </div>
    </div>
  );
}
