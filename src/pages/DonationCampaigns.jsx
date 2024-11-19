import {Outlet, useLoaderData} from "react-router-dom";
import Division from "../components/Division";

const DonationCampaigns = () => {
  const division = useLoaderData();
  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-black text-blue-900">
        All Donation Campaigns
      </h1>
      {/*  */}
      <Division division={division}></Division>
      {/*  */}
      <Outlet></Outlet>
    </div>
  );
};

export default DonationCampaigns;
