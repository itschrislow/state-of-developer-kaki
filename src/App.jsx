import { Route, Routes } from "react-router-dom";

import { Paths } from "./lib/paths.js";

import Layout from "./components/Layout";
import Introduction from "./components/Introduction";

import Findings from "./routes/Findings";
import About from "./routes/About";
import Custom404 from "./routes/Custom404";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Introduction />} />
        <Route path={Paths.Findings} element={<Findings />} />
        <Route path={Paths.About} element={<About />} />
      </Route>
      <Route path="*" element={<Custom404 />} />
    </Routes>
  );
}
