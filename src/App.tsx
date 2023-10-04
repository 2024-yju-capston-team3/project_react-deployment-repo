import React from "react";
import Map from "./components/Map/Map";
import Header from "./components/Header/Header";
import Album from "./components/Album/Album";
// import { Routes, Route, Outlet } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Map />
      <Album />
    </div>
  );
}

export default App;
