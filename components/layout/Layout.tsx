import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from '../navigation/Navigation';

const StyledLayout = styled.div`
    color:yellow;
`
const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height:100%;
        padding:0;
        margin:0;
        font-family: sans-serif;
    }
`

export default function Layout({ children }) {
    return <>
        <GlobalStyle />
        <StyledLayout>
            <Navigation />
            {children}
        </StyledLayout>
    </>
}