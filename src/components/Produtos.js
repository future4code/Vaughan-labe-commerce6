import React from "react";
import styled from "styled-components";

const ProdutoContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const ProdutoPhoto = styled.img`
  width: 100%;
`

class Produto extends React.Component {

  render() {

    return (
      <ProdutoContainer >
        <a><ProdutoPhoto src={this.props.fotoProduto} alt={"Imagem do produto"} /></a>
        <p>{this.props.nomeProduto}</p>
        <p>R${this.props.valorProduto}</p>

        <button>Adicionar ao Carrinho</button>
        
      </ProdutoContainer>
    );
  }
}

export default Produto;
