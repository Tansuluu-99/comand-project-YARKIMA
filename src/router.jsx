import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Code from "./pages/Code";



import Banner from "./components/Banner/Banner";


import Recommendation from "./components/Recommendation/Recommendation";
import Author from "./components/Author/Author"
import Trust from "./components/trust/Trust";

import Katolog from "./pages/Katolog";

import Figure from "./components/Figure/Figure";
import RegistrationP from "./pages/RegistrationP";
import Register from "./components/registration2/Register";
import PersonalP from "./pages/PersonalP";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/main",
                element: <Main/>
            },
            {
                path: "/service",
                element: <Service/>
            },
            {
                path: "/code",
                element: <Code/>
            },
            {
                path: "/banner",
                element: <Banner/>
            },
            {
                path: "/recommendation",
                element: <Recommendation/>
            },
            {
                path: "/author",
                element: <Author/>
            },
            {
                path: "/trust",
                element: <Trust/>
            },
            {
                path: "/katolog",
                element: <Katolog/>
            },{
                path: "/figuree",
                element: <Figure/>
            },
            {
                path: "/LogIn",
                element: <RegistrationP/>
            },
            {
                path: "/LogIn2",
                element: <Register/>
            },
            {
                path: "/personal",
                element: <PersonalP/>
            }
        ]
    }
])