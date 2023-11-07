import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Searchpage from "./Components/Searchpage";
import HomeScreen from "./Components/Home/HomeScreen";
import { useNavigate } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const setSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    navigate("/search");
  };

  return (
    <Routes>
      <Route path="/" element={<HomeScreen setSearch={setSearch} />}></Route>
      <Route
        path="/search"
        element={<Searchpage searchTerm={searchTerm} />}
      ></Route>
    </Routes>
  );
}

export default App;
