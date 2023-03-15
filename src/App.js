import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

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
    </Routes>
  );
}

export default App;
