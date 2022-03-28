import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { Paths } from "../lib/paths";
import cross from "../icons/cross.svg";
import hamburger from "../icons/hamburger.svg";
import chevronDoubleLeft from "../icons/chevronDoubleLeft.svg";
import chevronDoubleRight from "../icons/chevronDoubleRight.svg";
import SocialMedia from "./SocialMedia";

const routes = ["/", "/findings", "/about"];
const routeNames = ["00 Introduction", "01 Findings", "02 About"];

const tableOfContents = [
  "Location",
  "Gender",
  "Experience",
  "Education",
  "Salary",
  "Satisfaction",
];

export default function Layout() {
  const { pathname } = useLocation();

  // MOBILE NAV
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FOOTER
  const [prevPageIndex, setPrevPageIndex] = useState(undefined);
  const [nextPageIndex, setNextPageIndex] = useState(undefined);
  const [currPathIndex, setCurrPathIndex] = useState(undefined);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const getCurrPathIndex = (currPath) => routes.indexOf(currPath);

  const getPreviousPage = (currPath) => {
    const currIndex = routes.indexOf(currPath);
    if (currIndex === 0) return -1;
    else return currIndex - 1;
  };

  const getNextPage = (currPath) => {
    const currIndex = routes.indexOf(currPath);
    if (currIndex === routes.length - 1) return -1;
    else return currIndex + 1;
  };

  useEffect(() => {
    setPrevPageIndex(getPreviousPage(pathname));
    setNextPageIndex(getNextPage(pathname));
    setCurrPathIndex(getCurrPathIndex(pathname));
  }, [pathname]);

  return (
    <div className="max-h-screen bg-black text-gray-100 font-mono">
      {/* HEADER */}
      <div className="hidden lg:block z-50 absolute top-0 w-full p-4 bg-black border-b border-dashed">
        <h1 className="text-2xl text-center font-bold">
          The State of DeveloperKaki 2021
        </h1>
      </div>
      {/* MOBILE HEADER */}
      <div className="block lg:hidden">
        <div className="z-50 absolute top-0 w-full flex items-center bg-black border-b border-dashed">
          <button
            className="p-3 border-r border-dashed"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <img src={cross} alt="Close menu" className="w-8 h-8" />
            ) : (
              <img src={hamburger} alt="Menu" className="w-8 h-8" />
            )}
          </button>
          <h1 className="w-full text-sm text-center font-bold">
            The State of DeveloperKaki 2021
          </h1>
        </div>
        {isMobileMenuOpen && (
          <MobileNav
            tableOfContents={tableOfContents}
            closeMobileMenu={closeMobileMenu}
          />
        )}
      </div>
      {/* CONTENT */}
      <div className="h-screen py-[57px] lg:pb-0 lg:pt-[65px] flex">
        <div className="hidden lg:block lg:w-1/5 px-10 py-2 text-sm">
          <div className="h-full flex flex-col justify-between">
            <Nav tableOfContents={tableOfContents} />
            <SocialMedia className="py-4" />
          </div>
        </div>
        <div className="w-full lg:w-4/5 overflow-y-scroll px-5 md:px-8 lg:pr-10">
          <Outlet />
        </div>
      </div>
      {/* FOOTER */}
      <div className="flex lg:hidden absolute bottom-0 h-[57px] w-full divide-x divide-dashed border-t border-dashed">
        {prevPageIndex !== undefined && prevPageIndex !== -1 && (
          <Link to={routes[prevPageIndex]}>
            <div className="w-14 p-3 flex items-center justify-center">
              <img
                src={chevronDoubleLeft}
                className="h-8 w-8"
                alt="Previous page"
              />
            </div>
          </Link>
        )}
        <p className="w-full flex items-center justify-center text-lg text-gradient font-semibold">
          {routeNames[currPathIndex]}
        </p>
        {nextPageIndex !== undefined && nextPageIndex !== -1 && (
          <Link to={routes[nextPageIndex]}>
            <div className="w-14 p-3 flex items-center justify-center">
              <img
                src={chevronDoubleRight}
                className="h-8 w-8"
                alt="Next page"
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

const Nav = ({ tableOfContents }) => (
  <div>
    <NavLink to={Paths.Introduction}>
      {({ isActive }) => (
        <p className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}>
          00 Introduction
        </p>
      )}
    </NavLink>
    <NavLink to={Paths.Findings}>
      {({ isActive }) => (
        <p className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}>
          01 Findings
        </p>
      )}
    </NavLink>
    {tableOfContents.map((item, index) => (
      <NavLink
        key={index}
        to={Paths.Findings}
        state={{
          id: item.toLowerCase(),
        }}
      >
        <p className="block pl-7 py-2 font-semibold">
          {">"} {item}
        </p>
      </NavLink>
    ))}
    <NavLink to={Paths.About}>
      {({ isActive }) => (
        <p className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}>
          02 About
        </p>
      )}
    </NavLink>
  </div>
);

const MobileNav = ({ tableOfContents, closeMobileMenu }) => (
  <div className="z-20 absolute inset-y-[57px] w-full px-6 py-2 flex flex-col justify-between bg-black border-b border-dashed">
    <div>
      <NavLink to={Paths.Introduction} onClick={closeMobileMenu}>
        {({ isActive }) => (
          <p
            className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}
          >
            00 Introduction
          </p>
        )}
      </NavLink>
      <NavLink to={Paths.Findings} onClick={closeMobileMenu}>
        {({ isActive }) => (
          <p
            className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}
          >
            01 Findings
          </p>
        )}
      </NavLink>
      {tableOfContents.map((item, index) => (
        <NavLink
          key={index}
          to={Paths.Findings}
          state={{
            id: item.toLowerCase(),
          }}
          onClick={closeMobileMenu}
        >
          <p className="block pl-7 py-2 font-semibold">
            {">"} {item}
          </p>
        </NavLink>
      ))}
      <NavLink to={Paths.About} onClick={closeMobileMenu}>
        {({ isActive }) => (
          <p
            className={`py-2 font-semibold ${isActive ? "text-gradient" : ""}`}
          >
            02 About
          </p>
        )}
      </NavLink>
    </div>
    <SocialMedia className="py-2" />
  </div>
);
