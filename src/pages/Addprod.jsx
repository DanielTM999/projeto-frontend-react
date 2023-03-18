import React from "react";
import "../styles/addprod.css"
import Navbar from "../Components/Navbar";

function Addprod(){
    return(
        <>
        <Navbar />
            <div class="container">
                <form class="cadastro-produto">
                    <h1 class="titulo">Cadastro de Produto</h1>
                    <label for="nome-produto" class="label">Nome do Produto</label>
                    <input type="text" id="nome-produto" name="nome-produto" class="input" required/>

                    <label for="descricao-produto" class="label">Descrição do Produto</label>
                    <textarea id="descricao-produto" name="descricao-produto" class="textarea" rows="5" required></textarea>

                    <label for="preco-produto" class="label">Preço do Produto</label>
                    <input type="number" id="preco-produto" name="preco-produto" class="input" min="0" step="0.01" required/>

                    <label for="imagem-produto" class="label">Imagem do Produto</label>
                    <input type="file" id="imagem-produto" name="imagem-produto" class="input" accept="image/*" required/>

                    <button type="submit" class="botao botao-cadastrar">Cadastrar Produto</button>
                </form>
            </div>
        </>
    );
}

export default Addprod;
