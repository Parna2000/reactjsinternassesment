import React from "react";
import styled from "styled-components";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Button1 = styled.section`
box-shadow: 10px 10px 10px rgb(207, 203, 203) inset,-10px -10px white inset;
font-size: 20px;
font-weight: 800;
text-align: center;
padding: 14px;
border-radius: 10px;
`;
const Button2 = styled.section`
box-shadow: 10px 10px 10px rgb(207, 203, 203), -10px -10px white;
font-size: 20px;
font-weight: 800;
display:flex;
padding: 14px;
border-radius: 10px;
color: grey;
`;

export default function Buttons() {
    return (
        <div className="button">
            <Button1>Browse test data</Button1>
            <Button2><AddCircleIcon style={{
                height: "30px",
                width: "30px",
                margin: "0px 10px 0 0",
                color: "black",
            }} />
                Connect domains
            </Button2>
        </div>
    );
}