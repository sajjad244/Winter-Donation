// src/components/HowItWorks.js

import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">How It Works</h2>
        <p className="text-lg text-gray-700 mb-10">
          Follow these simple steps to donate winter clothes and help others
          stay warm this season.
        </p>

        {/* Step-by-step guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Step 1: Gather Items
            </h3>
            <p className="text-gray-700">
              Collect gently used winter clothes such as jackets, sweaters,
              scarves, and gloves. Make sure the items are clean and in good
              condition.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Step 2: Find a Collection Point
            </h3>
            <p className="text-gray-700">
              Find a collection point near you. We have locations in several
              areas where you can drop off your donations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Step 3: Drop Off Your Donation
            </h3>
            <p className="text-gray-700">
              Simply drop off your donations at the nearest collection point.
              Our team will take care of the rest and ensure that your donations
              reach those in need.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Collection Points
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-semibold">
            We have collection points in the following locations:
          </p>
          <ul className=" pl-8 text-gray-700  ">
            <li>Dhaka - XYZ Shopping Mall</li>
            <li>Chittagong - ABC Community Center</li>
            <li>Khulna - DEF Donation Hub</li>
            <li>Rajshahi - GHI Street</li>
            <li>Barisal - JKL Park</li>
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Supported Divisions
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-semibold">
            We are supporting the following divisions for donations:
          </p>
          <ul className=" pl-8 text-gray-700  ">
            <li>Dhaka Division</li>
            <li>Chittagong Division</li>
            <li>Khulna Division</li>
            <li>Rajshahi Division</li>
            <li>Barisal Division</li>
            <li>Rangpur Division</li>
            <li>Sylhet Division</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
