import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../input.css';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

function Login({ data }) {

  const navigate = useNavigate();
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
    <div className="flex flex-column  w-full h-[100%] items-center ">

      <form className="flex flex-col  " onSubmit={handleSubmit(data => submitData(data))}>
        <ul className="flex flex-col p-0">


          <div class="w-full max-w-sm min-w-[200px]">
            <label for="E-mail" class="block text-[10pt] text-gray-900 dark:text-white">E-mail</label>

            <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 transition duration-300 ease focus:outline-none  hover:border-slate-300  shadow-sm focus:shadow h-[30px] focus:ring-blue-500 focus:border-blue-500" placeholder="E-mail..."
              type='email'
              {...register("email", { required: "Please enter your email." })} // custom message
            />

          </div>

          <div class="w-full max-w-sm min-w-[200px]">
            <label for="Password" class="block text-[10pt] text-gray-900 dark:text-white">Password</label>

            <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-xl px-3  transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-[30px] " placeholder="Password..."
              type='password'
              {...register("password", { required: "Please enter your password." })} // custom message
            />

          </div>
        </ul>

        <input type="submit" class="w-100% border rounded" />
        {
          errorAPI.error && errorAPI.error.map((item, index) => {
            return (
              <li className=' h-[20px]  text-red-500' key={item.id}>
                <span>
                  {item.message}
                </span>
              </li>
            )
          })
        }
      </form>
    </div>

  )
}

export default Login;