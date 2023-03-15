import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


function Cadastro(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [Senha, setSenha] = useState();
    const [RepSenha, SetRepSenha] = useState()
    const [Resposta, SetResposta] = useState([])
    const [Erro, SetErro] = useState()
    const [ErroSenha, SetErroSenha] = useState()


    const handlePassword1 = (e) => {
        setSenha(e.target.value);
        if(e.target.value === RepSenha){
          SetErroSenha(false);
        }else{
          SetErroSenha(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const resposta = {"usuario":usuario, "email":email, "cpf":cpf, "Senha":Senha};

        axios.post("http://localhost:5000/cadastro", resposta)
        .then((resp) => {
          SetResposta(resp.data);
          console.log(resp.data);
          if(resp.data.erros === null){
            navigate('/login')
          }else{
            SetErro(true);
          }
        })
        .catch(err => console.log(err))
        .finally(setTimeout(() => {SetErro(null)}, 2000))
    }

    return (
        <>
        <Navbar />
            <div className="container">
      <div className="card">
        {Erro && <div className="erros">Cpf/email já cadastrado</div>}
        {ErroSenha && <div className="erros">Senha incompativeis</div>}
        <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label for="nome">Nome de Usuário:</label>
            <input type="text" id="nome" required onChange={
                (e) => {
                    setUsuario(e.target.value);
                }
            }/>
          </div>
          <div className="form-control">
            <label for="email">E-mail:</label>
            <input type="email" id="email" required onChange={
                (e) => {
                    setEmail(e.target.value);
                }
            }/>
          </div>
          <div className="form-control">
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" required onChange={
                (e) => {
                    setCpf(e.target.value);
                }
            }/>
          </div>
          <div className="form-control">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" required onChange={handlePassword1}/>
          </div>
          <div className="form-control">
            <label for="confirma-senha">Confirme sua senha:</label>
            <input type="password" id="confirma-senha" required onChange={
                (e) => {
                    SetRepSenha(e.target.value);
                    if(e.target.value === Senha){
                      SetErroSenha(false);
                    }else{
                      SetErroSenha(true);
                    }
                }
            }/>
          </div>
          <button disabled={Senha !== RepSenha} type="submit">Cadastrar</button>
          </form>
        <a className="cadlnk" href="/login">Login</a>
      </div>
    </div>
        </>
    );
}

export default Cadastro;
