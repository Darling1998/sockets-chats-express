const express = require('express');
const bodyParser = require('body-parser');//manejar el cuerpo del request
const response = require('./network/response');
const db = require('./db');

const router = require('./network/routes')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

//cargamos el servidor a las rutas 
router(app);

app.use('/app',express.static('public'));
app.listen(3000);
console.log('aplicacion corriendo');