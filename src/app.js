const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
//settings

app.set('port', process.env.PORT || 3000);
//middelwares
app.use(morgan('dev'));

//recive data from http verbs
app.use(bodyParser.json());
//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET',
  'preflightContinue': false
}));

//Routes
require('./routes/userRoutes')(app); //envio como parametro el objeto app al user.js


//Listen applications
app.listen(app.get('port'),()=>{
	console.log('Server works');
});




      