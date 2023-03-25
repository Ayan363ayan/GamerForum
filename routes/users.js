let mongoose = require('mongoose')
let UserSchema = mongoose.Schema({
  GameName:String,
  reveiw:String
})
mongoose.connect('mongodb://localhost/GamingForum')
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
  console.log(e)
})
module.exports  =mongoose.model('user',UserSchema)