var express = require('express')
var http = require('http')

var app = express()

var port = 666
var httpServer = http.createServer(app)

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

httpServer.listen(port, () => console.log('server is listening'))
