import '../../input.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer.js";
import LogoComponent from "../../Components/LogoTelasLoginEmail/LogoComponent.js";
import { CreateUser } from '../../Services/IdentityService.js'
import ModalErrorCreateUser from '../../Components/Modals/ModalErrorCreateNewUser.js';
import identityServiceInstance from "../../Services/IdentityService"
import Snackbar from '../../Components/Modals/Snackbar/Snackbar.js';

function AuthPageNovaConta() {

    const navigate = useNavigate();
    const back = () => navigate("/auth");
    const [openModalError, setOpenModalError] = useState(false);
    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    });
    const [errorAPI, setErrorAPI] = useState([]);

    async function submitData(data) {
        var response = await identityServiceInstance.CreateUser(data);

        if (response.success) {
        }
        else {
            setErrorAPI(response);
            setOpenModalError(true);
        }
    }

    return (
        <div className="flex 
        flex-column
        w-full
        items-center 
        min-h-[568px]
        max-h-[1280px]">

            <LogoComponent />



            <form className="flex 
            flex-col
            h-[350px]
            justify-center "

                onSubmit={handleSubmit(data => submitData(data))}>
                <ul className="flex flex-col p-0">

                    <div class="w-full 
                    max-w-sm
                    min-w-[200px]">

                        <input class="w-full
                        bg-transparent
                        placeholder:text-slate-400
                        text-slate-700 text-sm border
                        border-slate-200 
                        rounded-xl
                        px-3
                         transition
                         duration-300
                         ease
                         focus:outline-none
                         focus:border-slate-400
                         focus:shadow
                         shadow-sm
                         hover:border-slate-300
                         h-[30px] " placeholder="Nome..."
                            type='text'
                            {...register("nome", { required: "Nome é obrigatório." })} // custom message
                        />

                    </div>
                    <div class="w-full 
                    max-w-sm
                    min-w-[200px]">

                        <input class="w-full
                        bg-transparent
                        placeholder:text-slate-400
                        text-slate-700 text-sm border
                        border-slate-200 
                        rounded-xl
                        px-3
                         transition
                         duration-300
                         ease
                         focus:outline-none
                         focus:border-slate-400
                         focus:shadow
                         shadow-sm
                         hover:border-slate-300
                         h-[30px] " placeholder="Sobrenome..."
                            type='text'
                            {...register("sobrenome", { required: "Sobrenome é obrigatório." })} // custom message
                        />

                    </div>

                    <div class="w-full 
                    max-w-sm
                    min-w-[200px]
                    mb-2">

                        <input class="w-full 
                        bg-transparent 
                        placeholder:text-slate-400 
                        text-slate-700 
                        text-sm border
                      border-slate-200
                        rounded-xl 
                        px-3
                        h-[30px]
                        transition
                        duration-300
                        ease
                        hover:border-slate-300
                        focus:ring-blue-500
                        focus:border-blue-500
                        focus:outline-none
                        focus:shadow
                        shadow-sm 
                        "
                            placeholder="E-mail..."
                            type='email'
                            {...register("email",
                                { required: "E-mail é obrigatório." })}
                        // custom message
                        />

                    </div>

                    <div class="w-full 
                    max-w-sm
                    min-w-[200px]">

                        <input class="w-full
                        bg-transparent
                        placeholder:text-slate-400
                        text-slate-700 text-sm border
                        border-slate-200 
                        rounded-xl
                        px-3
                         transition
                         duration-300
                         ease
                         focus:outline-none
                         focus:border-slate-400
                         focus:shadow
                         shadow-sm
                         hover:border-slate-300
                         h-[30px] " placeholder="Password..."
                            type='password'
                            {...register("password", { required: "Password é obrigatório." })} // custom message
                        />

                    </div>
                </ul>

                <button
                onClick={() => console.log(openModalError)}
                    class="w-[150px]
                    h-[30px]
                    Login
                    bg-blue-400
                    text-white
                          hover:scale-105
                            duration-150
                            mb-1
                            self-center 
                            rounded-full
                            font-bold 
                    "
                    type="submit"
                > Cadastrar </button>
                <button
                    onClick={() => back()}
                    className="w-[150px]
                    h-[30px]
                    Login
                    bg-gray-500
                    text-white
                          hover:scale-105
                            duration-150
                            mb-1
                            self-center 
                            rounded-full
                            font-bold 
                    "
                    type="submit"
                > Voltar </button>

            </form>

            <Footer />
            <div className='flex top-0 flex-col absolute '>

                {openModalError &&


                   errorAPI.errors.map((item, index) => {
                    console.log(item)
                        return ( <div key={index} > <Snackbar open={ openModalError } message={item} timeOut={(index == 0 ? 1 : index + 1) * 2000} /></div>)
                    })




                }
            </div>


            {/* {openModalError && <ModalErrorCreateUser mensagensError={errorAPI}/>} */}
            {/* {errorAPI.erros && errorAPI.errors.map((value, index) => {
                return (
                    <div key={index}>
                    <Snackbar  message={value}/>

                        </div>

                )
            })   } */}
        </div>

    )
}

export default AuthPageNovaConta;