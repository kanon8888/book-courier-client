import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Error from "../components/Error/Error";
import PrivateRoute from "../Route/PrivaterRoute";
// import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import AllBook from "../pages/AllBook/AllBook";
import BookDetails from "../pages/AllBook/BookDetails";
import AddBook from "../pages/AllBook/AddBook";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import SendBook from "../pages/SendBook/SendBook";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/paymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageBooks from "../pages/Dashboard/Admin/ManageBooks";
import MyProfilel from "../pages/Dashboard/Admin/MyProfilel";
import AddBooks from "../pages/Dashboard/Librarian/AddBooks";
import MyBooks from "../pages/Dashboard/Librarian/MyBooks";
import Orderss from "../pages/Dashboard/Librarian/Orderss";
import AboutUs from "../pages/AboutUs/AboutUs";




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
                path: 'about-us',
                Component: AboutUs
            },

            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },
            // {
            //     path: 'send-Parcel',
            //     element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
            //     loader: () => fetch('/warehouses.json').then(res => res.json())
            // },
            {
                path: 'send-book/:id',
                element: <PrivateRoute><SendBook></SendBook></PrivateRoute>,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            },

            {
                path: 'all-Book',
                Component: AllBook
            },
            {
                path: 'add-Book',
                element: <AddBook></AddBook>
            },
            {
                path: 'allBook/:id',
                element: <BookDetails></BookDetails>
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

            },
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
                path: 'payment/:bookId',
                Component: Payment

            },
            {
                path: 'payment-history',
                Component: PaymentHistory
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled
            },
            {
                path: '/dashboard/admin/all-users',
                Component: AllUsers
            },
            {
                path: '/dashboard/admin/manage-books',
                Component: ManageBooks
            },
            {
                path: '/dashboard/admin/profile',
                Component: MyProfilel
            },
            {
                path: '/dashboard/librarian/add-books',
                Component: AddBooks
            },
            {
                path: '/dashboard/librarian/my-books',
                Component: MyBooks
            },
            {
                path: '/dashboard/librarian/orderss',
                Component: Orderss
            }

        ]
    }

]);