const productRouter = require('express').Router();

module.exports=(wagner)=>{


    //si solo tiene una linea se pueden evitar las llaves
const productCtrl = wagner.invoke((Product)=>{
    require('../controllers/product.controller'(Product));
});
    //Definir endpoints
const productRouter=express.Router();


//ingresar
productRouter.post("/",(reo,res)=>{
   productCtrl.create(reo,res);
});

//consulta
productRouter.get("/",(req,res)=>{
    productCtrl.getAll(req.reo);
});

//consultar id
productRouter.get("/:id",(req,res)=>{
    productCtrl.getById(req,reo);
});

//eliminar
productRouter.delete("/:id",(req,res)=>{
    productCtrl.deleteProduct(req,res);
})

//update
productRouter.update("/:id",(req,res)=>{
    const id=req.params.id;
    product.update({_id:id})
    .then(data=>{
        res.status(200);
        res.json({code:200,msg:"Se actualizo",detail:data});
    })
    .catch(error=>{
        res.status(400);
        res.json({code:400,msg:"No se puede actualizar",detail:error});
    })
})


}