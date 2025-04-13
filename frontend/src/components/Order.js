// import React, { useEffect, useState } from "react";
// import moment from "moment";
// import { Button, Modal, DatePicker } from "antd";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getBikeBySlug } from "../redux/features/Bikes/bikeAction";
// import { AddOrder } from "../redux/features/Order/orderAction";
// import { clearFields } from "../redux/features/Order/orderSlice";
// import Spinner from "../Helper/Spinner";
// import Error from "../Helper/Error";
// import { toast } from "react-hot-toast";

// const base_url = "http://localhost:5001/";
// const { RangePicker } = DatePicker;

// const Order = () => {
//   const [error, setError] = useState("");
//   const [from, setFrom] = useState();
//   const [to, setTo] = useState();
//   const [days, setDays] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [open, setOpen] = useState(false);

//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { loading, success } = useSelector((state) => state.order);
//   const { bikeBySlug } = useSelector((state) => state.bike);
//   const { userInfo } = useSelector((state) => state.auth);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     dispatch(getBikeBySlug(slug));
//   }, [dispatch, slug]);

//   useEffect(() => {
//     if (success) {
//       toast.success("Your order has been placed");
//       dispatch(clearFields());
//       navigate("/");
//     }
//   }, [success, navigate, dispatch]);

//   useEffect(() => {
//     if (error) {
//       setError("");
//       navigate("/login");
//     }
//   }, [error, navigate]);

//   useEffect(() => {
//     if (bikeBySlug) {
//       setTotalAmount(days * bikeBySlug.price);
//     }
//   }, [days, bikeBySlug]);

//   const disabledDate = (current) => current && current < moment().startOf("day");

//   const selectTimeSlots = (values) => {
//     setFrom(values[0].format("YYYY-MM-DD"));
//     setTo(values[1].format("YYYY-MM-DD"));
//     setDays(values[1].diff(values[0], "days"));
//   };

//   const showModal = () => setOpen(true);
//   const hideModal = () => setOpen(false);

//   const submitModal = async () => {
//     setOpen(false);

//     if (!userInfo) {
//       navigate("/login", {
//         state: { from: "/Terms", orderData: { from, to, totalAmount, bikeId: bikeBySlug._id } }
//       });
//       return;
//     }

//     navigate("/Terms", { state: { from, to, totalAmount, bikeId: bikeBySlug._id } });

//     try {

//       const formData = {
//         totalAmt: totalAmount,
//         startDate: from,
//         endDate: to,
//         bikeId: bikeBySlug._id,
//       };

//       const data = await dispatch(AddOrder(formData));

//       if (data.error) {
//         setError(data.payload);
//         dispatch(clearFields());
//       }
//     } catch (err) {
//       console.error("Order submission failed", err);
//     }
//   };

//   return (
//     <>
//       {bikeBySlug ? (
//         <section className="overflow-hidden text-gray-600 body-font">
//           <div className="container px-5 py-10 mx-auto">
//             <div className="flex flex-wrap mx-auto lg:w-4/5">
//               <img
//                 alt={bikeBySlug.name}
//                 className="object-cover object-center w-full rounded h-60 sm:h-36 lg:w-1/2 lg:h-auto"
//                 src={`${base_url}api/v1/bike/bike-photo/${bikeBySlug._id}`}
//               />
//               <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
//                 <h2 className="text-sm tracking-widest text-gray-500 title-font">Rent Now !!!</h2>
//                 <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{bikeBySlug.name}</h1>
//                 {/* <p className="text-justify">{bikeBySlug.description}</p> */}
//                 <p className="text-justify mb-2">{bikeBySlug.description}</p>
//                 <div className="mb-2"><b>Category:</b> {bikeBySlug.category?.name || "N/A"}</div>
//                 <div className="mb-2"><b>Start Type:</b> {bikeBySlug.startType}</div>
//                 <div className="mb-2"><b>Year of Manufacture:</b> {bikeBySlug.year}</div>
//                 <div className="mb-2"><b>Kilometers Used:</b> {bikeBySlug.kilometers} km</div>
//                 <div className="mb-2"><b>Petrol Capacity:</b> {bikeBySlug.petrolCapacity} L</div>
//                 {/* <h1 className="mb-1 text-xl font-normal text-gray-900">Rent per day: Rs {bikeBySlug.price}</h1> */}

