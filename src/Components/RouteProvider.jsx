import react from "react";
import { Navigate } from "react-router-dom";

export function RouteProvider({children}){

    return sessionStorage.logado === 'true' ? children : <Navigate to="/login"/>
}

export function RouteProviderLog({children}){

    return sessionStorage.logado !== 'true' ? children : <Navigate to="/"/>
}

export function RouteProviderVend({children}){
    return sessionStorage.vendedor === 'true' ? children : <Navigate to="/"/>
}
