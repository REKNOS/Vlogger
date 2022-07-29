const { Mongoose, default: mongoose } = require("mongoose");

const url = 
    "mongodb+srv://reknos0809:kishans000@cluster0.pjwo2.mongodb.net/?retryWrites=true&w=majority";


    //promise
    
  mongoose.connect(url)
  .then((result) => {
      console.log("database connected");
  }).catch((err) => {
      console.error(err);
  });

  module.exports = mongoose;