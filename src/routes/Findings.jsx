import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import GenderWaffle from "../components/charts/GenderWaffle";
import YOEBar from "../components/charts/YOEBar";
import EducationPies from "../components/charts/EducationPies";
import SalaryBars from "../components/charts/Salary";
import SatisfactionScatterPlot from "../components/charts/SatisfactionScatterPlot";
import LocationChoropleth from "../components/charts/LocationChoropleth";

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
