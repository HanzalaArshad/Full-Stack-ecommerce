import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartBook from "../pages/books/CartBook";
import CheckOut from "../pages/books/CheckOut";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      
      {
        path:"/",
        element: <Home/>

      },
      {
        path:"/about",
        element: <h1>About</h1>

      },
      {
        path:"/Login",
        element: <Login/>

      },
      {
        path:"/register",
        element: <Register/>

      },
      {
        path:"/cart",
        element:<CartBook/>
      },
      {
        path:"/checkout",
        element:<CheckOut/>
      
      }
  ]
  }
])

export default router