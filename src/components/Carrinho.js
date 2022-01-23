import React from "react"
import CarrinhoItens from "./CarrinhoItens"
import styled from "styled-components"


class Carrinho extends React.Component {

    valorTotal = () => {
        let valorTotal = 0
        for (let produtos of this.props.produtos) {
            valorTotal += produtos.valor * produtos.quantidade;
        }
        return valorTotal
    }
    render() {
        return (

            <div>
                <h3>Carrinho:</h3>
                {this.props.produtos.map((item) => {

                    return <CarrinhoItens CarrinhoItens={item} remove={this.props.removerProduto} />
                })}

                <p>Valor Total: R${this.valorTotal()},00</p>
            </div>
        )
    }
}
export default Carrinho