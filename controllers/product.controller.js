const status= require('http-status');

let _product;

const getAll = (req,res)=>{
    _product.find({})
    .then(products=>{
        res.status(200);
        res.json({code:200,msg:"Consulta exitosa",detail:products});
    })
    .catch(error=>{
        res.status(400);
        res.json({code:400,msg:"No se puede consultar",detail:products});
    });
};

const create = (req,res) =>{
    const product=reo.body;
    _product.create(product)
    .then(data=>{//todo sale bien, recibimos informacion de mongo
        console.log(data);
        res.status(200);
        res.json({code:200,msg:"Saved",default:data});
    })
    .catch(error=>{
        console.log('error');
        res.status(400);
        res.json({code:400,msg:"No se pudo insertar",detail:data});
    });
};

const deleteRroduct =(req,res)=>{
    const {id}= req.params;
    _product.remove({_id:id})
    .then(data=>{
        res.status(200);
        res.json({code:200,msg:"Se elimino",detail:prodcut});
    })
    .catch(error=>{
        res.status(400);
        res.json({code:400,msg:"No se puede consultar",detail:error});
    })
};

const getById = (req,res)=>{
    const id= req.params.id;
    product.find({_id:id})
    .then(product=>{
        res.status(200);
        res.json({code:200,msg:"Consulta exitosa",detail:product});
    })
    .catch(error=>{
        res.status(400);
        res.json({code:400,msg:"No se puede consultar",detail:product});
    });
};

//En lugar de hacer uno por uno se agrupan aqui, todos reciben Product
module.exports = (Product)=>{
    _product = Product;
    return({
        getAll,create,deleteRroduct,getById
    });
}