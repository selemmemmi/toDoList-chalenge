import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./style.css";

const Addlist = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <div className="input-box">
      <TextField
        id="outlined-basic"
        label="Add"
        variant="outlined"
        placeholder="Add To Do"
        onChange={handleChange}
        value={item}
      />
      <Button
        variant="contained"
        onClick={() => {
          addItem(item);
          setItem("");
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Addlist;
