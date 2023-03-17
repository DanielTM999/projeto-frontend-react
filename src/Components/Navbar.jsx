import React, {useRef, useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbarstyle.css";

function Navbar(){
    const navigate = useNavigate();
    const conteinerRef = useRef();
    const navlist = useRef();
    useLayoutEffect(() => {
        const handleClick = () => {
            navlist.current.classList.toggle('active');
            console.log(conteinerRef.current);
        };
        conteinerRef.current.addEventListener("click", handleClick);

        return () => {
            conteinerRef.current.removeEventListener("click", handleClick);
        };
    })

    return (
        <>
            <header>
                <nav>
                    {sessionStorage.logado !== 'true' && <h1><a href="/login">Login</a></h1>}
                    {sessionStorage.logado === 'true' && <h1>{sessionStorage.nome}</h1>}
                    <a className="logo" href="/">Logo</a>
                    <div ref={conteinerRef} className="mobilemenu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul ref={navlist} className="navlist">
                        <li><a href="/">Texto1</a></li>
                        {sessionStorage.vendedor === 'true' && <li><a className="vendas" href="/">Vender</a></li>}
                        <li><a href="/">Texto3</a></li>
                        {sessionStorage.logado === 'true' && <li><p className="logout" onClick={() => {
                            sessionStorage.logado = null;
                            sessionStorage.nome = null;
                            sessionStorage.email = null;
                            sessionStorage.cpf = null;
                            sessionStorage.vendedor = null;
                            navigate('/')
                        }}>Logout</p></li>}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
