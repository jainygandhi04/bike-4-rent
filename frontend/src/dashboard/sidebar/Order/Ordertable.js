import React, { useState, useEffect, useMemo } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllOrder, updateStatus } from "../../../redux/features/Order/orderAction";
import Spinner from "../../../Helper/Spinner";
import toast from "react-hot-toast";
import moment from "moment"; // Import moment.js for date formatting

const { Option } = Select;

const Ordertable = ({ color }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllOrder());
  }, [dispatch]);

  const { loading, error } = useSelector((state) => state.order);

  const statusOptions = useMemo(() => ["Not Processed", "Processing", "Shipped", "Delivered", "Cancelled"], []);

  // Local state to track status changes immediately
  const [localOrders, setLocalOrders] = useState([]);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwR8HIuUE1VOgPSCLyPsUG6Xvvqt1naNQCgmRlO127cl9QYNWJvN1Spn9qN7XFAmKdQ/exec';

   const sendOrdersToGoogleSheet = async (orders) => {
   for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const formData = new FormData();
    formData.append("SN", i + 1);
    formData.append("Bikename", order.bikes?.name || "N/A");
    formData.append("Bike_number", order.bikes?.number || "N/A");
    formData.append("Renter_name", order.renter?.name || "N/A");
    formData.append("Total_Amount", order.totalAmt);
    formData.append("Start_Date", order.startDate);
    formData.append("End_Date", order.endDate);
    formData.append("Status", order.status);
    formData.append("object_id",order.orderId);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error sending order to Google Sheet:", error);
    }
  }

  console.log("All orders sent to Google Sheet");
};

  useEffect(() => {
    dispatch(AllOrder()).then((res) => {
      const allOrders = res.payload || [];
      const sentOrderIds = JSON.parse(localStorage.getItem("sent_order_ids")) || [];
  
      // Filter orders that haven't been sent yet
      const newOrders = allOrders.filter((order) => !sentOrderIds.includes(order._id));
  
      if (newOrders.length > 0) {
        sendOrdersToGoogleSheet(newOrders);
  
        // Update the localStorage with new sent IDs
        const updatedSentIds = [...sentOrderIds, ...newOrders.map((order) => order._id)];
        localStorage.setItem("sent_order_ids", JSON.stringify(updatedSentIds));
      }
  
      // Update local state regardless
      setLocalOrders(allOrders);
    });
  }, [dispatch]);

  const handleChange = (orderId, value) => {
    setLocalOrders((prev) =>
      prev.map((order) => (order._id === orderId ? { ...order, status: value } : order))
    );
    dispatch(updateStatus({ orderId, status: value }));
  };

  if (loading) return <Spinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table className="items-center w-full bg-white border-collapse">
        <thead>
          <tr>
            {["SN", "Bike Name", "Bike Number", "Rented User", "Total Amount", "Start Date", "End Date", "Status","object_id"].map(
              (header, index) => (
                <th
                  key={index}
                  className={`px-5 py-3 border text-xs uppercase font-semibold text-center ${
                    color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  }`}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {localOrders?.length ? (
            localOrders.map((order, i) => (
              <tr key={order._id}>
                <td className="px-2 text-center border">{i + 1}</td>
                <td className="px-5 py-3 border">{order?.bikes?.name || "N/A"}</td>
                <td className="px-5 py-3 border">{order?.bikes?.number || "N/A"}</td>
                <td className="px-5 py-3 border">{order?.renter?.name || "N/A"}</td>
                <td className="p-2 border">{order?.totalAmt || "N/A"}</td>
                <td className="p-3 border">
                  {order?.startDate ? moment(order.startDate).format("DD/MM/YYYY") : "N/A"}
                </td>
                <td className="p-3 border">
                  {order?.endDate ? moment(order.endDate).format("DD/MM/YYYY") : "N/A"}
                </td>
                <td className="p-4 text-center border">
                  <Select
                    bordered={false}
                    value={order.status} // Use local state value
                    onChange={(value) => handleChange(order._id, value)}
                  >
                    {statusOptions.map((s, index) => (
                      <Option key={index} value={s}>
                        {s}
                      </Option>
                    ))}
                  </Select>
                </td>
                <td className="px-5 py-3 border">{order._id || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr className="text-center border">
              <td colSpan={8} className="p-3 font-bold text-red-500">
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ordertable;
