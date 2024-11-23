import { useState } from "react"
import Snackbar from "./Snackbar"


export default function SnackbarHome ({arrayMensagem, tipoAlerta}){
    const[tipoAlertaSnackBar, setTipoAlertaSnackBar] = useState(tipoAlerta != null ? tipoAlerta : 2);

    console.log(arrayMensagem);
    return (
        
      <div className="flex m-0  bottom-0 flex-col absolute w-full  ">

        {
arrayMensagem && 
arrayMensagem.map((item, index) => {
    return ( 
    <Snackbar 
    tipoAlerta={tipoAlerta}
    open={ true } 
    message={item} 
    timeOut={(index == 0 ? 1 : index + 1) * 2000} />
   
   )
})
        }




      </div>
)

}