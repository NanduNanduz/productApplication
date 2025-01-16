
import React from "react";
import Home from "./components/Home";
import Productform from "./components/Productform";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProducts" element={<Productform />} />
      </Routes>
    </div>
  );
};

export default App;
