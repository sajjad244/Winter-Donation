import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import Card from "../pages/Card";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Login/Login";
import DetailsPage from "../pages/DetailsPage";
import Registration from "../components/Registration/Registration";
import AuthLayout from "../layout/AuthLayout";
import PrivetRoute from "./PrivetRoute";
import ForgetPassword from "../components/ForgetPassword ";
import Dashboard from "../components/Dashboard/Dashboard";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <DonationCampaigns></DonationCampaigns>,
        loader: () => fetch("/division.json"),
        children: [
          {
            path: "",
            element: <Card></Card>,
            loader: () => fetch("/donation.json"),
          },
          {
            path: "/donation/card/:division",
            element: <Card></Card>,
            loader: () => fetch("/donation.json"),
          },
          {
            path: "card/id/:id",
            element: (
              <PrivetRoute>
                <DetailsPage></DetailsPage>
              </PrivetRoute>
            ),
            loader: () => fetch("/donation.json"),
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/registration",
            element: <Registration></Registration>,
          },
          {
            path: "/auth/forgetPassword",
            element: <ForgetPassword></ForgetPassword>,
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

export default router;
