import React from "react";
import {NavLink} from "react-router-dom";

const Division = ({division}) => {
  return (
    <div>
      <div className="text-center mt-5">
        {division.map((division) => (
          <NavLink
            key={division.id}
            to={`card/${division.division}`}
            className="btn btn-sm  m-2"
          >
            {division.division}
          </NavLink>
        ))}
      </div>
      {/*  */}
    </div>
  );
};

export default Division;
