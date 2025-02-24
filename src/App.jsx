import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MainLayouts from "./layuots/MainLayuots/MainLayouts";
import Actual from "./components/Actual/Actual";
import Authors from "./components/Authors/Authors";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="actual" element={<Actual />} />
          <Route path="authors" element={<Authors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
