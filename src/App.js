import React from "react";
import Produto from "./components/Produtos";
import Filters from "./components/Filters";
import Carrinho from "./components/Carrinho";
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


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 10px;
`


const InfoProdutos = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
`

const ProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`
const Ordenacao = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
`

class App extends React.Component {
  state = {
    produtos: arrayProdutos,
    ordenacao: 1,
    valorMin: "",
    valorMax: "",
    busca: "",

    lista: [
      {
        id: 1,
        nome: "Camiseta Pink Meditação do Nauta",
        valor: 45.99,
        foto: Produto1,
        quantidade: 1,
      },
      {
        id: 2,
        nome: "Camiseta Green Water Planeta",
        valor: 39.99,
        foto: Produto3,
        quantidade: 1,
      }]
  };

  onChangeValorMin = (event) => {
    this.setState({ valorMin: event.target.value })
  }

  onChangeValorMax = (event) => {
    this.setState({ valorMax: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ busca: event.target.value })
  }

  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  adicionarProduto = (id) => {
    const produtoCarrinho = this.state.lista.find(item => id === item.id)
    if (produtoCarrinho) {
      const novoProdutoNoCarro = this.state.lista.map(item => {
        if (id === item.id) {
          return ({
            ...item,
            quantidade: item.quantidade + 1
          })
        }
        return item
      })
      this.setState({ lista: novoProdutoNoCarro })

    } else {
      const produtoAdicionado =
        this.state.lista.find(item => id === item.id)

      const novoProdutoNoCarro =
        [...this.state.lista, { ...produtoAdicionado, quantidade: 1 }]

      this.setState({ lista: novoProdutoNoCarro })
    }
  }

  removerProduto = (id) => {
    const removerItem = this.state.lista.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantidade: item.quantidade - 1
        }
      }
      return item
    })

      .filter((item) => item.quantidade > 0)
    this.setState({ lista: removerItem })

  }

  render() {
    const listaProdutos = this.state.produtos
      .filter(item => {
        return item.nome.toLowerCase().includes(this.state.busca.toLowerCase())
      })
      .filter(item => {
        return this.state.valorMin === "" || item.valor >= this.state.valorMin
      })
      .filter(item => {
        return this.state.valorMax === "" || item.value <= this.state.valorMax
      })

      .sort((prod, proxProd) => {
        return this.state.ordenacao * (prod.valor - proxProd.valor)
      })

      .map((p) => {
        return (
          <Produto key={p.id}
            nomeProduto={p.nome}
            valorProduto={p.valor}
            fotoProduto={p.foto}
            chave={p.id}
            adicionarProduto={this.adicionarProduto}
          />
        )
      })

    return (
      <AppContainer>
        <InfoProdutos>

          <Ordenacao>
            <p>Quantidade de Produtos: {listaProdutos.length}</p>
            <label>Ordenação: </label>
            <select
              name="ordenacao"
              value={this.state.ordenacao}
              onChange={this.onChangeOrdenacao}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
          </Ordenacao>

          <div>
            <Filters
              valorMin={this.valorMin}
              onChangeValorMin={this.onChangeValorMin}
              valorMax={this.valorMax}
              onChangeValorMax={this.onChangeValorMax}
              busca={this.busca}
              onChangeBusca={this.onChangeBusca}
              ordenacao={this.ordenacao}
              onChangeOrdenacao={this.onChangeOrdenacao}
            />
          </div>

        </InfoProdutos>

        <ProdutosContainer>
          {listaProdutos}
        </ProdutosContainer>

        <Carrinho
          valorTotal={this.state.valorTotal}
          produtos={this.state.lista}
          removerProduto={this.removerProduto}
        />

      </AppContainer>
    );
  }
}

export default App;
