const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    password:{
        type:String,required:true
    }
});

//modelo
const userModel=mongoose.model('Usuario','userSchema','usuarios');
module.exports=userModel;