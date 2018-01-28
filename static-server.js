// TODO: replace it by more lightweight server framework or implement manually.
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));

var PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
    console.log(`Server is up and running. Port: ${PORT}`);
});