import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.div`
    max-width:1200px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

const Title = styled.h1``

const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    height:100%;
    align-items: center;

    a {
        padding: 0 25px;
        font-size: 20px;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
`

export default function Navigation() {
    return <StyledNavigation><Title>Shop</Title><Nav><a>Link one</a><a>Link two</a><a>Link three</a></Nav></StyledNavigation>
}