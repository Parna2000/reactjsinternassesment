import React from "react";
import { styled } from "styled-components";

const Tagline = styled.h1`
font-size : 30px;
font-weight : 800;
`;

export default function Header() {
    return (
        <Tagline>
            Ah!! I never saw someone from your company.
        </Tagline>
    );
}