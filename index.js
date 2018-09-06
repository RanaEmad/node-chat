var app = require("express")();

app.set("view engine","ejs");
app.set("views","views");
//run server
app.listen(process.env.PORT || 3000, function () {
  console.log('Chat running ...');
});
