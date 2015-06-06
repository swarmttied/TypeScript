/// <reference path="scripts/typings/node/node.d.ts"/>

import http = require('http');

var portNumber = 8087;

function requestListener(request: http.ServerRequest, response: http.ServerResponse) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Method: ' + request.method + '\n');
    response.write('Url: ' + request.url + '\n');
    response.write('Response Text Here');
    response.end();
}

http.createServer(requestListener).listen(portNumber);

console.log('Listening on localhost:' + portNumber);