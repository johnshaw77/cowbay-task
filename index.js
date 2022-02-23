// require 與 import 的差界
// https://blog.niclin.tw/2019/10/03/nodejs-require-vs-es6-import-export/
// Node.js SyntaxError：Cannot use import statement outside a module
// https://blog.twtnn.com/2021/05/nodejs-syntaxerrorcannot-use-import.html

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1 style="color:blue;font-size:164px;margin:400px 50px;">超人9900再起</h1>'))
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});


