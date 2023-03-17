import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produto from './pages/Produto';

function App() {
  return (
    <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path='/cadastro'
          element={<Cadastro />}
        />

        <Route
          path='/produto'
          element={<Produto />}
        />
    </Routes>
  );
}

export default App;
