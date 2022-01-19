import React from 'react';

import './App.css';


let listaPrdutos = [{
  nome: 'camisa',
  preco: 100,
  info: 'branca'
},
{
  nome: 'camisa',
  preco: 100,
  info: 'preta'
},
]

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantidade: 0
    };
    //eventos
    this.add = this.add.bind(this);

    this.revome = this.remove.bind(this);
  }



  add() {
    this.setState({
      quantidade: this.state.quantidade + 1
    });

  }
  remove() {
    this.setState({
      quantidade: this.state.quantidade - 1
    });

     render(){
      return (
        <div>
          <div      >
            <div   >
              <h4>
                {this.props.name}: R$ {this.props.preco}
              </h4>
            </div>
            <div   >
              quantidade: {this.props.quantidade}
            </div>
            <div   >

              <div  >
                <button   >informações</button>

              </div>
              <div  >
                <button onClick={this.add} >+1</button>
                <button onClick={this.remove} >-1</button>

              </div>

            </div>
          </div>
        </div>
      )
    }
    


  }



}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeProduto: ""
    };

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        listaDeProduto: listaPrdutos
      }, 1000);
    }

    );
  }
  render() {
    if (!this.state.listaPrdutos) return <p>Carregando...</p>

    var component = this;
    var produto = this.state.listaPrdutos.map(
      function (produto) {
        return (


          <Produto nome={produto.nome}
            preco={produto.preco}
          />
        )
      }
    );
    return (
      { produto }
    )
  }
}


function App() {
  return (
    <div>
      <List /> asdasdasd
    </div>



  )
}
export default App;
