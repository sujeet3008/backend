import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../components/Login/login.js'

const router=createBrowserRouter([
{

    path : "/" ,
    element : <App/>,
    children:[
        // {
        //     path:"",
        //     element:<Home/>

        // },
        {
            path:"login",
            element:<Login/>
        },
        {

        }
    ]
}

])

export default router;