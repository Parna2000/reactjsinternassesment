import React from "react";
import styled from "styled-components";
import { useSpring, animated, config, easings } from '@react-spring/web'
import { } from "./styles.css";

const Cirle2 = styled.section`
height: 184px;
width: 184px;
background-color: white;
border-radius: 50%;
position: relative;
top: 50px;
left: 50px;
display: flex;
justify-content: center;
align-items: center;
border: 8px solid white;
box-shadow: 10px 10px 10px rgb(207, 203, 203) inset;
`;

export default function Ring() {
    const arr = [];
    var x = -25, y = -25;
    for (x = -25; x <= 25; x++) {
        var item = { boxShadow: x + 'px ' + y + 'px 25px rgb(157, 95, 204)' };
        arr.push(item);
    }
    for (y = -25; y <= 25; y++) {
        var item = { boxShadow: x + 'px ' + y + 'px 25px rgb(157, 95, 204)' };
        arr.push(item);
    }
    for (x = 25; x >= -25; x--) {
        var item = { boxShadow: x + 'px ' + y + 'px 25px rgb(157, 95, 204)' };
        arr.push(item);
    }
    for (y = 25; y >= -25; y--) {
        var item = { boxShadow: x + 'px ' + y + 'px 25px rgb(157, 95, 204)' };
        arr.push(item);
    }
    const props = useSpring({
        from: arr[0],
        to: arr,
        config: { duration: 0.02 },
        loop: { reverse: 'true' },
    });
    return (
        <div className="circle1">
            <animated.div className="circle2" style={props}>
                <div className="circle3">
                    <h1 style={{ fontSize: "25px", fontWeight: 800, }}>
                        Welcome!!
                    </h1>
                </div>
            </animated.div>
        </div>
    );
}