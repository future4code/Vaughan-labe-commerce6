import React from "react";
import styled from "styled-components"


class CarrinhoItens extends React.Component {
    render() {

        return (
            <div>
                <p>{this.props.CarrinhoItens.quantidade}X</p>
                <p>{this.props.CarrinhoItens.nome}</p>
                <button onClick={() => this.props.remove(this.props.CarrinhoItens.id)}>Remover</button>
            </div>
        )
    }
}
export default CarrinhoItens