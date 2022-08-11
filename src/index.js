import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from "./routes/Game";
import Home from "./routes/Home";
import Leaderboards from "./routes/Leaderboards";
import Layout from "./App/Layout/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
