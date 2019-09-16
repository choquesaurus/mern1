const mongoose=require('mongoose');
const  Schema=mongoose.Schema; //OBTENER ESCHEMA
const TaskSchema=new Schema({
    nombre:{type:String,required:true},
    valor:{type:Number,required:true},
    stock:{type:Number,required:true}
});

/*CREAR  SCHEMA*/
/*EXPORTAR MODELO*/ 

// const  {Schema}=mongoose;
// const  TaskSchema=new Schema({
//     title:{type:String,required:true},
//     description:{type:String,required:true}
// });
// PRODUCTOS ES LA COLLECTION Y TASKSCHEMA ES LA FORMA  O ESTRUCTURA QUE TIENE TU COLLECTION 
module.exports=mongoose.model("productos",TaskSchema);

