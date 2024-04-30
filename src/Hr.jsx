import React from "react";
import { styled } from "styled-components";

const Line = styled.section`
border: none;
height: 5px;
width: 80%;
background-color: black;
margin: 30px 0px;
`;

export default function Hr() {
    return (
        <Line />
    );
}