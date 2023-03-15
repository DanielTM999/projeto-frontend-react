import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/loginstyle.css";

function Login(){
    return (
        <>
            < Navbar/>
            <div class="container">
      <div class="card">
        <h2>Login</h2>
        <form>
          <div class="form-control">
            <label for="username">Nome de Usuário:</label>
            <input type="text" id="username" name="username" placeholder="Insira seu nome de usuário"/>
          </div>
          <div class="form-control">
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Insira sua senha"/>
          </div>
          <button type="submit">Entrar</button>
        </form>
            <a className="cadlnk" href="/cadastro">Cadastro</a>
        </div>
      </div>
        </>
    );
}

export default Login;
