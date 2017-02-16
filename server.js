var express = require("express");
// Require body-parser (to receive POST data from clients)
var bodyParser = require("body-parser");
// Require path
var path = require("path");

var app = express();
// Setting UP app needed information
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
// Integrate body-parser with my app
require('./server/config/mongoose.js');
require('./server/config/route.js')(app);

app.listen(8010, function(){
  console.log('Listening on : 8010');
});
