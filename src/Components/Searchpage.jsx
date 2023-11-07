import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GettingData from "./API/GettingData";
function Searchpage({ searchTerm }) {
  const history = useNavigate();

  useEffect(() => {
    if (searchTerm === "") {
      history("/");
    }
  }, [searchTerm]);
  return (
    <div>
      <GettingData searchTerm={searchTerm} />
    </div>
  );
}

export default Searchpage;
