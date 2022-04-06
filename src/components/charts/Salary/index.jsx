import { useState } from "react";

import SalaryByYoe from "./byYOE";
import SalaryBar from "./SalaryBar";
import SalaryByGender from "./byGender";
import SocialSharing from "../../SocialSharing";
import SalaryByEducation from "./byEducation";

import { getPercentage } from "../../../lib/helpers";
import { TOTAL_RESPONSES } from "../../../lib/constants";

import education from "../../../data/charts/education.json";
import salaryJson from "../../../data/charts/salary.json";
const { count } = salaryJson;
const { higherEducationCount } = education;

const CompareTo = {
  Percentage: "Percentage",
  Yoe: "Years of Experience",
  Education: "Education",
  Gender: "Gender",
};

export default function SalaryBars() {
  const [toggleCompare, setToggleCompare] = useState(CompareTo.Percentage);

  const getImagePath = () => {
    if (toggleCompare === CompareTo.Percentage) return "percentage";
    if (toggleCompare === CompareTo.Yoe) return "by-YOE";
    if (toggleCompare === CompareTo.Education) return "by-education";
    if (toggleCompare === CompareTo.Gender) return "by-gender";
  };

  return (
    <div id="salary" className="chart">
      <div className="social-share-header">
        <h2 className="title">Salary</h2>
        <SocialSharing
          path="/findings#salary"
          imageLink={`/static/charts/salary-${getImagePath()}.png`}
          ga4Label={`Salary (${toggleCompare})`}
        />
      </div>
      <div className="mb-4 h-full text-gray-900">
        {toggleCompare === CompareTo.Percentage && <SalaryBar />}
        {toggleCompare === CompareTo.Yoe && <SalaryByYoe />}
        {toggleCompare === CompareTo.Education && <SalaryByEducation />}
        {toggleCompare === CompareTo.Gender && <SalaryByGender />}
      </div>
      <p className="my-4 chart-footer">
        {toggleCompare === CompareTo.Education ? higherEducationCount : count}{" "}
        responses (
        {getPercentage(
          toggleCompare === CompareTo.Education ? higherEducationCount : count,
          TOTAL_RESPONSES,
          1
        )}
        % of total responses)
      </p>
      <div className="grid grid-rows-2 sm:grid-rows-1 grid-cols-2 sm:grid-cols-4 text-sm">
        {Object.keys(CompareTo).map((key) => {
          return (
            <button
              key={key}
              onClick={() => setToggleCompare(CompareTo[key])}
              className={`
                button border border-dashed
                ${toggleCompare === CompareTo[key] && "active-button"}
              `}
            >
              {CompareTo[key] !== CompareTo.Percentage ? "by" : ""}{" "}
              {CompareTo[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
