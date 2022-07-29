const Model = require('../models/vlogModel');
const router = require('express').Router();

router.post('/add',(req,res) => {
    console.log(req.body);
   new Model(req.body).save()
   .then((result) => {
    console.log(result);
    console.log('data saved');
    res.json(result);
   }).catch((err) => {
    console.log(err);
    res.json(err); 
   });
  });

  router.get('/getall',(req,res) => {
    Model.find({})
    .then((result) => {
      console.log(result);
      res.json(result);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  });

  router.delete('/delete/:userid',(req,res) =>{
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
      res.json(result);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  });
  
  router.put('/update/:userid',(req,res) =>{
    Model.findByIdAndUpdate(req.params.userid,req.body,{new : true})
    .then((result) => {
      res.json(result);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  });
  
  module.exports = router;