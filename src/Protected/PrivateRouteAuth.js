import { jwtDecode } from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";

export default function  PrivateRouteAuth(){
     const token = localStorage.getItem("token");

     if(token != null){
        var decodeToken =  jwtDecode(token);
        var utcSeconds = decodeToken.exp;
        var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
        d.setUTCSeconds(utcSeconds);
     }

    return (
     ( decodeToken && decodeToken.expToken) > new Date() ? <Navigate to ="/"/> : <Outlet/>      
    )
}
