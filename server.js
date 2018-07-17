// Imports
var express     = require('express');
var bodyParser  = require('body-parser');
var apiRouter   = require('./apiRouter').router;


// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static('public'));

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).sendFile(__dirname + '/index.html');
});

server.get('/login', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).sendFile(__dirname + '/public/page/login.html');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function() {
    console.log('Server en écoute :)');
});