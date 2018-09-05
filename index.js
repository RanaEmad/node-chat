var app = require("express")();

//run server
app.listen(process.env.PORT || 3000, function () {
  console.log('Chat running ...');
});
