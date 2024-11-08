import AuthPage from "./AuthPage";

import image from '../../fight-png-17964.png'

import imagemLutadores from '../../fight-png-17924.png'
import { FaInstagramSquare } from "react-icons/fa";
import '../../input.css';
import Button from '../../Components/Button.js'
import { Navigate, useNavigate } from "react-router-dom";

function AuthPageHome() {
    const navigate = useNavigate();

    const goToLogin = () =>navigate("login");
    const goToCreateNew = () =>navigate("account/new");

    
    return (
        <div className="flex flex-column  w-full h-full items-center">
            <img className=" w-50 h-40 self-center mt-14" src={image} height={50} width={50} />

            <div className="  flex flex-col w-full  items-center ">
                <h2 className="mb-[-2px] ">Bem-Vindo</h2>
                <span className=" text-center text-[7pt] text-gray-400">Encontre seu novo combate</span>

            </div>

            <div className="flex flex-col h-[500px] justify-center">
         
                <Button
                 funcOnClick={() => goToLogin()}
                width={"w-[150px]"}  
                height={"h-[30px]"} 
                text={"Entrar"} 
                bgColor={"bg-blue-400"} 
                textColor={"text-white"}/>

                <Button 
                   funcOnClick={() => goToCreateNew()}
                width={"w-[150px]"}  
                height={"h-[30px]"} 
                text={"Nova Conta"} 
                bgColor={"bg-blue-400"} 
                textColor={"text-white"}/>
      

            </div>

            <footer className=" mt-2 p-1 rounded  w-full bg-blue-100 flex justify-center text-black  items-center">
                <FaInstagramSquare color='#DD2A7B' size={20} class="hover:scale-105" />
            </footer>
        </div>
    )
}

export default AuthPageHome;