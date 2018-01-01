var http = require('http');
var fs = require('fs');

var server = http.createServer();
/*
server.on('request', function (request, response) {
  response.write('Hello world!');
  response.end();
});
*/

/* to kod z ćwiczeń
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});
*/


server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {

        fs.readFile('./index.html', 'utf-8', function(err, data){
          if (err) throw err;
          var indexText = data;
          fs.writeFile('indexText.txt', indexText, function(err, data){
            if (err) throw err;
            console.log('Created successfully');
          });
        });
    response.end();
    } else {
            response.statusCode = 404;
            response.write('<div><h1>404: Zła ścieżka!</h1><img  src="https://images.pexels.com/photos/463684/pexels-photo-463684.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="skull"></img></div>');
            response.end();
    }
});



server.listen(9000);
