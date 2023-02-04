import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";


function Album(props) {
    const { albums, handleChangeAlbum } = props;

    // For Delete API Call
  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => {
        let updatedAlbums = albums.filter((album) => album.id !== id);
        alert("Album Deleted");
        handleChangeAlbum(updatedAlbums);
      });
    };
    
    // For Upadte API Call

  const mappedAlbum = albums
  .sort((a, b) => a.id - b.id)
  .map((album, index) => {
    return (
      <TableRow key={album.id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{album.title}</TableCell>
        <TableCell sx={{ justifyContent: "" }}>
          <Button
          className="btnUpdate"
            variant="contained"
            color="success"
            href={`/album/${album.id}`}
            sx={{m:1}}
          >
            Update
          </Button>
          <Button
            onClick={() => deleteUser(album.id)}
            variant="contained"
            color="error"
            sx={{m:1}}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <TableContainer componenet={Paper} sx={{ background: "#E6E6FA" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Album Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{mappedAlbum.length > 0 ? mappedAlbum : ""}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Album