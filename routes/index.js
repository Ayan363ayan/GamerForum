var express = require('express');
var router = express.Router();
var userModal=require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post',function(req,res){
  res.render('post');
});

router.get('/reviews',function(req,res){
  // userModal.find()
  // .then(function(data){
  //   res.render('read',{data});
  // })
  res.render('review');

});
router.post('/submit',function(req,res){
  userModal.create({
    gamename: req.body.gamename,
    review: req.body.review
  })
  .then(function(a){
    res.send(a)
  })
});
router.get('/update/:id',function(req,res){
  userModal.findOne({id:req.params.id})
  .then(function(game){
    res.render('update',{game})
  })
});
router.post('/update/:id',function(req,res){
  let updated={
    gamename:req.body.gamename,
    review:req.body.review
  }
  userModal.findOneAndUpdate({_id:req.params.id},{'$set':updated},{require:true})
  .then(function(updatedData){
    res.redirect('/review')
  })
});
router.get('delete/:id',function(req,res){
  userModal.findOneAndDelete({_id: req.params.id})
    .then(function(a){
      res.redirect('/reviews')
    })
});
module.exports = router;
