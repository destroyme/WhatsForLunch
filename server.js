var express      = require('express'),
    server       = express(),
    bodyParser   = require('body-parser');
    PORT         = process.env.PORT || 3000,
    WeatherAPI   = process.env.WeatherAPI,
    http         = require('http'),
    ejs          = require('ejs')



server.use(express.static('./public'));
server.set('view engine', 'ejs');

server.get('/', function (req, res, next){
    res.render('index')
});


server.listen(PORT, function(){
  console.log("Fork is listening on " + PORT);
});
