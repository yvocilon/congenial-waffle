const http = require('http');

export default function createServer() {
    const routeMap = {};

    const server = http.createServer(function onRequest(request, response) {
        const { url } = request;

        if (routeMap[url]) {
            const returnValue = routeMap[url]();
            response.write(returnValue);
        }

        response.end();
    })

    return {
        get,
        listen,
    }

    function get<T>(route: string, callback: () => T) {
        routeMap[route] = callback;
    }

    function listen(port: number, callback?: () => void) {
        server.listen(port, null, null, callback);
    }
}

