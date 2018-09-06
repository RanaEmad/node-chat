var app = require("express")();
//set view engine
app.set("view engine","ejs");
app.set("views","views");

//home page
app.get("/",function(req, res){
  res.render("chat.ejs");
});
//run server
app.listen(process.env.PORT || 3000, function () {
  console.log('Chat running ...');
});
