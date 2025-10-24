import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout"; // مسیر دقیق Layout خودت
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import OTPVerification from "../pages/OTPVerification";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />, // 👈 تمام صفحات داخل Layout می‌افتند
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // هر صفحه‌ای که باید Header/Footer داشته باشد اینجاست
    ],
  },
  // و صفحاتی که نمی‌خواهی Layout داشته باشند (مثل login/signup)
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <OTPVerification />,
  },
]);

export default router;
