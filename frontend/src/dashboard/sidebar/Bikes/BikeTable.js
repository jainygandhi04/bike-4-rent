// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { BikeAll } from "../../../redux/features/Bikes/bikeAction";
// // import { DeleteBike } from "./DeleteBike";

// // const BikeTable = ({ color }) => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [bikeId, setBikeId] = useState();
// //   const dispatch = useDispatch();
// //   const base_url = `http://localhost:5001`;

// //   useEffect(() => {
// //     dispatch(BikeAll()); 
// //   }, [dispatch]); // Added dependency to avoid potential stale dispatch issues

// //   const { bikes = [] } = useSelector((state) => state.bike); // Ensure bikes is always an array

// //   const handleDeleteClick = (id) => {
// //     setBikeId(id);
// //     setShowModal(true);
// //   };

// //   return (
// //     <div style={{ maxHeight: "300px", overflowY: "auto" }}>
// //       <table className="items-center w-full bg-white border-collapse">
// //         <thead>
// //           <tr>
// //             {["SN", "Bike Name", "Bike Number", "Price Per Day", "Category", "Petrol Capacity","Kilometers Used","Start Type", "Year of manufacture", "Action"].map((heading, index) => (
// //               <th key={index} className={`px-6 py-3 border text-xs uppercase font-semibold text-center 
// //                 ${color === "light" ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100" 
// //                                     : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"}`}>
// //                 {heading}
// //               </th>
// //             ))}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {bikes.length > 0 ? (
// //             bikes.map((bike, i) => (
// //               <tr key={bike._id}>
// //                 <td className="p-4 px-6 text-center border">{i + 1}</td>
// //                 <td className="p-4 px-6 text-left border">
// //                   <div className="flex items-center gap-3">
// //                     <img
// //                       src={`${base_url}/api/v1/bike/bike-photo/${bike._id}?timestamp=${Date.now()}`}
// //                       className="w-12 h-12 bg-white border rounded-full"
// //                       alt={bike.name || "Bike"}
// //                     />
// //                     {bike.name || "N/A"}
// //                   </div>
// //                 </td>
// //                 <td className="p-4 px-6 text-center border">{bike.number || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.price || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.category?.name || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.petrolCapacity || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.kilometers || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.startType || "N/A"}</td>
// //                 <td className="p-4 px-6 text-center border">{bike.year || "N/A"}</td>

// //                 <td className="p-4 px-6 text-center border">
// //                   <div className="flex justify-center gap-2">
// //                     <Link to={`/bikes/edit/${bike._id}`} className="text-green-600">
// //                       📝
// //                     </Link>
// //                     <button type="button" onClick={() => handleDeleteClick(bike._id)} className="text-red-600">
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr className="text-center border">
// //               <td colSpan={6} className="p-3 font-bold text-red-500">
// //                 No Data Found!!
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>

// //       {/* Delete Confirmation Modal */}
// //       {showModal && <DeleteBike id={bikeId} setShowModal={setShowModal} />}
// //     </div>
// //   );
// // };

// //export default BikeTable;//last code , it was proper


// import React, { useEffect } from "react";
// import { Table, Tag, Space, Button, Image, Popconfirm, message } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BikeAll, deleteBike } from "../../../redux/features/Bikes/bikeAction";
// import { useNavigate } from "react-router-dom";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// const BikeTable = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { bikes, loading } = useSelector((state) => state.bike);

//   useEffect(() => {
//     dispatch(BikeAll());
//   }, [dispatch]);

//   const handleEdit = (record) => {
//     navigate(`/bikes/edit/${record._id}`);
//   };

//   const handleDelete = async (id) => {
//     const result = await dispatch(deleteBike(id));
//     if (!result.error) {
//       message.success("Bike deleted successfully!");
//     } else {
//       message.error("Failed to delete bike.");
//     }
//   };

//   const columns = [
//     {
//       title: "Photo",
//       dataIndex: "photo",
//       key: "photo",
//       render: (photo) => (
//         <Image
//           width={80}
//           height={60}
//           src={photo?.url}
//           alt="bike"
//           style={{ objectFit: "cover", borderRadius: "8px" }}
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <b>{text}</b>,
//     },
//     {
//       title: "Number",
//       dataIndex: "number",
//       key: "number",
//     },
//     {
//       title: "Category",
//       dataIndex: "category",
//       key: "category",
//       render: (cat) => <Tag color="blue">{cat?.name}</Tag>,
//     },
//     {
//       title: "Price/Day (₹)",
//       dataIndex: "price",
//       key: "price",
//       render: (price) => `₹${price}`,
//     },
//     {
//       title: "Start Type",
//       dataIndex: "startType",
//       key: "startType",
//     },
//     {
//       title: "Year",
//       dataIndex: "year",
//       key: "year",
//     },
//     {
//       title: "Km Used",
//       dataIndex: "kilometers",
//       key: "kilometers",
//     },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <Space>
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//             type="primary"
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Are you sure you want to delete this bike?"
//             onConfirm={() => handleDelete(record._id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button icon={<DeleteOutlined />} danger>
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">All Bikes</h2>
//       <Table
//         columns={columns}
//         dataSource={bikes}
//         rowKey="_id"
//         loading={loading}
//         pagination={{ pageSize: 8 }}
//         bordered
//       />
//     </div>
//   );
// };

// export default BikeTable;// first code w/o antD



import React, { useEffect } from "react";
import {
  Table,
  Tag,
  Space,
  Button,
  Image,
  Popconfirm,
  message,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BikeAll, deleteBike } from "../../../redux/features/Bikes/bikeAction";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const BikeTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bikes = [], loading } = useSelector((state) => state.bike);
  const base_url = `http://localhost:5001`;

  useEffect(() => {
    dispatch(BikeAll());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/bikes/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const result = await dispatch(deleteBike(id));
    if (!result.error) {
      message.success("Bike deleted successfully!");
      dispatch(BikeAll());
    } else {
      message.error("Failed to delete bike.");
    }
  };

  const columns = [
    {
      title: "S.N.",
      key: "index",
      render: (_, __, index) => index + 1,
      width: 70,
    },
    {
      title: "Photo",
      dataIndex: "_id",
      key: "photo",
      render: (id) => (
        <Image
          width={80}
          height={60}
          src={`${base_url}/api/v1/bike/bike-photo/${id}?timestamp=${Date.now()}`}
          alt="bike"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Price/Day (₹)",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (cat) => <Tag color="blue">{cat?.name}</Tag>,
    },
    {
      title: "Petrol Capacity",
      dataIndex: "petrolCapacity",
      key: "petrolCapacity",
    },
    {
      title: "Km Used",
      dataIndex: "kilometers",
      key: "kilometers",
    },
    {
      title: "Start Type",
      dataIndex: "startType",
      key: "startType",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record._id)}
            style={{
              backgroundColor: '#52c41a',  // green background
              borderColor: '#52c41a',
              color: 'white'
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this bike?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{
              style: {
                backgroundColor: '#52c41a',  // green background
                borderColor: '#52c41a',
                color: 'white'
              }
            }}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>

        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      
      <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          top: '60x',
          left: '1200px',
          backgroundColor: '#A15E48',
          color: 'White',
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #A15E48',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
          marginBottom: '20px'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back To Dashboard
      </button>

      <h2 className="text-xl font-semibold mb-4">All Bikes</h2>
      <Table
        columns={columns}
        dataSource={bikes}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 8 }}
        bordered
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default BikeTable;
