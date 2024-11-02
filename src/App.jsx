import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;
