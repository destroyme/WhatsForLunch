var express      = require('express'),
    server       = express(),
    bodyParser   = require('body-parser');
    PORT         = process.env.PORT || 3000.
    WeatherAPI   = process.env.WeatherAPI


server.use(express.static('./public'));


  server.get('/', function (req, res){
    res.render('index')
    console.log('hit one')
    console.log('api.openweathermap.org/data/2.5/weather?q=NewYork&appid=' + WeatherAPI)
    $http.get('https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=' + WeatherAPI),
      function(data){
        console.log(data)
      }
  })

server.listen(PORT, function(){
  console.log("Server is listening on " + PORT);
});
