 import React, { Component } from 'react'
 import Tabla from './table';

 export default class App extends Component {
    
   constructor(){
       super();
       this.state={
           llave:"",
           nombre:"",
           valor:0,
           stock:0,
           productos:[],
           actualizar:false,
           agregar:true
       };
   
   }
    AltoCarta(){
        return{
        "margin-top":"40px", 
        "background":"red",
        height:"80vh"
        }
        
    }
    ChangeInput(e){
        
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(e.target.name,e.target.value);
        
    };
   
    ActualizarDatos(e){
        //alert('Actualizar Propucto'+id);
        fetch(`/api/task/${this.state.llave}`,{
            method:'put',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(resp => resp.json()).then(resp => {
                M.toast({html:resp.status});
                this.ListarProductos();
        })
        this.setState({
            llave:"",
            nombre:"",
            valor:0,
            stock:0
        });   
        this.setState({agregar:true})
        e.preventDefault();
    }
    EliminarProducto(id){
        const  obj=this;
        fetch(`/api/task/${id}`,{
            method:'delete',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(resp=>resp.json())
        .then(data=>{
            M.toast({html:data.status});
            
            obj.ListarProductos();      
        }).catch(error=>{console.log(error)}); 
        
        //alert(`Producto eliminado : ${id}`)
    }
    EnviarDatos(e){

        fetch('/api/task',{
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res=>res.json())
        .then(res=>{
                    //console.log();

                M.toast({html:res.status});
                this.setState({
                    llave:"",
                    nombre:"",
                    valor:0,
                    stock:0
                });
                this.ListarProductos();
                }
            ).catch(error=>console.log(error));
            //this.setState({agregar:true})
       // console.log(this.state);
        e.preventDefault();
    }
    ListarProductos(){
        fetch("/api/task").then(res => res.json()).then(resp => {
            this.setState({productos:resp})
            console.log(this.state.productos,"xd");
        }).catch(error=>console.log(error))
    }
    SelectedOneProduct(id){
        console.log(`Estado : ${this.state.agregar}`)
        this.setState({agregar:false})
        this.setState({agregar:false})
        fetch(`/api/task/${id}`).then(res => res.json()).then(resp => { 
            console.log(resp);
            this.setState({
                llave:resp._id,
                nombre:resp.nombre,
                valor:resp.valor,
                stock:resp.stock
            });
            //this.setState({productos:resp})
        });
        console.log(`Seleccionaste  el ${id}`);
        console.log(`Estado de agregar: ${this.state.agregar}`)
        }
    
        CancelarEvento(){
            this.setState({
                llave:"",
                nombre:"",
                valor:0,
                stock:0
            });
            this.setState({agregar:true});
            M.toast({html:"Evento Reiniciado"})    
        }
    componentDidMount(){
        this.ListarProductos();
    }

    render() {
         return (

             <div>
                       
                 <nav className="light-blue">
                    <div className="container">
                        <a href="/" className="brand-logo flow-text">Go Stack</a>
                    </div>
                 </nav>
        
                   <div className="container" >
                        <div className="row">
                            <div className="col s5">
                                <div className="card">
                                    <div className="card-content">
                                        <form onSubmit={this.state.agregar==true?this.EnviarDatos.bind(this):this.ActualizarDatos.bind(this)}>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="text" placeholder="Name :D" autoComplete="off" name="nombre" onChange={this.ChangeInput.bind(this)} value={this.state.nombre} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                   <div className="input-field col s12">
                                                            <input  type="text" placeholder="Go Valor :D" name="valor" onChange={this.ChangeInput.bind(this)} value={this.state.valor}/>
                                                   </div>
                                                </div>
                                                <div className="row">
                                                   <div className="input-field col s12">
                                                            <input  type="text" placeholder="Go Stock :D" name="stock" onChange={this.ChangeInput.bind(this)} value={this.state.stock}/>
                                                   </div>
                                                </div>
                                                <div className="row">
                                                <button type="submit" className="btn waves-effect light-blue col s12">
                                                    Enviar
                                                </button>
                                                <br/><br/>
                                                <button className="btn waves-effect red accent-3 col s12" onClick={this.CancelarEvento.bind(this)}>
                                                    Cancelar
                                                </button>
                                                <br/>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col s7">
                                    <Tabla Arregloproducto={this.state.productos} SelectedOne={this.SelectedOneProduct.bind(this)} Eliminar={this.EliminarProducto.bind(this)}/>
                            </div>
                        </div>
                    </div>            
             </div>
         )
     }
 }
 