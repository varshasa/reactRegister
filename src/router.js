import {createBrowserRouter} from "react-router-dom" ;
import Signup from "./components/Signup";
import Login from "./components/Login";
import App from "./App";

const router = createBrowserRouter([
    {path:'' ,element:<Login/>} ,
    {path:'Signup',element:<Signup/>}
]) ;

export default router ;