//                 <h1 className="mb-1 text-xl font-normal text-gray-900">Rent per day: Rs {bikeBySlug.price}</h1>

//                 <RangePicker format="DD MMMM YYYY" disabledDate={disabledDate} onChange={selectTimeSlots} className="mb-2" />
//                 <div className="font-semibold">Total Days: {days}</div>

//                 <div className="flex items-center">
//                   <span className="text-xl font-medium text-gray-900 title-font">Price:</span>
//                   <span className="ml-2 text-xl font-medium title-font">Rs {totalAmount}</span>

//                   <Button
//                     onClick={showModal}
//                     disabled={!to || !from}
//                     className="flex items-center px-6 py-2 ml-6 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black hover:text-white"
//                   >
//                     Rent Now
//                   </Button>

//                   <Modal
//                     title="Confirm your rental order?"
//                     open={open}
//                     onOk={submitModal}
//                     onCancel={hideModal}
//                     okText="Yes"
//                     cancelText="No"
//                     style={{ position: "relative", top: "40%" }}
//                   />
//                 </div>
//                 {error && (
//                   <span className="flex justify-start mt-3 ml-10">
//                     <Error>{error}</Error>
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       ) : (
//         <Spinner />
//       )}
//     </>
//   );
// };

// export default Order;

import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Modal, DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBikeBySlug } from "../redux/features/Bikes/bikeAction";
import { AddOrder } from "../redux/features/Order/orderAction";
import { clearFields } from "../redux/features/Order/orderSlice";
import Spinner from "../Helper/Spinner";
import Error from "../Helper/Error";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faGasPump,
  faGauge,
  faMotorcycle,
  faCalendarCheck,
  faMoneyBillWave,
  faRoad,
  faCog,
  faCalendarTimes
} from "@fortawesome/free-solid-svg-icons";

const base_url = "http://localhost:5001/";
const { RangePicker } = DatePicker;

