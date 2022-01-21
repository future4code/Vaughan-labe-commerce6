import React from "react";
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import styled from "styled-components";
import Produto1 from "./img/1.png";
import Produto2 from "./img/2.png";
import Produto3 from "./img/3.png";
import Produto4 from "./img/4.png";
import Produto5 from "./img/5.png";
import Produto6 from "./img/6.png";
import Produto7 from "./img/7.png";
import Produto8 from "./img/8.png";

const arrayProdutos = [
  {
    id: 1,
    nome: "Camiseta Pink Meditação do Nauta",
    valor: 45.99,
    foto: Produto1,
  },
  {
    id: 2,
    nome: "Camiseta Green Water Planeta",
    valor: 39.99,
    foto: Produto3,
  },
  {
    id: 3,
    nome: "Camiseta Black Fases da Lua",
    valor: 39.99,
    foto: Produto2,
  },
  {
    id: 4,
    nome: "Camiseta Blue Astronaltinhas",
    valor: 45.99,
    foto: Produto4,
  },
  {
    id: 5,
    nome: "Camisa White Gato Galático",
    valor: 89.99,
    foto: Produto5,
  },
  {
    id: 6,
    nome: "Camiseta Black White Planetário",
    valor: 95.99,
    foto: Produto7,
  },
  {
    id: 7,
    nome: "Camiseta Black Planetas in Dark",
    valor: 59.99,
    foto: Produto6,
  },
  {
    id: 8,
    nome: "Camisa White Viagem Espacial",
    valor: 89.99,
    foto: Produto8,
  },
];


const InfoProdutos = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
`

const ProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
`

class App extends React.Component {
  state = {
    produtos: arrayProdutos,
    ordenacao: -1,
  };

  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  render() {
    const listaProdutos = this.state.produtos
      .sort((prod, proxProd) => {
        return this.state.ordenacao * (prod.valor - proxProd.valor)
      })

      .map((p) => {
        return (
          <Produto key={p.id}
            nomeProduto={p.nome}
            valorProduto={p.valor}
            fotoProduto={p.foto}
          />
        )
      })

    return (
      <div>
        <InfoProdutos>
          <p>Quantidade de Produtos: {listaProdutos.length}</p>

          <div>
            <Filters
              ordenacao={this.ordenacao}
              onChangeOrdenacao={this.onChangeOrdenacao}
            />
          </div>
    
        </InfoProdutos>

        <ProdutosContainer>
          {listaProdutos}
        </ProdutosContainer>
      </div>
    );
  }
}

export default App;
