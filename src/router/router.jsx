import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import Card from "../pages/Card";
import ErrorPage from "../pages/ErrorPage";
import Login from "../components/Login/Login";
import DetailsPage from "../pages/DetailsPage";

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
            element: <DetailsPage></DetailsPage>,
            loader: () => fetch("/donation.json"),
          },
        ],
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
