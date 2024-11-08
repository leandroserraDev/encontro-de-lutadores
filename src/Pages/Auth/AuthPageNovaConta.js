import AuthPage from "./AuthPage.js";

import image from '../../fight-png-17964.png'

import imagemLutadores from '../../fight-png-17924.png'
import { FaInstagramSquare } from "react-icons/fa";
import '../../input.css';
import Button from '../../Components/Button.js'

function AuthPageNovaConta() {
    return (
        <div className=" flex flex-col w-full h-full">
            <img className=" w-50 h-40 self-center mt-14" src={image} height={50} width={50} />

            <div className="  flex flex-col w-full  items-center h-[100px]">
                <h2 className="mb-[-2px] ">Bem-Vindo</h2>
                <span className=" text-center text-[7pt] text-gray-400">Encontre seu novo combate</span>

            </div>

            <div className="flex flex-col h-[400px] justify-center">
             
                <Button width={"w-[150px]"}  
                height={"h-[30px]"} 
                text={"Entrar"} 
                bgColor={"bg-blue-400"} 
                textColor={"text-white"}/>

                <Button 
                onClick={()=> alert()}
                  
                width={"w-[150px]"}  
                height={"h-[30px]"} 
                text={"Nova Conta"} 
                bgColor={"bg-blue-400"} 
                textColor={"text-white"}/>
      

            </div>

            <footer className=" mt-2 p-1 rounded  h-[100px] w-full bg-violet-100 flex justify-center text-black  items-center">
                <FaInstagramSquare color='#DD2A7B' size={20} class="hover:scale-105" />
            </footer>
        </div>
    )
}

export default AuthPageNovaConta;