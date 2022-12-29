import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Media from "../Components/Media/Media ";
import Message from "../Components/Message/Message";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/media",
                element: <Media></Media>
            },
            {
                path: "/message",
                element: <Message></Message>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }
])