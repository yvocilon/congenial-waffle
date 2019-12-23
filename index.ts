import createServer from './server';

const server = createServer();

server.notFound(notFound);
server.internalServerError(internalServerError);

server.get<string>('/', home);
server.get<string>('/about', about);

server.listen(8080, function onListening() {
    console.log("Listening on 8080");
});

function home() {
    throw new Error("fuck");
    return `home`
}

function about() {
    return "about";
}

function notFound() {
    return "404 - not found";
}

function internalServerError() {
    return "500 - a terrible server error occured";
}