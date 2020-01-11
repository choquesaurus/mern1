require('dotenv').config();
const  mongoose=require('mongoose');
mongoose.connect(process.env.url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true}).then(db=>console.log(`db is connected ${db}`)).catch(erro=>console.log(erro));
module.exports=mongoose;