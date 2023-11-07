import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function Home({ setSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9]*./.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)) {
      setSearch(input);
    }
  };

  return (
    <div>
      <h1 className="absolute lg:text-[60px] md:text-[50px] text-[35px] left-[10%] lg:left-[33%] heading-home">
        Khuji {`< Mama >`}
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          className="absolute top-[180px] w-[300px] left-[10px] md:top-[200px] md:left-[80px] lg:top-[300px] lg:left-[450px] border-zinc-400 border-2 p-3 rounded-md lg:w-[500px]"
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
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Home;
