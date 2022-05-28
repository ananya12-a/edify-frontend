const express = require('express');
const path = require('path');
app = express();
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html")
})
const port = process.env.PORT || 80;
app.listen(port);

console.log('Server starter...') 