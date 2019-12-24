const http = require('http');

export default function createServer() {
    const routeMap = {};

    const server = http.createServer(async function onRequest(request, response) {
        const { url } = request;
        const urlHandler = routeMap[url] || routeMap["/404"];

        try {
            const responseValue = (await urlHandler()).outerHTML;
            response.write(responseValue);
        } catch (err) {
            console.error(err);
            response.write(await routeMap["/500"]());
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

    function internalServerError<T>(callback: () => Promise<T>) {
        get<T>("/500", callback);
    }

    function notFound<T>(callback: () => Promise<T>) {
        get<T>("/404", callback);
    }

    function get<T>(route: string, callback: () => Promise<T>) {
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

