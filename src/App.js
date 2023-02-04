import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Album from "./Components/Album";
import NewAlbum from "./Components/NewAlbum";
import UpdateAlbum from "./Components/UpdateAlbum";
import { useEffect, useState } from "react"
import axios from 'axios'


function App() {
  const [albums, setAlbums] = useState([])

  const handleChangeAlbum = (updatedAlbums) => {
    setAlbums(updatedAlbums);
  };

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/albums').then((res)=> {
      setAlbums(res.data)
    })
  },[])
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/album" element={<Album albums={albums} handleChangeAlbum={handleChangeAlbum}/>}/>
        <Route exact path="/newalbum" element={<NewAlbum albums={albums} handleChangeAlbum={handleChangeAlbum}/>}/>
        <Route exact path="/album/:id" element={<UpdateAlbum albums={albums} handleChangeAlbum={handleChangeAlbum}/>}/>
      </Routes>
    </div>
  );
}

export default App;
