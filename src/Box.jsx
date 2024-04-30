import React from "react";
import styled from "styled-components";
import Header from "./Header.jsx";
import Hr from "./Hr";
import Ring from "./Ring";
import Buttons from "./Buttons";
import Footer from "./Footer";

const Box = styled.section`
  width: 80vw; 
  max-width: 600px;
  background-color: rgb(240, 237, 237);
  border-radius : 10px;
  box-shadow: 10px 10px 10px rgb(207, 203, 203), -10px -10px white;
  padding : 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function CenterUI() {
    return (
        <Box>
            <Header />
            <Hr />
            <Ring />
            <Buttons />
            <Footer />
        </Box>
    );
}