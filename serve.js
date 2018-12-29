var express = require('express'),
    app = express(),
    process = require('process'),
    port = process.argv[3];

app.use(express.static('public'));

app.listen(port || 3001);
console.log('Serving static files started...');
