var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('Request: ', req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    var login = fs.createReadStream(__dirname+'/login.html');
    //   Read and write
    if(req.url === '/' || req.url === '/home')
        myReadStream.pipe(res);
    else if(req.url == '/login')
        login.pipe(res);
    else
        res.end("Error! Page doesnt exist!");
});

server.listen(5500, '127.0.0.1');
console.log("Listening to 5500");
















// var http = require('http');

// var server = http.createServer(function(req,res){
//     console.log('Request: ',req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("hello");
// });

// server.listen(5500, '127.0.0.1');
// console.log("Listening to 3000");