import React from "react";
import styled from "styled-components";

const Foot = styled.section`
color: grey;
font-weight: 600;
margin-bottom: 40px;
`;

export default function Footer() {
    return (
        <Foot>
            **Tenat connections are not allowed in free tier, however you can still explore the website features.
        </Foot>
    );
}