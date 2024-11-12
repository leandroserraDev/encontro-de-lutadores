import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.js";
import LogoComponent from "../../Components/LogoTelasLoginEmail/LogoComponent.js";

function AuthPageHome() {
    const navigate = useNavigate();

    const goToLogin = () =>navigate("login");
    const goToCreateNew = () =>navigate("account/new");

    
    return (
        <div className="flex 
        flex-column
        w-full
        items-center 
        min-h-[568px]
        max-h-[1280px]
         transition-all
          duration-700
           visible
        ">
           <LogoComponent/>

            <div className="flex flex-col h-[500px] justify-center">
         
            <button
            onClick={() => goToLogin()}
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
                  > Login </button>
                <button
                onClick={() => goToCreateNew()}
                    className="w-[150px]
                    h-[30px]
                    Login
                    bg-blue-400
                    text-white
                          hover:scale-105
                            duration-150
                            
                            self-center 
                            rounded-full
                            font-bold 
                    "
                    type="submit"
                  > Nova Conta </button> 
      

            </div>
<Footer/>
        </div>
    )
}

export default AuthPageHome;