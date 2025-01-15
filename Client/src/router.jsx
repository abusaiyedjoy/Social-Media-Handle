import { createBrowserRouter } from "react-router-dom";
import Root from './root';
import App from './App';
import Dashboard from "./Dashboard/Dashboard";
import AdminLogin from "./Dashboard/AdminLogin";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index: true,
                element: <App></App>
            },
            {
                path: "/adminLogin",
                element:<AdminLogin></AdminLogin>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])