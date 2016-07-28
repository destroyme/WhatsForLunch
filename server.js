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
	http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + 'NewYork' + ',us&units=imperial&APPID=' + WeatherAPI, function(data){
		data.on('data', function(data){
			var dataString = data;
      var Obj = JSON.parse(data.toString());
      console.log( JSON.parse(data.toString()) );
      //Obj = {hi:'bob'};
      // res.send(dataString);
//      res.render('index', {doople:JSON.stringify( Obj )})
      res.render('index', {doople:Obj})
		});
	});

});


server.listen(PORT, function(){
  console.log("Fork is listening on " + PORT);
});
