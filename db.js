const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DBMONGO_URL).then(()=>{
    console.log("Conectado a bd");
}).catch((error)=>{
    console.log(error);
})