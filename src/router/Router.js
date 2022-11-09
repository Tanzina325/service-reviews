import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

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
            // {
            //     path:'/courses',
            //     element:<Courses></Courses>,
            //     loader:() => fetch('https://b610-lerning-platform-server-side-blond.vercel.app/courses')
            // },
            // {
            //     path:'/course/:id',
            //     element:<CourseDetails></CourseDetails>,
            //     loader:({params})=>fetch(`https://b610-lerning-platform-server-side-blond.vercel.app/courses/${params.id}`)
            // },
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