import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateAlbum(props) {
  const { albums, handleChangeAlbum } = props;
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");

  const updateUser = (e) => {
    e.preventDefault();

    axios
      .put(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        userId: userId,
        id: id,
        title: title,
      })
      .then((res) => {
        let updatedAlbums = albums.filter((album) => {
          return album.id !== id;
        });
        updatedAlbums.push(res.data);
        console.log(updatedAlbums);
        handleChangeAlbum(updatedAlbums);
        alert("Album Upadated Successfully");
      });
  };

  /// we are using the code in this file to update the albums

  return (
    <div>
      <h1 className="album-heading">Update Album</h1>
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
        <Button variant="contained" color="secondary" onClick={updateUser}>
          Submit
        </Button>
      </Stack>
    </div>
  );
}

export default UpdateAlbum;
