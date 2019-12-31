import React from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
    height:300px;
    border:1px solid lightgray;
    width:250px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
`;

const Name = styled.span``

const Image = styled.img``

interface Props {
    name: string
    src: string
}

export default function Product({ name, src }: Props) {
    return <StyledProduct>
        <Image src={src} />
        <Name>{name}</Name>
    </StyledProduct>
}