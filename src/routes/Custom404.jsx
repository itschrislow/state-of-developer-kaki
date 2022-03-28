import { NavLink } from "react-router-dom";
import { Paths } from "../lib/paths";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white font-mono">
      <h1 className="text-5xl text-gradient">404</h1>
      <h2>Page not found</h2>
      <br />
      <NavLink to={Paths.Introduction}>
        <h3 className="font-bold">
          {"> "}
          <span className="hover:underline">RETURN HOME</span>
          {" <"}
        </h3>
      </NavLink>
    </div>
  );
}
