import React from "react";
import Banner from "./Banner";
import About from "./About";
import HowItWorks from "./HowItWorks";
import FeaturedDonors from "./FeaturedDonors";
import Faq from "./Faq";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="mt-16">
      <Banner></Banner>
      <h1 className="text-center font-bold text-4xl my-20 text-blue-900">
        <i>Joining Our Mission is the most impactful way to give</i>
      </h1>
      <About></About>
      <HowItWorks></HowItWorks>
      <FeaturedDonors></FeaturedDonors>
      <Faq></Faq>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
