import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginstyle.css";
import axios from "axios";

function Login(){
    const navigate = useNavigate();
      const [login, setLogin] = useState();
      const [Senha, setSenha] = useState();
      const [error, setError] = useState();
      const [results, setResults] = useState();
      const [senhaVisivel, setSenhaVisivel] = useState(false);

      const handleSubmit = (e) => {
          e.preventDefault();
           const dados = {"cpf":login, "senha":Senha};
          axios.post("http://localhost:5000/login",dados)
          .then((data) => {
              if(data.data.logado === true){
                  console.log(data.data);
                  sessionStorage.logado = "true"
                  sessionStorage.nome = data.data.nome;
                  sessionStorage.email = data.data.email;
                  sessionStorage.cpf = data.data.cpf;
                  navigate("/")
              }else{
                  setError(data.data.erros);
                  setResults(data.data.status);
              }

          })
          .catch((err) => {return err})
          .finally(setTimeout(() => {setError(null)}, 2000))

      }


    return (
        <>
            < Navbar/>

            <div class="container">
      <div class="card">
        {error && <div className="erros">{results}</div>}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-control">
            <label for="username">CPF do Usuário:</label>
            <input type="text"
            id="username" name="username"
            placeholder="Insira seu CPF"
            onChange={(e) => {
                setLogin(e.target.value);
            }}
            />
          </div>
          <div class="form-control">
            <label for="password">Senha:</label>
            <input type={senhaVisivel ? "text" : "password"}
            id="password"
            name="password"
            onChange={(e) => {
                setSenha(e.target.value);
            }}
            placeholder="Insira sua senha"/>
          </div>
          <button id="bntsenha" type="button" onClick={() => setSenhaVisivel(!senhaVisivel)}>
            {senhaVisivel ? "Ocultar senha" : "Mostrar senha"}
          </button>
          <button type="submit">Entrar</button>
        </form>
            <a className="cadlnk" href="/cadastro">Cadastro</a>
        </div>
      </div>
        </>
    );
}

export default Login;
