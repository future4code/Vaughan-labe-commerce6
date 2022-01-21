import React from "react"

class Filtros extends React.Component {

  render() {
    return (
      <div>
        <div>
          <label>Ordenação: </label>
          <select
            name="ordenacao"
            value={this.props.ordenacao}
            onChange={this.props.onChangeOrdenacao}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filtros;

