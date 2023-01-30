import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Layout/Main";
import Table from "../components/Table";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Register />
            },
            {
                path: '/billing-list',
                element: <Table />
            }
        ]
    }
])

export default router;