import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../redux/features/Order/orderAction";

const OrderDropdown = ({ color }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrder());
  }, []);
  const { userOrders } = useSelector((state) => state.order);
  return (
    <Layout title={"Bike-4-Rent : Your Orders"}>
      <div className='flex items-center justify-center'>
        <h1 className='font-serif text-2xl font-bold'>Your Orders</h1>
      </div>
      <div className='flex items-center justify-center w-full mt-3'>
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <table className='items-center w-full bg-white border-collapse'>
            <thead>
              <tr>
                <th
                  className={
                    "px-6 border flex items-center justify-center border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  SN
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Bikename
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Bike_number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Renter name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Total Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Start Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  End Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userOrders && userOrders.length !== 0 ? (
                userOrders.map((order, i) => {
                  return (
                    <tr key={order._id}>
                      <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {i + 1}
                      </td>
                      <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        <div className='flex items-center gap-3'>
                          {order.bikes.name ? order.bikes.name : "N/A"}
                        </div>
                      </td>
                      <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        <div className='flex items-center gap-3'>
                          {order.bikes.number ? order.bikes.number : "N/A"}
                        </div>
                      </td>
                      <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {order.renter.name}
                      </td>
                      <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {order.totalAmt}
                      </td>
                      <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {order.startDate}
                      </td>
                      <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {order.endDate}
                      </td>
                      <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                        {order.status}
                      </td>
                      {/* <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <div className='flex justify-center'>
                          <Link to={`/dashboard/bikes/edit/${bike._id}`}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='icon icon-tabler icon-tabler-edit'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='#00b341'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path
                                stroke='none'
                                d='M0 0h24v24H0z'
                                fill='none'
                              />
                              <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                              <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                              <line x1='16' y1='5' x2='19' y2='8' />
                            </svg>
                          </Link>
                          <button
                            type='button'
                            onClick={() => {
                              handleDeleteClick(bike._id);
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='icon icon-tabler icon-tabler-trash'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='#ff2825'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path
                                stroke='none'
                                d='M0 0h24v24H0z'
                                fill='none'
                              />
                              <line x1='4' y1='7' x2='20' y2='7' />
                              <line x1='10' y1='11' x2='10' y2='17' />
                              <line x1='14' y1='11' x2='14' y2='17' />
                              <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                              <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                            </svg>
                          </button>
                        </div>
                      </td> */}
                    </tr>
                  );
                })
              ) : (
                <tr className='text-center border'>
                  <td colSpan={5} className='p-3 font-bold text-red-500'>
                    No Data Found!!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* {showModal && (
            <DeleteBike
              id={bikeId}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )} */}
        </div>
      </div>
    </Layout>
  );
};

export default OrderDropdown;
