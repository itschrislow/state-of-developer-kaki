import { ResponsivePie } from "@nivo/pie";
import { higherEducation, bootcamp } from "../data/education";
import theme from "../lib/nivo";

export default function EducationPies() {
  return (
    <div className="py-10">
      <h2 className="mb-4 title">Education</h2>
      <div className="flex flex-col sm:flex-row-reverse items-center text-gray-900">
        <p className="mb-4 w-full sm:w-1/2 text-gray-100">
          Trend: {">"}80% of developers have a bachelor's degree or higher in a
          related field
        </p>
        <div className="w-full sm:w-1/2 h-80 font-medium">
          <ResponsivePie
            data={higherEducation}
            value="percentage"
            margin={{ top: 30, right: 80, bottom: 20, left: 80 }}
            innerRadius={0.4}
            padAngle={0.5}
            cornerRadius={3}
            colors={{ scheme: "red_yellow_blue" }}
            theme={theme}
            arcLabelsSkipAngle={15}
            valueFormat={(value) => `${value}%`}
          />
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
            margin={{ top: 30, right: 80, bottom: 20, left: 80 }}
            innerRadius={0.4}
            padAngle={0.5}
            cornerRadius={3}
            colors={{ scheme: "red_yellow_blue" }}
            theme={theme}
            valueFormat={(value) => `${value}%`}
          />
        </div>
      </div>
    </div>
  );
}
