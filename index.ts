import createServer from './server';
import { getPosts } from './api';

const server = createServer();

server.notFound(notFound);
server.internalServerError(internalServerError);

server.get<string>('/', home);
server.get<string>('/about', about);
server.get<string>('/posts', posts);
server.get<string>('/throw-error', throwError);

server.listen(8080, function onListening() {
    console.log("Listening on 8080");
});

async function home() {
    return `home`
}

async function about() {
    return "about";
}

async function throwError() {
    throw new Error("Throwing an error");
    return "Error";
}

async function posts() {
    const posts = await getPosts();
    return posts.join("\n");
}


async function notFound() {
    return "404 - not found";
}

async function internalServerError() {
    return "500 - a terrible server error occured";
}