import React from "react";

const DisplayCard = ({singleCard}) => {
  const {image, title, description, division} = singleCard;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-5">
        <figure>
          <img src={image} alt={title} className="w-full h-56 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <div className="mt-3">
            <span className="badge bg-purple-800 text-white p-2 text-xs">
              {division}
            </span>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn bg-purple-700 text-white">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
