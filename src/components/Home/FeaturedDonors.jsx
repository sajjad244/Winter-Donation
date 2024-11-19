// src/components/FeaturedDonors.js

import React from "react";

const FeaturedDonors = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Featured Donors
        </h2>
        <p className="text-lg text-gray-700 mb-10 font-semibold">
          A big thank you to our generous donors who are making a difference!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co.com/VBz7DC6/bnp-chief-khaleda-zia-release-9244.jpg"
              alt="Donor"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">khaleda zia</h3>
            <p className="text-gray-700 font-semibold">
              Donated 50 winter jackets to those in need.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co.com/PCzf0WP/images-1.jpg"
              alt="Donor"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">
              Muhammad Yunus
            </h3>
            <p className="text-gray-700 font-semibold">
              Donated 30 sweaters and scarves to the cause.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="https://i.ibb.co.com/cLkP9HH/images.jpg"
              alt="Donor"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">
              sheikh hasina
            </h3>
            <p className="text-gray-700 font-semibold">
              Made a monetary donation to help purchase warm clothes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDonors;
