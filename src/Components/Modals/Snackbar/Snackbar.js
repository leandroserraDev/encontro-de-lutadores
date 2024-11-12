import { useEffect, useState } from "react"


export default function Snackbar({ message, timeOut, open }) {
    const [cssTransition, setcssTransition] = useState('ml-0')
    const [openModalError, setOpenModalError] = useState(false);

    const [openSnack, setOpenSnack] = useState(open);

    useEffect(() => {
        setTimeout(() => {
            if (openSnack) {
                setcssTransition("vibility")

                setTimeout(() => {
                    setOpenSnack(false);
                    setcssTransition("hidden");
                }, timeOut + 1000)
            }

        }, timeOut);

        setOpenModalError(false);

    }, [])


    return (

        <div className={`
    flex 
    ${cssTransition}
     top-0
      mb-1
       text-center
      transition-all
       duration-1000
         ease-in-out
    text-white  
    justify-center 
    items-center  
    bg-gray-600 
    p-1 
    rounded-sm 
    shadow-md 
    w-full 
    h-[50px]  `}>
            {message}
        </div>)
}