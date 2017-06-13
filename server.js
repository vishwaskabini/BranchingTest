var request = require('request-promise');
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

// var client = new Client();
var app = express();
app.use('/app', express.static(path.resolve(__dirname, 'public/app')));
app.use('/dist', express.static(path.resolve(__dirname, 'public/dist')));
app.use('/contents', express.static(path.resolve(__dirname, 'public/contents')));
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/node_modules", express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  var header = JSON.parse(JSON.stringify(req.headers));
  var options = {
    uri: '',
    headers: {
      'content-type': 'application/json',
      'Authorization': header.authorization,
      'AuthorizationType': header.authorizationtype
    },
    json: true,
    body: req.body,
    method: 'POST'
  }
  request(options)
    .then(function (response) {
      res.send(response);
    })
    .catch(function (err) {
      res.send(err);
    })
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, "localhost");
console.log('Server listening on 8080!!');