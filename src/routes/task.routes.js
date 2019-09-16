const express=require('express');
const  router=express.Router();
const  Task=require('../model/task');



router.get('/',async (request,response)=>
{
        const query=await Task.find();
        response.json(query);
});
router.get('/:id',async (req,response)=>{
    //const Two=await Task.find({age:'lte18'})
    const One=await Task.findById(req.params.id);
    response.json(One);
    const  ip=req.connection.remoteAddress;
    console.log(ip);
});
router.post('/',async (req,resp)=>{
       
    const {id,nombre,valor,stock}=req.body;
    const  savetask= new Task({id,nombre,valor,stock});
    await savetask.save();

    resp.json({status:"Producto Agregado"});

    //console.log(req.body);
});
router.put('/:id',async (req,response)=>{
    const {nombre,valor,stock}=req.body;
    const newProducts={nombre,valor,stock};
    
   await Task.findByIdAndUpdate(req.params.id,newProducts);
    response.json({status:"Saved update"});
});
router.delete('/:id',async (req,response)=>{
    
    await Task.findByIdAndRemove(req.params.id);
    response.json({status:"successfully removed"});
});
// router.get('/',(Request,Response)=>
// {
//     Task.find().then(data=>console.log(data)).catch(error=>console.log(error))
// });

// router.get('/',(Request,Response)=>
// {

//     Task.find((error,resp)=>
//     {          
//         console.log(resp);
//         Response.json({message:"Mensaje Enviado"});    
//     });
    
// });



module.exports=router;
