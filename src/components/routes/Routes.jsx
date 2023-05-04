import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home ";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Recipes from "../Pages/Recipes/Recipes";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: "/chefs/:id",
            element: <Recipes></Recipes>,
            loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    }
])

export default router;