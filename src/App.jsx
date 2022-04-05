import { Route, Routes } from "react-router-dom";

import { PATHS } from "./lib/constants";

import Layout from "./components/Layout";
import Introduction from "./components/Introduction";

import Findings from "./routes/Findings";
import About from "./routes/About";
import Custom404 from "./routes/Custom404";
import Future from "./routes/Future.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Introduction />} />
        <Route path={PATHS.Findings} element={<Findings />} />
        <Route path={PATHS.About} element={<About />} />
        <Route path={PATHS.Future} element={<Future />} />
      </Route>
      <Route path="*" element={<Custom404 />} />
    </Routes>
  );
}
