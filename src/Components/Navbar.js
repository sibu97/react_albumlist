import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';


// //This is Basic Styles Of NavBar 
function Navbar() {
    const style = {
        textDecoration: 'none',
        color: 'white',
        fontweight: 'bold',
        fontSize:'12px'
    }
  return (
    <AppBar position="static" sx={{ background: "#BDB5D5" }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PhotoLibraryIcon />
        </IconButton>
        <Typography varient="h6" component="div" sx={{ flexGrow: 1 }}>
          Albums
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button color="inherit">
            <NavLink to="/" style={style}>Home</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/album" style={style}>Albums</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/newalbum" style={style}>+ Add Album</NavLink>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
