import React, {useRef, useLayoutEffect, useState} from "react";
import "../styles/Navbarstyle.css";

function Navbar(){

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
                    <a className="logo" href="/">Logo</a>
                    <div ref={conteinerRef} className="mobilemenu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul ref={navlist} className="navlist">
                        <li><a href="/">Texto1</a></li>
                        <li><a href="/">Texto2</a></li>
                        <li><a href="/">Texto3</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
