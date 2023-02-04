import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "../Styles/NewAlbum.css"

//This Is Adding New Album And Dummy API Call For POST

function NewAlbum(props) {
  const { albums, handleChangeAlbum } = props;

  
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  function saveUser(e) {
    e.preventDefault();
    let data = { userId, title };
    axios.post("https://jsonplaceholder.typicode.com/albums", data)
    .then((res) => {
      albums.push(res.data);
      handleChangeAlbum(albums);
      alert("Album Added Successfully");
      console.log(albums);
    });
  }

  return (
    <div className="new-album" >
      <h1 className="album-heading" >Add Album To Your List</h1>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
          alignItems: "center",
                  justifyContent: "center",
                 
        }}
      >
        <TextField
          label="Title"
          margin="normal"
          color="secondary"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="User Id"
          margin="normal"
          color="secondary"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <Button variant="contained" color="secondary" onClick={saveUser}>
          Add To Album
        </Button>
      </Stack>
    </div>
  );
}

export default NewAlbum;
