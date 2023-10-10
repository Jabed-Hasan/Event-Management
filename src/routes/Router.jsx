
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('/Data.json')
            },
            {
                path: '/data/:id',
                element: <PrivateRoute>
                    <Details>
                    </Details>
                </PrivateRoute>,
                loader: () => fetch('/Data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            



        ]
    }
]);

export default routes;