const Order = () => {
  const [error, setError] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [days, setDays] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, success } = useSelector((state) => state.order);
  const { bikeBySlug } = useSelector((state) => state.bike);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(getBikeBySlug(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (success) {
      toast.success("Your order has been placed");
      dispatch(clearFields());
      navigate("/");
    }
  }, [success, navigate, dispatch]);

  useEffect(() => {
    if (error) {
      setError("");
      navigate("/login");
    }
  }, [error, navigate]);

  useEffect(() => {
    if (bikeBySlug) {
      setTotalAmount(days * bikeBySlug.price);
    }
  }, [days, bikeBySlug]);

  const disabledDate = (current) => current && current < moment().startOf("day");

  const selectTimeSlots = (values) => {
    setFrom(values[0].format("YYYY-MM-DD"));
    setTo(values[1].format("YYYY-MM-DD"));
    setDays(values[1].diff(values[0], "days"));
  };

  const showModal = () => setOpen(true);
  const hideModal = () => setOpen(false);

  const submitModal = async () => {
    setOpen(false);

    if (!userInfo) {
      navigate("/login", {
        state: { from: "/Terms", orderData: { from, to, totalAmount, bikeId: bikeBySlug._id } }
      });
      return;
    }

    navigate("/Terms", { state: { from, to, totalAmount, bikeId: bikeBySlug._id } });

    try {
      const formData = {
        totalAmt: totalAmount,
        startDate: from,
        endDate: to,
        bikeId: bikeBySlug._id,
      };

      const data = await dispatch(AddOrder(formData));

      if (data.error) {
        setError(data.payload);
        dispatch(clearFields());
      }
    } catch (err) {
      console.error("Order submission failed", err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] min-h-screen py-8 px-4">
      {bikeBySlug ? (
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Bike Image */}
            <div className="md:w-1/2">
              <img
                alt={bikeBySlug.name}
                className="w-full h-full object-cover"
                src={`${base_url}api/v1/bike/bike-photo/${bikeBySlug._id}`}
              />
            </div>

            {/* Bike Details */}
            <div className="p-8 md:w-1/2">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faMotorcycle} className="text-2xl text-[#A15E48] mr-2" />
                <h1 className="text-3xl font-bold text-[#5a4239]">{bikeBySlug.name}</h1>
              </div>

              <p className="text-[#5a4239]/90 mb-6">{bikeBySlug.description}</p>

              {/* Bike Specifications */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faMotorcycle} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Category:</b> {bikeBySlug.category?.name || "N/A"}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCog} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Start Type:</b> {bikeBySlug.startType}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Year:</b> {bikeBySlug.year}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faRoad} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Kilometers:</b> {bikeBySlug.kilometers} km</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faGasPump} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Fuel Capacity:</b> {bikeBySlug.petrolCapacity} L</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faGauge} className="text-[#A15E48] w-5 mr-2" />
                  <span className="text-[#5a4239]"><b>Mileage:</b> {bikeBySlug.mileage || "N/A"} kmpl</span>
                </div>
              </div>

              {/* Rental Details */}
              <div className="bg-[#fff7f0] p-4 rounded-lg mb-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-xl text-[#A15E48] mr-2" />
                  <h2 className="text-xl font-semibold text-[#5a4239]">Rental Details</h2>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#A15E48] mr-2" />
                    <span className="text-[#5a4239] font-medium">Select Rental Period:</span>
                  </div>
                  <RangePicker 
                    format="DD MMMM YYYY" 
                    disabledDate={disabledDate} 
                    onChange={selectTimeSlots} 
                    className="w-full"
                  />
                </div>

                {days > 0 && (
                  <>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#5a4239] flex items-center">
                        <FontAwesomeIcon icon={faCalendarCheck} className="mr-2 text-[#A15E48]" />
                        Rental Days:
                      </span>
                      <span className="font-semibold text-[#5a4239]">{days} days</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#5a4239] flex items-center">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 text-[#A15E48]" />
                        Daily Rate:
                      </span>
                      <span className="font-semibold text-[#5a4239]">₹{bikeBySlug.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5a4239] flex items-center">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 text-[#A15E48]" />
                        Total Amount:
                      </span>
                      <span className="font-bold text-xl text-[#8B4D3A]">₹{totalAmount}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Rent Button */}
              <Button
                onClick={showModal}
                disabled={!to || !from}
                className="w-full py-4 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white text-lg font-semibold rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faMotorcycle} />
                Rent Now
              </Button>

              {/* Confirmation Modal */}
              <Modal
                title={
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-[#A15E48] mr-2" />
                    <span>Confirm Rental</span>
                  </div>
                }
                open={open}
                onOk={submitModal}
                onCancel={hideModal}
                okText={
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    Confirm
                  </span>
                }
                cancelText={
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarTimes} />
                    Cancel
                  </span>
                }
                okButtonProps={{
                  className: "bg-[#8B4D3A] hover:bg-[#5a4239] border-none"
                }}
                cancelButtonProps={{
                  className: "hover:bg-gray-100"
                }}
              >
                <p className="text-[#5a4239]">Are you sure you want to rent {bikeBySlug.name} for {days} days?</p>
                <p className="font-semibold text-[#8B4D3A] mt-2">Total Amount: ₹{totalAmount}</p>
              </Modal>

              {error && (
                <div className="mt-4">
                  <Error>{error}</Error>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Order;