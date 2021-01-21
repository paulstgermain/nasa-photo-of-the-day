import React from 'react';
import "../../App.css";
import styled from 'styled-components';

export default function Navbar() {
    return (
        <>
        <Nav>
            <img src="https://api.nasa.gov/assets/footer/img/favicon-192.png" alt="NASA logo"></img> <p>Image of the Day</p>
        </Nav>
        </>
    )
}

const Nav = styled.nav`

  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;


img {
  height: 8rem;
}

p {
  font-size: 2rem;
}
`