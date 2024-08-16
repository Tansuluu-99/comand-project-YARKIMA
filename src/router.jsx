import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Code from "./pages/Code";
import Course from "./pages/course";



import Banner from "./components/Banner/Banner";


import Recommendation from "./components/Recommendation/Recommendation";
import Author from "./components/Author/Author"
import Trust from "./components/trust/Trust";
import Figure from "./components/Figure/Figure";
import HexBanner from "./components/hex-banner/HexBanner";
import Popular from "./components/popular/Popular";
import Language from "./components/language/Language";


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
                path: "/course",
                element: <Course/>
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
                path: "/figuree",
                element: <Figure/>
            },  
            {
                path: "/hexbanner",
                element: <HexBanner/>
            }, 
            {
                path: "/popular",
                element: <Popular/>
            },  
            {
                path: "/language",
                element: <Language/>
            }, 
            
        ]
    }
])