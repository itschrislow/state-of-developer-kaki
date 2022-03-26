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
    <div id="salary" className="py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="title">Salary</h2>
      </div>
      <div className="my-4 h-full text-gray-900">
        {toggleCompare === CompareTo.Percentage && <SalaryBar />}
        {toggleCompare === CompareTo.Yoe && <SalaryByYoe />}
        {toggleCompare === CompareTo.Education && <SalaryByEducation />}
        {toggleCompare === CompareTo.Gender && <SalaryByGender />}
      </div>
      <div className="flex justify-center">
        <div className="tabs">
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
                {toggleCompare !== CompareTo.Percentage ? "by" : ""}{" "}
                {CompareTo[key]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
