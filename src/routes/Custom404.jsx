import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { PATHS } from "../lib/constants";
import { handlePageview } from "../lib/ga4";

export default function Custom404() {
  const { pathname } = useLocation();

  useEffect(() => {
    handlePageview("/404");
  }, [pathname]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white font-mono">
      <h1 className="text-5xl text-gradient">404</h1>
      <h2>Page not found</h2>
      <br />
      <NavLink to={PATHS.Introduction}>
        <h3 className="font-bold">
          {"> "}
          <span className="hover:underline">RETURN HOME</span>
          {" <"}
        </h3>
      </NavLink>
    </div>
  );
}
