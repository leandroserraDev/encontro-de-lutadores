import { useState } from "react"


export default function ModalErrorCreateUser({mensagensError}){

console.log(mensagensError);
const[openModal, setOpenModal] = useState(true);

    return (
    
    <div
    onClick={() => console.log("teste")}
    className="flex  
    flex-col
    fixed 
    w-full 
    h-full 
    bg-gray-200 
        bg-opacity-75
    justify-center 
    items-center 
     transition-all
     duration-500
    ">

        <div className="flex absolute z-0\ flex-col justify-center  text-center  w-[350px] h-[300px] bg-white rounded   opacity-100">

                {mensagensError && mensagensError.map((value, index) =>{
                    return (
                    <div key={index}>
                        <span>
                        {value}

                        </span>
                    </div>)
                })}
        
        </div>
    
    </ div>)
}