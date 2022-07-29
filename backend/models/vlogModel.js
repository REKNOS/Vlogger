const {Schema, model} = require('../connection');

const myschema = new Schema({
     title : String,
     description : String,
     thumbnail : String,
     uploadedBy : String,
     createdAt : String,
});

module.exports = model('User',myschema);