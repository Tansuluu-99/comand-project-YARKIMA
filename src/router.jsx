import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Layoutwo from "./components/Layoutwo/Layoutwo";
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
import Author from "./components/Author/Author";
import Trust from "./components/trust/Trust";
import Katolog from "./pages/Katolog";
import Figure from "./components/Figure/Figure";
import HexBanner from "./components/hex-banner/HexBanner";
import Popular from "./components/popular/Popular";
import CubeLanguage from "./components/cubeLanguage/CubeLanguage";
import FirstCourse from "./components/firstCourse/FirstCourse";
import Description from "./components/description/Description";
import AboutRewievs from "./components/AboutReviews/AboutRewievs";
import Informatoin from "./components/inphormation/Informatoin";
import Add__info from "./components/add_info/Add__info";
import Hexagonid from "./components/HexagonId/Hexagonid";
import Personal from "./components/personal/Personal";
import Public from "./components/Public/Public";

import History from "./pages/History";
import HeaderTwo from "./components/HeaderTwo/HeaderTwo";
import EnglandCom from "./pages/EnglandCom";
import England from "./components/England/England";
import German from "./components/German/German";
import GermanCom from "./pages/GermanCom";
import FranceCom from "./pages/FranceCom";
import France from "./components/France/France";
import ChinaCom from "./pages/ChinaCom";
import JaponCom from "./pages/JaponCom";
import NewHeader from "./pages/NewHeader";
import History from "./pages/History"
import Price from "./components/Price/Price";
import Language from "./components/language/Language";
import RegistrationP from "./components/registration/Registration"
import Register from "./components/registration2/Register"
import Registration from "./components/registration3/Registration";
import RegistrationW from "./components/registration4/Registration";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/AboutCourse", element: <AboutCourse /> },
            { path: "/about", element: <About /> },
            { path: "/history", element: <History /> },
            { path: "/cube", element: <Cube /> },
            { path: "/main", element: <Main /> },
            { path: "/service", element: <Service /> },
            { path: "/code", element: <Code /> },
            { path: "/course", element: <Course /> },
            { path: "/banner", element: <Banner /> },
            { path: "/recommendation", element: <Recommendation /> },
            { path: "/author", element: <Author /> },
            { path: "/trust", element: <Trust /> },
            { path: "/catalog", element: <Katolog /> },
            { path: "/figure", element: <Figure /> },
            { path: "/personal", element: <Personal /> },
            { path: "/language", element: <Language /> },
            { path: "/hexbanner", element: <HexBanner /> },
            { path: "/popular", element: <Popular /> },
            { path: "/cubelanguage", element: <CubeLanguage /> },
            { path: "/firstCourse", element: <FirstCourse /> },
            { path: "/description", element: <Description /> },
            { path: "/price", element: <Price /> },
            { path: "/aboutReviews", element: <AboutRewievs /> },
            { path: "/information", element: <Informatoin /> },
            { path: "/add__info", element: <Add__info /> },
            { path: "/england", element: <England /> },
            { path: "/englandcom", element: <EnglandCom /> },
            { path: "/german", element: <German /> },
            { path: "/germancom", element: <GermanCom /> },
            { path: "/france", element: <France /> },
            { path: "/FranceCom", element: <FranceCom /> },
            { path: "/FranceCom", element: <FranceCom /> },
            { path: "/chinacom", element: <ChinaCom /> },
            { path: "/japoncom", element: <JaponCom /> },

           
        ],
        
        
    },
    { path: "/newHeader", element: <NewHeader /> },
    { path: "/hexagonId/id", element: <Hexagonid /> },



    // { path: "/LogIn", element: <RegistrationP /> },
    // { path: "/LogIn2", element: <Register /> },
    // { path: "/public", element: <Public /> },
]);

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/AboutCourse",
                element: <AboutCourse />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/history",
                element: <History />
            },
            {
                path: "/cube",
                element: <Cube />
            },
            {
                path: "/main",
                element: <Main />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/code",
                element: <Code />
            },
            {
                path: "/course",
                element: <Course />
            },
            {
                path: "/banner",
                element: <Banner />
            },
            {
                path: "/recommendation",
                element: <Recommendation />
            },
            {
                path: "/author",
                element: <Author />
            },
            {
                path: "/trust",
                element: <Trust />
            },
            {
                path: "/catalog",
                element: <Katolog />
            }, {
                path: "/figure",
                element: <Figure />
            },
            {
                path: "/personal",
                element: <Personal />
            },
            {
                path: "/language",
                element: <Language />
            },
            {
                path: "/hexbanner",
                element: <HexBanner />
            },
            {
                path: "/popular",
                element: <Popular />
            },
            {
                path: "/language",
                element: <Language />
            },
            {
                path: "/cubelanguage",
                element: <CubeLanguage />
            },
            {
                path: "/firstCourse",
                element: <FirstCourse />
            },
            {
                path: "/description",
                element: <Description />
            },
            {
                path: "/price",
                element: <Price />
            },
            {
                path: "/aboutReviews",
                element: <AboutRewievs />
            },
            {
                path: "/information",
                element: <Informatoin />
            },
            {
                path: "/add__info",
                element: <Add__info />
            },
            {
                path: "/personal",
                element: <Personal />
            },
            {
                path: "/public",
                element: <Public />
            },
        ]
    },
    {
        path: "/LogIn",
        element: <RegistrationP />
    },
    {
        path: "/LogIn2",
        element: <Register />
    },
    {
        path: "/LogIn3",
        element: <Registration/>
    },
    {
        path: "/LogIn4",
        element: <RegistrationW/>
    },
    {
        path: "/hexagonId/id",
        element: <Hexagonid />
    },
])
