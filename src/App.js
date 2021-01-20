import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import { BASE_URL, API_KEY } from './constants/constants.js';
import "./App.css";

function App() {
  const [podData, setPodData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setPodData(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  

  return (
    <div className="App">
      <Navbar />
      <Display podData={podData} />
    </div>
  );
}

export default App;
