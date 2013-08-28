var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var data = fs.readFileSync('./index.html');
  var resp = data.toString('utf-8');
  response.send(resp);
  
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
