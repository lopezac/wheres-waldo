import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./routes/Game";
import Home from "./routes/Home";
import Leaderboards from "./routes/Leaderboards";
import Layout from "./components/Layout";

function RouteSwitch() {
  return (
    <BrowserRouter basename="/wheres-waldo">
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
