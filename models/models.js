const mongoose = reuire('mongoose');
const _ = require('underscore');

module.exports= (wagner)=>{
    mongoose.Promise = global.Promise;
    mongoose.conect('mongodb://localhost:27017/U3', {useNewUrlParser:true});

    wagner.factory('db',()=>mongoose);

    const Product = require('./product.model');
    const User = require('./user.model');
    const models={
        Product,
        User
    }
    _.each(models,(v,k)=>{
        wagner.factory(k,()=>v)
    });
}