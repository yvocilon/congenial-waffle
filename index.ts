import createServer from './server';

import Home from './pages/Home';
import About from './pages/About';
import ThrowError from './pages/ThrowError';
import Posts from './pages/Posts';

import NotFound from './pages/NotFound';
import InternalServerError from './pages/InternalServerError';

const server = createServer();

server.notFound(NotFound);
server.internalServerError(InternalServerError);

server.get<string>('/', Home);
server.get<string>('/about', About);
server.get<string>('/posts', Posts);
server.get<string>('/throw-error', ThrowError);

server.listen(8080, function onListening() {
    console.log("Listening on 8080");
});
