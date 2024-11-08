import { jwtDecode } from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    const token = localStorage.getItem("token");

    if(token != null){
       var decodeToken =  jwtDecode(token);



       console.log(decodeToken);
  console.log(decodeToken.expToken < new Date())
  
       var utcSeconds = decodeToken.exp;
       var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
       d.setUTCSeconds(utcSeconds);
  
       
    }

   return (
     ( decodeToken && decodeToken.expToken) < new Date() ?  <Outlet/> : <Navigate to ="/auth"/>        
   )
}

export default PrivateRoutes;