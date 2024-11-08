import { useEffect, useState } from 'react';
import '../../input.css';
import Login from './Login.js'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import gifLuta from '../../videoplayback.gif'


export default function AuthPage() {

    const mensagemInicial = "Bem-Vindo Lutador, entre no site para achar seu proximo adversário";
    const [novoUsuario, setNovoUsuario] = useState(false);
    const [textExibicao, setTextExibicao] = useState("");

   useEffect(()=>{

    let textTemp = "";
    
        mensagemInicial.split("").map((letter, index) =>{
            setTimeout(()=>{
                textTemp += letter;
                setTextExibicao(textTemp);
    
            },60 * index);

        })


   }, [])

    return (
        <div className='flex flex-col fixed    mt-[50px] h-[100vh] w-full '>

            <div class=" flex text-center  h-[50%]  justify-center flex-col self-center  mt-[10%]  rounded-xl
            ">
                <div class="m-3">
                    
                <h4 >{textExibicao}</h4>
                </div>
           

                <div class="flex flex-row  cursor-pointer  ">
                {/* <img src={gifLuta} /> */}

                {/* <FaFacebookSquare color='#3b5998' size={50} class="hover:scale-105" />
                <FaInstagramSquare color='#DD2A7B' size={50} class="hover:scale-105"/>
                <FaGoogle size={50} class="hover:scale-105"/> */}

                </div>
            </div>

            <Login />


        </div>
    )
}