import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../styles/homestyle.css";
const req = require("../Components/requi");

function Home(){
    const [data, setdata] = useState([]);

    useEffect(()=>{
        req.getprod()
        .then((dados) => {
            setdata(dados);
            return setdata(dados.results);
        })
        .catch(err => console.log(err))

    }, [])
    return (
        <>
            <Navbar />
            <div class="card-container">
                {data.map(item => (
                  <div class="card">
                      <img src="https://via.placeholder.com/300x200" alt="Product Image"/>
                      <h2>{item.titulo}</h2>
                      <p class="description">{item.decricao}</p>
                      <p class="price">{item.preco}</p>
                      <a href={"/produto?id="+item.idprodutos}><button class="buy-btn">Buy Now</button></a>
                  </div>
                ))}
            </div>
        </>
    );
}

export default Home;
