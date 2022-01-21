import React from "react";
import styled from "styled-components";

const ProdutoContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProdutoPhoto = styled.img`
  width: 100%;
`
const Button = styled.button `
  background-color: #99DFCE;
  border-radius: 10px;
  height: 25px;
`

class Produto extends React.Component {

  render() {

    return (
      <ProdutoContainer >
        <ProdutoPhoto src={this.props.fotoProduto} alt={"Imagem do produto"} />
        <p>{this.props.nomeProduto}</p>
        <p>R${this.props.valorProduto}</p>

        <Button>Adicionar ao Carrinho</Button>
        
      </ProdutoContainer>
    );
  }
}

export default Produto;
