const express = require('express');
const response = require('./../../network/response');
const controller = require('./controller');


const router = express.Router();//tener interaccion con las rutas get-post,etc
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message',function(req,res){
    console.log(req.headers)
   // res.send('hola desde get');
   // res.send('Lista de mensajes');
   response.success(req,res,'Lista de mensajes');
});

router.post('/message',function(req,res){
    //console.log(req.query);//para los datos que viene en la urñ con el ?
    //console.log(req.body);
   // res.send('Mensaje añadido');
    //res.status(201).send({error:'',body:'mensaje eliminado'})
    if(req.query.error == "ok"){
        response.error(req,res,'Error Simulado',500,'Es solo una simulacion de los errores');
    }else{
        response.success(req,res,'Creado correctamente',201);
    }
  
});

app.use('/app',express.static('public'))

router.delete('/',function(req,res){
    console.log(req.query);//para los datos que viene en la urñ con el ?
    console.log(req.body);
    res.send('Mensaje eliminado');
  
});


/* app.use('/',function(req,res){
    res.send('hola');

});
 */
app.listen(3000);
console.log('aplicacion corriendo');