import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import { BASE_URL, API_KEY } from './constants/constants.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
