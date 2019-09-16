const express=require('express');
const  morgan=require('morgan');
const enrutador=require('./routes/task.routes');
const path=require('path');
const {mongoose}=require('./database');

// const morgan=require('morgan');
// const  cors=require('cors');


class Aplicacion{

constructor(){
    this.app=express();
    this.config();
    this.router();
}

 config(){
    this.app.set("port",process.env.PORT||3000);
    this.app.use(morgan('dev'));
    this.app.use(express.json());

    this.app.use(express.static(path.join(__dirname,'/public')));
    //console.log(__dirname);
    // this.app.use(morgan('dev'));
    // this.app.use(cors());
    // this.app.use(express.json());
    // this.app.use(urlencoded({extended:false}));
}
router(){
    this.app.use('/api/task',enrutador);
}
start(){
    this.app.listen(this.app.get("port"),()=>
    {
        console.log(`Servidor conectado en el puerto ${this.app.get("port")}`)
    });
}
}
const  obj=new Aplicacion();
obj.start();
