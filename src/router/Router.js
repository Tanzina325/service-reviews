import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddAService from "../pages/AddAService";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:
        
              [ { path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:() => fetch('https://b6a11-service-review-server-side-tau.vercel.app/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://b6a11-service-review-server-side-tau.vercel.app/services/${params.id}`)
            },
            {
                path:'/services/add',
                element:<PrivateRoute><AddAService></AddAService></PrivateRoute>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
           
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
    ]}
])