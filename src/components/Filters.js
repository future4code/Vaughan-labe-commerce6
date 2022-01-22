import React from "react"

class Filtros extends React.Component {

    render() {
      return (
       <div>
          <div>
             <h3>Filtros</h3>

           <p>Valor mínimo:</p>
           <input 
           value={this.props.valorMin}
           onChange={this.props.onChangeValorMin}>
           </input>

           <p>Valor máximo:</p> 
           <input 
           value={this.props.valorMax}
           onChange={this.props.onChangeValorMax}>
           </input>

           <p>Buscar por nome:</p> 
           <input 
           value={this.props.busca}
           onChange={this.props.onChangeBusca}>
           </input>
           </div>
           
       
        <label>Ordenação: </label>
        <select
            name="ordenacao"
            value={this.props.ordenacao}
            onChange={this.props.onChangeOrdenacao}
        >
            <option value={-1}>Crescente</option>
            <option value={1}>Decrescente</option>
        </select>
         </div>
      );
    }
  }
  
  export default Filtros;