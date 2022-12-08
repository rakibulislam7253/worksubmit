import { createBrowserRouter } from "react-router-dom";
import Attendence from "../page/Attendence/Attendence";
import Login from "../page/Login/Login";
import Signup from "../page/signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Signup></Signup> 
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/attendence',
        element:<Attendence></Attendence>
    }
])
export default router;