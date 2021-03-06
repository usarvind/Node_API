var express = require('express');
var app = express();
global.config = require('./config/constants.js');
var port = config.port || 4447;//472

var flash = require('connect-flash');
var path = require('path');
var cookieParser = require('cookie-parser');

//var session = require('express-session');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
const expressValidator = require('express-validator');
var nunjucks  = require('nunjucks');

global.dateFormat = require('dateformat');
global.moment = require('moment');


var server = require('http').createServer(app);
io = require('socket.io')(server);


var Sequelize = require('sequelize');
global.Sequelize = Sequelize;
var sequelizeDB = require('./config/database.js')(Sequelize);


app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// +++++++ view engine setup -------------------------------
  app.use(express.static(path.join(__dirname, 'public')));
  nunjucks.configure('app/views', {
    autoescape: false,
    express   : app,
    watch: true
  });
  app.set('view engine', 'html');
// -------------------------------------------------------  


//Set in headers every request +++++++++++++
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// ++++++++++++++++++++++++++++++++++++++++++ 
  app.use(cookieSession({
    name: 'session',
    keys: ["MCrashcookie"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));

  app.use(flash());
  app.use(fileUpload());


//Start :: Loading :: [Model , Controllers , Helper , Route ] ::

var model = require('./app/models/mysql/index')(Sequelize, sequelizeDB);
var controllers = require('./app/controllers/index')(model);
require('./routes/index.js')(app, model, controllers);
global.helper = require('./app/helpers/helpers.js');

//End :: Loading :: [Model , Controllers , Helper , Route ] ::


//Start : Server connection +++++++++++++++++++++++++++++++++++++
app.set('port', port);
server.listen(port, function(){
  console.log("(---------------------------------)");
  console.log("|         Server Started...       |");
  console.log("|    " + config.baseUrl + "    |");
  console.log("(---------------------------------)");
});
//End : Server connection +++++++++++++++++++++++++++++++++++++++


var socket_count=0;
//Start: Socket connection code++++++++++++++++++++++++++++

// io.on('connection', function (client) {
//   socket_count++;
//   io.emit('count',socket_count);
//   console.log("Socket connection established",socket_count);
//   client.on('disconnect', function () { 
//     socket_count--;
//     io.emit('count',socket_count);
//     console.log("Socket disconnected",socket_count); 
//   });
// });

//End: Socket connection code++++++++++++++++++++++++++++++++



module.exports = {app:app, server:server}
