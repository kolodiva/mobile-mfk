var {Pool} = require('pg');

// var logger       = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');

var express = require('express');
var cors 	= require('cors');

var app     = express();
//var port    =   process.env.PORT || 8080;

//var port    =   8081;
var port    =   8080;

var router 	= express.Router();

var path 	= require('path');

//
// const db_set = {
// 	user: 'postgres',
//   	host: 'localhost',
//   	database: 'orders',
//   	password: '123',
//   	port: 5432
// };

const db_set = {
  user: 'testuser',
    host: 'localhost',
    database: 'statistica',
    password: '123456',
    port: 5432
};

const db = new Pool(db_set);

// ROUTES
// ==============================================

app.use('/public', express.static(__dirname + '/public'));

app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Serve the static files from the React app

app.use(express.static(path.join(__dirname, '/dist')));

 router.get('/', function(req, res) {
     res.sendFile('index.html');
 });

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page und Redux ---<<-!-----555----!!!>>----->'); 
});

router.get('/text', function(req, res) {
    res.sendFile( __dirname + '/public/favicon.ico' ); 
});

router.get('/test', function(req, res) {
    res.send( '<h1>Yoba</h1>' ); 
});

router.get('/qry', function(req, res) {
  	
  	const text = 'select name, guid_picture from nomenklators where parentguid is null order by sort_field';
  	//const values = [ req.params.id ]
  	const values = []

	db.query(text, values, (error, result) => {
	  
	  if ( error ) {
	    res.send(error.stack)
	  } else {
		res.send(result.rows);	
	  }
	});


    //res.send( 'res: ' + String(req.params.id) ); 
});

// apply the routes to our application
app.use('/', router);

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);

console.log('Magic happens on port ' + port);