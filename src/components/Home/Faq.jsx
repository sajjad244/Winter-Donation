import React from "react";

const Faq = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-10 font-semibold">
          Have some questions? We've got answers!
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              What types of clothes can I donate?
            </h3>
            <p className="text-gray-700 mt-2 font-semibold">
              You can donate gently used winter clothes, including jackets,
              sweaters, scarves, gloves, and hats.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              Where can I drop off my donations?
            </h3>
            <p className="text-gray-700 mt-2 font-semibold">
              We have collection points at various locations, including shopping
              malls, community centers, and parks.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              Can I donate items other than clothes?
            </h3>
            <p className="text-gray-700 mt-2 font-semibold">
              Currently, we only accept winter clothing. However, in the future,
              we may expand to other items.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">
              Is there any deadline for donations?
            </h3>
            <p className="text-gray-700 mt-2 font-semibold">
              Donations are accepted year-round, but during winter months,
              donations are especially needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
