import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Error from "../components/Error/Error";
import PrivateRoute from "../Route/PrivaterRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },

            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            {
                path: 'send-Parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'my-orders',
                Component: MyOrders

            }
        ]
    }

]);