import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

const DetailsPage = () => {
  const data = useLoaderData();
  const {id} = useParams();

  const [details, setDetails] = useState({});
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    notes: "",
  });

  useEffect(() => {
    const singleData = data.find((item) => item.id == id);
    setDetails(singleData);
  }, [data, id]);

  const {image, title, description, division} = details;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      notes: "",
    });
    toast.success("Thank you! We will reach your destination soon");
  };

  return (
    <div className="p-5 w-2/3 mx-auto">
      <div className="bg-gray-100 p-5 rounded-md shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover mb-5 rounded-lg"
        />
        <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
        <p className="text-gray-600 mt-3">{description}</p>
        <span className="badge bg-purple-800 text-white mt-2 p-2">
          {division}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-blue-900">
        Donate Items
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-5 rounded-md shadow-md"
      >
        <div>
          <label className="block text-gray-700 font-bold mb-2">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter quantity (e.g., 2)"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Item Type
          </label>
          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleInputChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select item type</option>
            <option value="Blanket">Blanket</option>
            <option value="Jacket">Jacket</option>
            <option value="Sweater">Sweater</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            placeholder="Enter location (e.g., House 12, Road 5, etc)"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Additional Notes (optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            className="textarea textarea-bordered w-full"
            placeholder="Enter any additional notes"
          ></textarea>
        </div>
        <button type="submit" className="btn bg-purple-600 text-white w-full">
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default DetailsPage;
