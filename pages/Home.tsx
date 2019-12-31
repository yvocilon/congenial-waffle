import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import Products from '../components/products/Products';
import { getLatestProducts } from '../api';

export default async function Home() {

    const products = await getLatestProducts();

    return <Layout>
        <Hero text="This should be really inspiring so people will buy some stuff" />
        <Products products={products} />
    </Layout>
}
