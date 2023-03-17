import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Produtosty.css"


function Produto(){
    const [param, setParam] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        console.log(urlParams.get("id"));

        axios.post("http://localhost:5000/produtos", {"id":urlParams.get("id")})
        .then((data) => {
            setParam(data.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return (
        <>
            <Navbar />
            {param.map(item => (
                     <div class="container_produtos">
                        <div class="produto">
                        <div class="produto-imagem">
                            <img src="https://www.exemplo.com/imagem-do-produto.jpg" alt="Imagem do Produto"/>
                        </div>
                        <div class="produto-descricao">
                            <h1 class="produto-titulo">{item.titulo}</h1>
                            <p class="produto-texto">{item.decricao}</p>
                            <div class="produto-preco">{item.preco}R$</div>
                            <button class="produto-botao-comprar">Comprar</button>
            </div>
        </div>
    </div>
                ))}
        </>
    );
}

export default Produto;
