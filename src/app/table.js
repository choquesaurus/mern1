import React, { Component } from 'react';

export default class Tabla extends Component {
    render() {
        return (
            <div>
                <table className="striped centered">
                    <thead>
                       <tr>     
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Stock</th>
                       </tr>
                    </thead>
                    <tbody>            
                            {     
                                this.props.Arregloproducto.map((params)=>{
                                    return(
                                      <tr key={params._id}>  
                                            <td>{params.nombre}</td>
                                            <td>{params.valor}</td>
                                            <td>{params.stock}</td>
                                            <td><input type="button" onClick={this.props.SelectedOne.bind(this,params._id)} value="Seleccionar" className="btn light-green accent-3 waves-efect"/></td>
                                            <td><input type="button" onClick={this.props.Eliminar.bind(this,params._id)} value="Eliminar" className="btn red accent-3   waves-efect"/></td>
                                        </tr>
                                    )
                                })
                            }             
                    </tbody>
                </table>
            </div>
        )
    }
}
