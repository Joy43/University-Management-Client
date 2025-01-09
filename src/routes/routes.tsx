import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Register from "../pages/Register";

import AdminLayout from "../components/layout/AdminLayout";
import Login from '../pages/Login';





const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    },
    // -------admin routes---------
    {
path:'/admin',
element:<App/>,
children:[
    {
        path:"dashboard",
        element:<AdminLayout/>
    }
]
    },
    {
    path: '/login',
    element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]);

export default router;