import './App.css';
import {Routes, Route } from "react-router-dom";
import { RouteProvider, RouteProviderLog, RouteProviderVend } from "./Components/RouteProvider";
import Home from "./pages/Home.jsx";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Produto from './pages/Produto';
import LogAdmin from './pages/admin/LogAdmin';
import Addprod from './pages/Addprod';

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
          element={
          <RouteProviderLog>
            <Cadastro />
          </RouteProviderLog >}
        />

        <Route
          path='/produto'
          element={
          <RouteProvider>
            <Produto />
          </RouteProvider>}
        />

        <Route
          path='/addprod'
          element={
          <RouteProvider>
            <RouteProviderVend>
              <Addprod />
            </RouteProviderVend>
          </RouteProvider>}
        />

        <Route
          path='/auth/admin'
          element={<LogAdmin />}
        />

    </Routes>
  );
}

export default App;
