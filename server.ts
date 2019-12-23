const http = require('http');

export default function createServer() {
    const routeMap = {};

    const server = http.createServer(function onRequest(request, response) {
        const { url } = request;
        const urlHandler = routeMap[url] || routeMap["/404"];

        try {
            const responseValue = urlHandler();
            response.write(responseValue);
        } catch (err) {
            console.error(err);
            response.write(routeMap["/500"]());
        } finally {
            response.end();
        }
    })

    return {
        get,
        listen,
        notFound,
        internalServerError
    }

    function internalServerError<T>(callback: () => T) {
        get<T>("/500", callback);
    }

    function notFound<T>(callback: () => T) {
        get<T>("/404", callback);
    }

    function get<T>(route: string, callback: () => T) {
        routeMap[route] = callback;
    }

    function listen(port: number, callback?: () => void) {

        if (!routeMap["/404"]) {
            throw new Error("You have to setup a 404 page");
        }

        if (!routeMap["/500"]) {
            throw new Error("You have to setup an internal server error page");
        }

        server.listen(port, null, null, callback);
    }
}

