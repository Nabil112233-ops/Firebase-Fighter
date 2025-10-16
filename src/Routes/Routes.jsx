import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            }
        ]
    }
])