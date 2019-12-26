import React from 'react';
import { getPosts } from '../api';

export default async function Posts() {
    const posts = await getPosts();
    return <ol>{posts.map(post => <li>{post}</li>)}</ol>
}