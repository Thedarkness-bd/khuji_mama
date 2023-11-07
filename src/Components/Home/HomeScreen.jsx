import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const HomeScreen = ({ setSearch }) => {
  return (
    <div>
      <Navbar />
      <Home setSearch={setSearch} />
    </div>
  );
};

export default HomeScreen;
