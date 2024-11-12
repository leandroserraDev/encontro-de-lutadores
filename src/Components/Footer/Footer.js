import imagemLutadores from '../../fight-png-17924.png'
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className="mt-2
        p-1 rounded
        w-full
        bg-blue-100
        flex
        justify-center
        text-black
        items-center
        h-[50px]
         min-h-[50px]
        max-h-[50px]
           bottom-0
            
        ">
            <FaInstagramSquare
                color='#DD2A7B'
                size={20}
                class="hover:scale-105" />
        </footer>
    )
}