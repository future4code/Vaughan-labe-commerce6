import React from "react"

class Filtros extends React.Component {

    render() {
  
      return (
        <div>
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
  