import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
    height: 80vh;
    background-color:magenta;
    margin-top: -100px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const InspiringText = styled.h2`
    font-size: 28px;
    color:white;
`
export default function Hero({ text }) {
    return <StyledHero>
        <InspiringText>{text}</InspiringText>
    </StyledHero>
}