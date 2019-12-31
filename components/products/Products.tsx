import React from 'react';
import styled from 'styled-components';

import Container from '../container/Container';

import { Products as ProductsType } from '../../api';
import Product from './Product';

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
`;

export default function Products({ products }: { products: ProductsType }) {
    return <Container>
        <h1>Latest products</h1>
        <ProductContainer>
            {products.map(product => <Product {...product} />)}
        </ProductContainer>
    </Container>
}