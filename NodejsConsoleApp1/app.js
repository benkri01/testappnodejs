'use strict';
var path = require('path');

// anv�nds f�r att starta Node.js(som server)
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Sett port 3000 f�r services
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});