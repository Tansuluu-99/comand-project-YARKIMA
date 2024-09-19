import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetail from './components/CourseDetail/CourseDetail';
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
import HexBanner from "./components/hex-banner/HexBanner";
import Popular from "./components/popular/Popular";
import Language from "./components/language/language";
import CubeLanguage from "./components/cubeLanguage/CubeLanguage";
import FirstCourse from "./components/firstCourse/FirstCourse";
import Description from "./components/description/Description";
import Price from "./components/Price/price";
import AboutRewievs from "./components/AboutReviews/AboutRewievs";
import Hexagonid from "./components/HexagonId/Hexagonid";
import Personal from "./components/personal/Personal";
import Public from "./components/Public/Public";
import History from "./pages/History"
import Check from "./components/check/Check";
import English from "./components/English/English";
import EnglishE from './pages/EnglishE'
import Germany from "./pages/Germany";
import GermanG from "./components/germanG/GermanG";
import France from "./pages/France";
import Franch from "./components/Franch/Franch";
import Chinese from "./components/Chinese/Chinese";
import China from "./pages/China";
import Japan from "./pages/Japan";
import Japanese from "./components/Japanese/Japanese";

export const router = createBrowserRouter([
    {


        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/englishE",
                element: <EnglishE/>
            },
            {
                path: "/germany",
                element: <Germany/>
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
                path: "/katolog",
                element: <Katolog />
            },
             {
                path: "/figure",
                element: <Figure />
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
                element: <Language />,

            },
            {
                path: "/cubelanguage",
                element: <CubeLanguage />,
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
                path: "/personal",
                element: <Personal />
            },
            {
                path: "/public",
                element: <Public />
            },
            {
                path: "/check",
                element: <Check />
            },
            {
                path: "/english",
                element: <English />
            },
            {
                path: "/germang",
                element: <GermanG />
            },
            {
                path: "/france",
                element: <France />
            },
            {
                path: "/franch",
                element: <Franch />
            },
            {
                path: "/chinese",
                element: <Chinese />
            },
            {
                path: "/china",
                element: <China />
            },
            {
                path: "/japanese",
                element: <Japanese />
            },
            {
                path: "/Japan",
                element: <Japan />
            },



        ]
    },
    // <Router>
    //   <Routes>
    //     <Route path="/cubelanguage" element={<CubeLanguage />} />
    //     <Route path="/course/:id" element={<CourseDetail />} /> 
    //   </Routes>
    // </Router>
    // // {
    // //     path:"/hexagonId/id",
    // //     element: <Hexagonid/>
    // // }
])