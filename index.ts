import createServer from './server';

const server = createServer();

server.notFound(notFound);

server.get<string>('/', home);
server.get<string>('/about', about);

server.listen(8080, function onListening() {
    console.log("Listening on 8080");
});

function home() {
    return `home`
}

function about() {
    return "about";
}

function notFound() {
    return "404 - not found";
}