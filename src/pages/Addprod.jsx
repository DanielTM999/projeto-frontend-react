import React from "react";
import { useState } from "react";
import "../styles/addprod.css"
import Navbar from "../Components/Navbar";
import axios from "axios";

function Addprod(){
    const [nomeprod, setNprod] = useState();
    const [infoprod, setInfoprod] = useState();
    const [preco, setPreco] = useState();
    const [estoque, setEstoque] = useState(1);
    const [image, setImage] = useState(null);


    function handleImagemChange(event) {
        setImage(event.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nomeprod);
        formData.append('info', infoprod);
        formData.append('preco', preco);
        formData.append('estoque', estoque);
        formData.append('cpf', sessionStorage.cpf);
        formData.append('imagem', image);

        axios.post('http://localhost:5000/addprod', formData)
            .then(response => {
                console.log(response.data);
                // fazer algo após o envio ter sido concluído com sucesso
            })
            .catch(error => {
            console.error(error);
            // lidar com erros de envio
            });
        };



    return(
        <>
        <Navbar />
            <div class="container_produtos">
                <form encType={"multipart/form-data"} onSubmit={handleSubmit} class="cadastro-produto">
                    <h1 class="titulo">Cadastro de Produto</h1>
                    <label for="nome-produto" class="label">Nome do Produto</label>
                    <input type="text" id="nome-produto" name="nome-produto" class="input" required onChange={
                        (e) => {
                            setNprod(e.target.value);
                        }
                    }/>

                    <label for="descricao-produto" class="label">Descrição do Produto</label>
                    <textarea id="descricao-produto" name="descricao-produto" class="textarea" rows="5" required onChange={
                        (e) => {
                            setInfoprod(e.target.value);
                        }
                    }></textarea>

                    <label for="preco-produto" class="label">Preço do Produto</label>
                    <input type="number" id="preco-produto" name="preco-produto" class="input" min="1" step="0.01" required onChange={
                        (e) => {
                            setPreco(parseFloat(e.target.value));
                        }
                    }/>

                    <label for="estoque-produto" class="label">Estoque do Produto</label>
			        <input type="number" id="estoque-produto" name="estoque-produto" class="input" min="1" required onChange={
                        (e) => {
                            setEstoque(parseInt(e.target.value) + 1);
                        }
                    }/>

                    <label for="imagem-produto" class="label">Imagem do Produto</label>
                    <input type="file" id="imagem-produto" name="imagem-produto" class="input" accept="image/*" required onChange={handleImagemChange}/>

                    <button type="submit" class="botao botao-cadastrar">Cadastrar Produto</button>
                </form>
            </div>
        </>
    );
}

export default Addprod;
