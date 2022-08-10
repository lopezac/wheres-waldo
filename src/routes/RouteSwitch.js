import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./Game";
import Home from "./Home";
import Leaderboards from "./Leaderboards";
import Layout from "../components/Layout";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game/:mapName" element={<Game />} />
          <Route path="leaderboards" element={<Leaderboards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
