import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Searchpage({ searchTerm }) {
  const history = useNavigate();

  useEffect(() => {
    if (searchTerm === "") {
      history("/");
    }
  }, [searchTerm]);
  return <div>Welcome : {searchTerm}</div>;
}

export default Searchpage;
