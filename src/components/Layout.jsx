import { NavLink } from "react-router-dom";
import { Paths } from "../lib/paths";

export default function Layout({ children }) {
  const tableOfContents = [
    "Location",
    "Gender",
    "Experience",
    "Education",
    "Salary",
    "Satisfaction",
  ];

  return (
    <div className="max-h-screen bg-black text-gray-100 font-mono">
      {/* HEADER */}
      <div className="z-50 absolute top-0 w-full p-4 bg-black border-b border-dashed">
        <h1 className="text-2xl text-center font-bold">
          The State of DeveloperKaki 2021
        </h1>
      </div>
      <div className="h-screen pt-[65px] flex">
        <div className="w-1/5 px-10 py-2">
          <NavLink
            to={Paths.Introduction}
            className={({ isActive }) => (isActive ? "text-sky-500" : "")}
          >
            <p className="py-2 font-semibold">00 Introduction</p>
          </NavLink>
          <NavLink
            to={Paths.Findings}
            className={({ isActive }) => (isActive ? "text-sky-500" : "")}
          >
            <p className="py-2 font-semibold">01 Findings</p>
          </NavLink>
          {tableOfContents.map((item, index) => (
            <p key={index} className="pl-7 py-2 font-semibold">
              {">"} {item}
            </p>
          ))}
          <NavLink
            to={Paths.About}
            className={({ isActive }) => (isActive ? "text-sky-500" : "")}
          >
            <p className="py-2 font-semibold">02 About</p>
          </NavLink>
        </div>
        <div className="w-4/5 overflow-y-scroll">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
