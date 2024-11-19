import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import DisplayCard from "../components/DisplayCard";

const Card = () => {
  const card = useLoaderData();
  const {division} = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (division) {
      const filterByCategory = [...card].filter(
        (singleCategory) => singleCategory.division === division
      );
      setCategory(filterByCategory);
    } else {
      setCategory(card);
    }
  }, [card, division]);

  console.log(category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 p-3">
      {category.map((singleCard) => (
        <DisplayCard singleCard={singleCard}></DisplayCard>
      ))}
    </div>
  );
};

export default Card;
