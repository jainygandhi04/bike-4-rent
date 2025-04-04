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
    <>
      {bikeBySlug ? (
        <section className="overflow-hidden text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <img
                alt={bikeBySlug.name}
                className="object-cover object-center w-full rounded h-60 sm:h-36 lg:w-1/2 lg:h-auto"
                src={`${base_url}api/v1/bike/bike-photo/${bikeBySlug._id}`}
              />
              <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                <h2 className="text-sm tracking-widest text-gray-500 title-font">Rent Now !!!</h2>
                <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">{bikeBySlug.name}</h1>
                <p className="text-justify">{bikeBySlug.description}</p>
                <h1 className="mb-1 text-xl font-normal text-gray-900">Rent per day: Rs {bikeBySlug.price}</h1>
                
                <RangePicker format="DD MMMM YYYY" disabledDate={disabledDate} onChange={selectTimeSlots} className="mb-2" />
                <div className="font-semibold">Total Days: {days}</div>

                <div className="flex items-center">
                  <span className="text-xl font-medium text-gray-900 title-font">Price:</span>
                  <span className="ml-2 text-xl font-medium title-font">Rs {totalAmount}</span>

                  <Button
                    onClick={showModal}
                    disabled={!to || !from}
                    className="flex items-center px-6 py-2 ml-6 text-white border-0 rounded bg-orange focus:outline-none hover:bg-black hover:text-white"
                  >
                    Rent Now
                  </Button>

                  <Modal
                    title="Confirm your rental order?"
                    open={open}
                    onOk={submitModal}
                    onCancel={hideModal}
                    okText="Yes"
                    cancelText="No"
                    style={{ position: "relative", top: "40%" }}
                  />
                </div>
                {error && (
                  <span className="flex justify-start mt-3 ml-10">
                    <Error>{error}</Error>
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Order;
