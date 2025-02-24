import { useState } from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
