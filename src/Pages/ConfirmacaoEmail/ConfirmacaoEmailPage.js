


import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import '../../input.css';
import LogoComponent from '../../Components/LogoTelasLoginEmail/LogoComponent.js';
import Footer from '../../Components/Footer/Footer.js';

function ConfirmacaoEmailPage() {

    const [searchParams] = useSearchParams();
    const [userParamData] = useState({
        userID:searchParams.get("userID"),
        token: searchParams.get("token")
    });
    const [disabledButtonPaginaInicial, setDisabledButtonPaginaInicial] = useState(true);

    const [errorAPI, setErrorAPI] = useState([]);


    const [mensagemRetorno, setMensagemRetorno] = useState(<>
          <h2>Confirmação de E-mail</h2>
                <br></br>
                <p>Obrigado por confirmar seu e-mail! Sua conta no Clube da Luta foi ativada com sucesso.</p>
                <p>Agora você está pronto para explorar todas as funcionalidades da aplicação.</p>
              
    </>);
    const logarEEntrar = ()=>{

        navigate({ pathname: "/" });

    }

    useEffect(() => {

        fetch(`${process.env.REACT_APP_URI_API}/identity/confirmar-email`,{
            method: "POST",
            body: JSON.stringify({userID: userParamData.userID, token: userParamData.token}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {

            return response.json();
        }

        )
        .then(data => {
            if (data.success) {
                setDisabledButtonPaginaInicial(false);
                alert("Validação concluída");
            }else{
                alert("Houve um error na validação");
              
            setErrorAPI(data)

            }
         
        })
        .catch(error => console.error(error));
    }, [userParamData])

    const navigate = useNavigate();

    return (
        <div className="flex 
        flex-column
        w-full
        items-center 
        min-h-[568px]
        max-h-[1280px]
        ">

       <LogoComponent/>
            <div className='flex 
            flex-col 
            items-center
             self-center
              text-center
             max-w-[400px]
            h-[100%]'>

                <div className=' flex 
                flex-col  
                h-[65%] 
                 bg-blue-50
                 shadow-md
                m-2
                p-2
                rounded
                max-h-[224px]
                min-h-[224px]

                '>
          {mensagemRetorno}
                </div>

              <div className='w-full'>
              <p>Bem-vindo ao Clube da Luta!</p>
              <button 
                disabled={disabledButtonPaginaInicial}
              onClick={() => logarEEntrar()}
              className={`cursor-pointer
                  self-center
                bg-blue-500
              rounded-md
              m-1
              p-2
             text-white
             w-[70%]
             ${disabledButtonPaginaInicial ? "cursor-not-allowed opacity-50": ""}
             `}>Ir para a página inicial</button>
              
              </div>
        

            </div>

            <Footer/>
        </div>

    )
}

export default ConfirmacaoEmailPage;