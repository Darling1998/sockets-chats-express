const db = require('mongoose');
const Model = require('./model');
//db.Promise= global.Promise;

function addUser(user){
    const myUser = new Model(user);
   return myUser.save();
}

function listUsers() {
    return Model.find();
}

module.exports = {
    add: addUser,
    list: listUsers,
}