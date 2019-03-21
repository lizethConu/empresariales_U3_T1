const express = require('express');
const bodyparser = equire('body-parser');
const wagner = require('wagner-core');

require('./models/models')(wagner)

const productRouter = require('./routers/product.router')(wagner);

//importar productRouter
const productRouter = require('./routers/product.router')(wagner);

//configurando el

let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/product",productRouter);

module.exports=app;