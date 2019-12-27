import http, { IncomingMessage, ServerResponse } from 'http';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'

export default function createServer() {
    const routeMap = {};

    const server = http.createServer(async function onRequest(request: IncomingMessage, response: ServerResponse) {
        const { url } = request;

        if (!url) {
            throw new Error("Url not present in the request");
        }

        const urlHandler = routeMap[url] || routeMap["/404"];
        const statusCode = routeMap[url] ? 200 : 404

        try {

            const html = getHtml(await urlHandler());

            response.writeHead(statusCode, {
                'Content-Type': 'text/html'
            });

            response.write(html);


        } catch (err) {
            console.error(err);

            response.writeHead(500, {
                'Content-Type': 'text/html'
            });

            const html = getHtml(await routeMap["/500"]());

            response.write(html);

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

    function getHtml(data: React.ReactElement) {

        const sheet = new ServerStyleSheet();

        try {
            const pageHtml = ReactDOMServer.renderToStaticMarkup((sheet.collectStyles(data)));
            const styleTags = sheet.getStyleTags()

            return `<html>
            <head>
                ${styleTags}
            </head>
            <body>
                ${pageHtml}
            </body>
        </html>`
        } catch (err) {
            throw err;
        } finally {
            sheet.seal();
        }

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

        server.listen(port, undefined, undefined, function onListening() {

            if (process.env.NODE_ENV === 'development') {
                require('open')(`http://localhost:${port}`)
            }

            if (callback) {
                callback();
            }
        });
    }
}

