import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
    background-color:red;
    color:yellow;
`


export default function Layout({ children }) {
    return <StyledLayout>{children}</StyledLayout>
}