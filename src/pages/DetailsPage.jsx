import {useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";

const DetailsPage = () => {
  const data = useLoaderData();
  const {id} = useParams();

  const [details, setDetails] = useState();

  return (
    <div>
      <h1>Details Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default DetailsPage;
