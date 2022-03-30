import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import GenderWaffle from "../components/GenderWaffle";
import YOEBar from "../components/YOEBar";
import EducationPies from "../components/EducationPies";
import SalaryBars from "../components/Salary";
import SatisfactionScatterPlot from "../components/SatisfactionScatterPlot";
import LocationChoropleth from "../components/LocationChoropleth";

export default function Findings() {
  const { state } = useLocation();

  useEffect(() => {
    const id = state?.id;
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [state]);

  return (
    <div className="top">
      <LocationChoropleth />
      <GenderWaffle />
      <YOEBar />
      <EducationPies />
      <SalaryBars />
      <SatisfactionScatterPlot />
    </div>
  );
}
