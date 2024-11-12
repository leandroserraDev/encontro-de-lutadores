import '../../input.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer.js";
import LogoComponent from "../../Components/LogoTelasLoginEmail/LogoComponent.js";

function AuthPageLogin() {

    const navigate = useNavigate();
    const back = () => navigate("/auth");
    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    });
    const [errorAPI, setErrorAPI] = useState([]);

    async function submitData(data) {
        await fetch(`${process.env.REACT_APP_URI_API}/Auth`, {
            method: "POST",
            body: JSON.stringify(data),
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

                    var decodeToken = jwtDecode(data.data);

                    localStorage.setItem("token", data.data);

                    navigate({ pathname: "/" });
                }

                setErrorAPI(data)

            })
            .catch(error => console.error(error));
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
            justify-center 
            max-h-[350px]
            "

                onSubmit={handleSubmit(data => submitData(data))}>
                <ul className="flex flex-col p-0">
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
                                { required: "Please enter your email." })}
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
                            {...register("password", { required: "Please enter your password." })} // custom message
                        />

                    </div>
                </ul>

                <button
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
                > Entrar </button>
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
                {
                    errorAPI.error
                    &&
                    errorAPI.error.map((item, index) => {
                        return (
                            <li className='h-[20px]
                            text-red-500'
                                key={item.id}>
                                <span>
                                    {item.message}
                                </span>
                            </li>
                        )
                    })
                }
            </form>
            <Footer />
        </div>

    )
}

export default AuthPageLogin;