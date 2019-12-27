import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';

export default async function Home() {
    return <Layout>
        <Hero text="This should be really inspiring so people will buy some stuff" />
    </Layout>
}
