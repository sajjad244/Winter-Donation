import React from "react";
import {useLoaderData, useParams} from "react-router-dom";
import DisplayCard from "../components/DisplayCard";

const Card = () => {
  const card = useLoaderData();
  const {division} = useParams();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-3">
      {card.map((singleCard) => (
        <DisplayCard singleCard={singleCard}></DisplayCard>
      ))}
    </div>
  );
};

export default Card;
