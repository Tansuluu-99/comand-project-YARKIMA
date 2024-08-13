import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Code from "./pages/Code";
import Banner from "./components/Banner/Banner"
import Recommendation from "./components/Recommendation/Recommendation";
import Author from "./components/Author/Author"
import Trust from "./components/trust/Trust";



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
            
            
           
            
        ]
    }
])