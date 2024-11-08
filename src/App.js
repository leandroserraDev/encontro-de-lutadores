import logo from './logo.svg';
import './App.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoutes from './Protected/PrivateRoutes';
import AuthPage from './Pages/Auth/AuthPage.js'
import AuthPageHome from './Pages/Auth/AuthPageHome.js';
import AuthPageLogin from './Pages/Auth/AuthPageLogin.js';
import AuthPageNovaConta from './Pages/Auth/AuthPageNovaConta.js';
import PrivateRouteAuth from './Protected/PrivateRouteAuth.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children:[]
  
  },

  {
    path: "auth",
    element: <PrivateRouteAuth/>,
    children:[
      {
        path: '',
        element: <AuthPageHome/>,
        children:[
         
        ]
      },
      {
        path: 'login',
        element: <AuthPageLogin/>
      },
      {
        path: 'account/new',
        element: <AuthPageNovaConta/>
      }
    ]
  }
  
  


]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
