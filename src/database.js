const  mongoose=require('mongoose');

const url='mongodb+srv://gouser2:1234@cluster0-bzauq.mongodb.net/mitienda?retryWrites=true&w=majority&authSource=admin';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true}).then(db=>console.log(`db is connected ${db}`)).catch(erro=>console.log(erro));
module.exports=mongoose;