const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
     title : String,
     description : String,
     category : String,
     thumbnail : String,
     file : String,
     uploadedBy : {type : Types.ObjectId, ref : "User"},
     createdAt : Date,
});

module.exports = model('Vlogs',myschema);