const express = require('express');
var app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');//manejar el cuerpo del request
const socket = require('./socket');

const response = require('./network/response');
const db = require('./db');

const router = require('./network/routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

socket.connect(server);

//cargamos el servidor a las rutas 
router(app);

app.use('/app',express.static('public'));
server.listen(3000,function(){
    console.log('La aplicacion esta corriendo en http://localhost:3000');
});
