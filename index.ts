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

server.get<React.ReactElement>('/', Home);
server.get<React.ReactElement>('/about', About);
server.get<React.ReactElement>('/posts', Posts);
server.get<React.ReactElement>('/throw-error', ThrowError);

server.listen(8080, function onListening() {
    console.log("Listening on 8080");
});
