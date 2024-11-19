import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import AllDonation from "../components/AllDonation";
import Card from "../pages/Card";
import ErrorPage from "../pages/ErrorPage";

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
            path: "card/:division",
            element: <Card></Card>,
            loader: () => fetch("/donation.json"),
          },
        ],
      },
    ],
  },
]);

export default router;
