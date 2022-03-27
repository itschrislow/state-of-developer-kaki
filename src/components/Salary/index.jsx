import { useState } from "react";

import SalaryByEducation from "./byEducation";
import SalaryByGender from "./byGender";
import SalaryByYoe from "./byYOE";
import SalaryBar from "./SalaryBar";

const CompareTo = {
  Percentage: "Percentage",
  Yoe: "Years of Experience",
  Education: "Education",
  Gender: "Gender",
};

export default function SalaryBars() {
  const [toggleCompare, setToggleCompare] = useState(CompareTo.Percentage);

  return (
    <div id="salary" className="chart">
      <h2 className="title">Salary</h2>
      <div className="mb-4 h-full text-gray-900">
        {toggleCompare === CompareTo.Percentage && <SalaryBar />}
        {toggleCompare === CompareTo.Yoe && <SalaryByYoe />}
        {toggleCompare === CompareTo.Education && <SalaryByEducation />}
        {toggleCompare === CompareTo.Gender && <SalaryByGender />}
      </div>
      <div className="grid grid-rows-2 sm:grid-rows-1 grid-cols-2 sm:grid-cols-4 border border-dashed divide-x divide-y divide-dashed text-sm sm:text-base">
        {Object.keys(CompareTo).map((key) => {
          return (
            <button
              key={key}
              onClick={() => setToggleCompare(CompareTo[key])}
              className={`
                button
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
