const db = require('mongoose');
const Model = require('./model');
//db.Promise= global.Promise;

function addMessage(mensaje){
    //list.push(mensaje);
    const myMessage = new Model(mensaje);
    myMessage.save();
}


async function getMessage(filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterChat !== null) {
            filter = { chat: filterChat };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            });
    })
}
async function updateText(id, message) {
    const foundMessage = await Model.findOne({_id: id});
    foundMessage.message = message;
    return await foundMessage.save();
}
function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports={
    add:addMessage,
    list:getMessage,
    updateText:updateText,
    remove:removeMessage
}