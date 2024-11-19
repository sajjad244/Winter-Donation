// src/components/About.js
import React from "react";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <section className="py-16  text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our mission is to provide warmth and comfort to those in need during
          the cold winter months. You can help by donating gently used winter
          clothes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              How You Can Contribute
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Donate winter coats, jackets, scarves, gloves, and hats.</li>
              <li>Volunteer to help organize donations.</li>
              <li>Share our campaign on social media.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Get Involved
            </h3>
            <p className="text-gray-700 mb-4">
              You can make a big difference in the lives of those who need it
              most. Join us in spreading warmth this winter.
            </p>
            <Link to="/donation" className="btn bg-purple-600 text-white">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
