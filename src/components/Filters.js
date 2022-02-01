import React from "react"
import styled from "styled-components";

const Container = styled.div`
border: 1px solid black;
padding: 40px;
height: 820px;
width: 200px;
`

class Filtros extends React.Component {

  render() {
    return (
      <div>

          <Container>
          <h3>Filtros</h3>

          <p>Valor Mínimo:</p>
          <input
            type="number"
            value={this.props.valorMin}
            onChange={this.props.onChangeValorMin}>
          </input>

          <p>Valor Máximo:</p>
          <input
            type="number"
            value={this.props.valorMax}
            onChange={this.props.onChangeValorMax}>
          </input>

          <p>Busca por Nome:</p>
          <input
            value={this.props.busca}
            onChange={this.props.onChangeBusca}>
          </input>
          </Container>

      </div >
    );
  }
}

export default Filtros;

