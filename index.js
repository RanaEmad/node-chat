var express = require("express");
var app = express();
var path= require("path");
var io = require('socket.io')();

//set js as static
app.use(express.static(path.join(__dirname,'js')));
//set view engine
app.set("view engine","ejs");
app.set("views","views");

//home page
app.get("/",function(req, res){
  res.render("chat.ejs");
});
//run server
var server=app.listen(process.env.PORT || 3000, function () {
  console.log('Chat running ...');
});

io.attach(server);
