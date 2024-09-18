import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Service from "./pages/Service";
import Code from "./pages/Code";
import Course from "./pages/course";
import Cube from "./pages/Cube";
import AboutCourse from "./pages/AboutCourse";


import Banner from "./components/Banner/Banner";


import Recommendation from "./components/Recommendation/Recommendation";
import Author from "./components/Author/Author"
import Trust from "./components/trust/Trust";

import Katolog from "./pages/Katolog";

import Figure from "./components/Figure/Figure";
import RegistrationP from "./pages/RegistrationP";
import Register from "./components/registration2/Register";
import PersonalP from "./pages/PersonalP";
import HexBanner from "./components/hex-banner/HexBanner";
import Popular from "./components/popular/Popular";
import CubeLanguage from "./components/cubeLanguage/CubeLanguage";
import FirstCourse from "./components/firstCourse/FirstCourse";
import Description from "./components/description/Description";
import Price from "./components/Price/Price";
import Language from "./components/language/Language";
import AboutRewievs from "./components/AboutReviews/AboutRewievs";
import Informatoin from "./components/inphormation/Informatoin";
import Add__info from "./components/add_info/Add__info";
import OrderHistory from "./components/orderHistory/OrderHistory";



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
                path: "/AboutCourse",
                element: <AboutCourse/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/cube",
                element: <Cube/>
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
                path: "/catalog",
                element: <Katolog/>
            },{
                path: "/figure",
                element: <Figure/>
            },
            {
                path: "/personal",
                element: <PersonalP/>
            },
            {
                path: "/language",
                element: <Language />
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
                path: "/cubelanguage",
                element: <CubeLanguage/>
            }, 
            {
                path: "/firstCourse",
                element: <FirstCourse/>
            }, 
            {
                path: "/description",
                element: <Description/>
            }, 
            {
                path: "/price",
                element: <Price/>
            }, 
            {
                path: "/aboutReviews",
                element: <AboutRewievs/>
            },
            {
                path: "/information",
                element: <Informatoin/>
            },
            {
                path: "/add__info",
                element: <Add__info/>
            },
            {
                path: "/OrderHistory",
                element: <OrderHistory/>
            }
        ]
    },
    {
        path: "/LogIn",
        element: <RegistrationP/>
    },
    {
        path: "/LogIn2",
        element: <Register/>
    }
])