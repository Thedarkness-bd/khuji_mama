import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import SettingsIcon from "@mui/icons-material/Settings";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const GettingData = ({ searchTerm }) => {
  console.log(searchTerm);

  const { isLoading, error, data } = useQuery({
    queryKey: ["searchData"],
    queryFn: () =>
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${_APIKEY_}&cx=${_SEARCH_ENGINE_ID}&q=${searchTerm}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <nav className="sub-nav">
        <Link to="/" className="logo">
          Khuji mama
        </Link>

        <TextField
          className="w-[650px]"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
                <IconButton>
                  <GraphicEqIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <BlurOnRoundedIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default GettingData;
