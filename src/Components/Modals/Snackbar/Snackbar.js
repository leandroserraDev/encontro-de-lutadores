import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react"


export default function Snackbar({ message, timeOut, open, tipoAlerta }) {
    const [cssTransition, setcssTransition] = useState(open? 'visibility' : 'hidden')
    const [openSnackBar, setOpenSnackBar] = useState(false);

    const [openSnack, setOpenSnack] = useState(open);

    useEffect(() => {

        if(openSnack){
            setcssTransition("visibility")

        }else{
        setcssTransition("hidden")

        }

        setTimeout(() => {
                setcssTransition("hidden");
                setOpenSnackBar(false);

        }, timeOut);


    }, [])


    return (

        <div className={`
    flex 
    ${cssTransition}
      mb-1
      transition-all
       ease-in-out
       duration-1000
    text-white  
    justify-center 
    items-center  
      text-[10pt]
    ${tipoAlerta === 0 ? "bg-red-600" : tipoAlerta === 1 ? "bg-green-700" :

                "bg-gray-600"
            } 
    p-1 
    rounded-sm 
    shadow-md 
    w-full 
    h-[50px]  `}>
        <span className="w-full">
        {message}

        </span>


<div onClick={() => setcssTransition('hidden')} 
            className=" cursor-pointer  right-0 top-0">
<IoIosClose size={25}/>
            </div>

        </div>)
}