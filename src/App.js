import './App.css';
import {Routes, Route } from "react-router-dom";
import { RouteProvider, RouteProviderLog } from "./Components/RouteProvider";
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
          element={<RouteProviderLog><Login /></RouteProviderLog >}
        />
        <Route
          path='/cadastro'
          element={<RouteProviderLog><Cadastro /></RouteProviderLog >}
        />

        <Route
          path='/produto'
          element={<RouteProvider><Produto /></RouteProvider>}
        />
    </Routes>
  );
}

export default App;
