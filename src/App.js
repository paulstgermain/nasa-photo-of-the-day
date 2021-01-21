import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Display from './components/Display/Display';
import { BASE_URL, API_KEY } from './constants/constants.js';
import "./App.css";
import styled from 'styled-components';

export default function App() {
  const [podData, setPodData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setPodData(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  

  return (
    <AppDiv className="App">
      <Navbar />
      <Display podData={podData} />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  background-color: #333333;
  color: #f6f6f6;
  width: 100%;
`
