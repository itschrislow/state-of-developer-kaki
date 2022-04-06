import { ResponsivePie } from "@nivo/pie";

import SocialSharing from "../SocialSharing";

import theme from "../../lib/nivo";
import { getPercentage } from "../../lib/helpers";
import { TOTAL_RESPONSES } from "../../lib/constants";

import educationJson from "../../data/charts/education.json";
const { higherEducation, bootcamp, higherEducationCount, bootcampCount } =
  educationJson;

export default function EducationPies() {
  return (
    <div id="education" className="chart">
      <div className="social-share-header">
        <h2 className="title">Education</h2>
        <SocialSharing
          path="/findings#education"
          imageLink={`/static/charts/education.png`}
          ga4Label="Education"
        />
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
                colors={["#e5366f", "#f4a14f", "#f36b55"]}
                theme={theme}
                arcLabelsSkipAngle={12}
                valueFormat={(value) => `${value}%`}
              />
            </div>
          </div>
          <p className="mt-4 chart-footer">
            {higherEducationCount} responses (
            {getPercentage(higherEducationCount, TOTAL_RESPONSES, 1)}% of total
            responses)
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-gray-900">
        <p className="mb-4 w-full sm:w-1/2 text-gray-100">
          Trend: Of the developers who did not have higher education or studied
          an unrelated field, {"<"}50% joined a bootcamp
        </p>
        <div className="w-full sm:w-1/2 font-medium">
          <div className="h-80">
            <ResponsivePie
              data={bootcamp}
              value="percentage"
              margin={{ top: 30, right: 50, bottom: 20, left: 50 }}
              innerRadius={0.4}
              padAngle={0.5}
              cornerRadius={3}
              colors={["#e5366f", "#f4a14f"]}
              theme={theme}
              valueFormat={(value) => `${value}%`}
            />
          </div>
          <p className="mt-4 chart-footer">
            {bootcampCount} responses (
            {getPercentage(bootcampCount, TOTAL_RESPONSES, 1)}% of total
            responses)
          </p>
        </div>
      </div>
    </div>
  );
}
