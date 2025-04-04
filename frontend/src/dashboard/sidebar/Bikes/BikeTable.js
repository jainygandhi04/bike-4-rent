import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll } from "../../../redux/features/Bikes/bikeAction";
import { DeleteBike } from "./DeleteBike";

const BikeTable = ({ color }) => {
  const [showModal, setShowModal] = useState(false);
  const [bikeId, setBikeId] = useState();
  const dispatch = useDispatch();
  const base_url = `http://localhost:5001`;

  useEffect(() => {
    dispatch(BikeAll()); 
  }, [dispatch]); // Added dependency to avoid potential stale dispatch issues

  const { bikes = [] } = useSelector((state) => state.bike); // Ensure bikes is always an array

  const handleDeleteClick = (id) => {
    setBikeId(id);
    setShowModal(true);
  };

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className="items-center w-full bg-white border-collapse">
        <thead>
          <tr>
            {["SN", "Bike Name", "Bike Number", "Price Per Day", "Category", "Action"].map((heading, index) => (
              <th key={index} className={`px-6 py-3 border text-xs uppercase font-semibold text-center 
                ${color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" 
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"}`}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bikes.length > 0 ? (
            bikes.map((bike, i) => (
              <tr key={bike._id}>
                <td className="p-4 px-6 text-center border">{i + 1}</td>
                <td className="p-4 px-6 text-left border">
                  <div className="flex items-center gap-3">
                    <img
                      src={`${base_url}/api/v1/bike/bike-photo/${bike._id}?timestamp=${Date.now()}`}
                      className="w-12 h-12 bg-white border rounded-full"
                      alt={bike.name || "Bike"}
                    />
                    {bike.name || "N/A"}
                  </div>
                </td>
                <td className="p-4 px-6 text-center border">{bike.number || "N/A"}</td>
                <td className="p-4 px-6 text-center border">{bike.price || "N/A"}</td>
                <td className="p-4 px-6 text-center border">{bike.category?.name || "N/A"}</td>
                <td className="p-4 px-6 text-center border">
                  <div className="flex justify-center gap-2">
                    <Link to={`/bikes/edit/${bike._id}`} className="text-green-600">
                      📝
                    </Link>
                    <button type="button" onClick={() => handleDeleteClick(bike._id)} className="text-red-600">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center border">
              <td colSpan={6} className="p-3 font-bold text-red-500">
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
      {/* Delete Confirmation Modal */}
      {showModal && <DeleteBike id={bikeId} setShowModal={setShowModal} />}
    </div>
  );
};

export default BikeTable;
