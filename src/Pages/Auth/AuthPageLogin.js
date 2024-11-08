import AuthPage from "./AuthPage.js";

import image from '../../fight-png-17964.png'

import imagemLutadores from '../../fight-png-17924.png'
import { FaInstagramSquare } from "react-icons/fa";
import '../../input.css';
import Button from '../../Components/Button.js'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

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
                    localStorage.setItem("id", decodeToken.sid);
                    localStorage.setItem("userName", decodeToken.name);
                    localStorage.setItem("email", decodeToken.email);


                    var utcSeconds = decodeToken.exp;
                    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                    d.setUTCSeconds(utcSeconds);
                    localStorage.setItem("expToken", d);

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
        h-full
        items-center ">

            <img className="w-50
            h-40
            self-center
            mt-14"
                src={image} height={50} width={50} />

            <div className="  flex flex-col w-full h-[100px] items-center ">
                <h2 className="mb-[-2px] ">Bem-Vindo</h2>
                <span className=" text-center text-[7pt] text-gray-400">Encontre seu novo combate</span>

            </div>

            <form className="flex 
            flex-col
            h-[400px]
            justify-center "

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

                <Button
                    width={"w-[150px]"}
                    height={"h-[30px]"}
                    text={"Login"}
                    bgColor={"bg-blue-400"}
                    textColor={"text-white"} 
                    type="submit" 
                    class="w-100% 
                    border
                    rounded " />
                <Button

                    funcOnClick={() => back()}

                    width={"w-[150px]"}
                    height={"h-[30px]"}
                    text={"Voltar"}
                    bgColor={"bg-gray-400"}
                    textColor={"text-white"} 
                    type="button" 
                    class="w-100% border rounded " />
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
            <footer className="mt-2
            p-1 rounded
            w-full
            bg-blue-100
            flex
            justify-center
            text-black
            items-center">
                <FaInstagramSquare 
                color='#DD2A7B'
                size={20}
                class="hover:scale-105" />
            </footer>
        </div>

    )
}

export default AuthPageLogin;