// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userAll } from "../../../redux/features/User/authAction";

// const UserTable = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAll());
//   }, [dispatch]);

//   const { users } = useSelector((state) => state.auth);

//   return (
//     <div style={{ maxHeight: "300px", overflowY: "auto" }}>
//       <table className='items-center w-full bg-transparent border-collapse'>
//         <thead>
//           <tr>
//             <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
//               Name
//             </th>
//             <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
//               Email
//             </th>
//             <th className='px-6 py-3 text-xs font-semibold text-center uppercase border border-solid bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700'>
//               Role
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {users && users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td className='p-4 px-6 text-md whitespace-nowrap border-t-0 border-l-0 border-r-0'>
//                   <div className='flex justify-center'>{user.name}</div>
//                 </td>
//                 <td className='p-4 px-6 text-md text-center whitespace-nowrap border-t-0 border-l-0 border-r-0'>
//                   {user.email}
//                 </td>
//                 <td className='p-4 px-6 text-md text-center whitespace-nowrap border-t-0 border-l-0 border-r-0'>
//                   {user.role === 1 ? "Admin" : "User"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr className='text-center border'>
//               <td colSpan={3} className='p-3 font-bold text-red-500'>
//                 No Data Found!!
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;


// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { userAll } from "../../../redux/features/User/authAction";


// const UserTable = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(userAll());
//   }, [dispatch]);

//   const { users, loading } = useSelector((state) => state.auth);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       align: "center",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       align: "center",
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       align: "center",
//       render: (role) => (role === 1 ? "Admin" : "User"),
//     },
//   ];

//   const dataSource = users?.map((user, index) => ({
//     key: user._id || index,
//     name: user.name,
//     email: user.email,
//     role: user.role,
//   }));

//   return (
//     <div style={{ height: "calc(100vh - 180px)", overflow: "auto" }}>
//       <Table
//         columns={columns}
//         dataSource={dataSource}
//         loading={loading}
//         pagination={false}
//         scroll={{ y: "100%" }}
//         bordered
//         locale={{
//           emptyText: <span style={{ color: "red", fontWeight: "bold" }}>No Data Found!!</span>,
//         }}
//       />
//     </div>
//   );
// };

// export default UserTable;  // 61 start... perfect code

import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userAll } from "../../../redux/features/User/authAction";
import { Link, useNavigate } from "react-router-dom";

const UserTable = ({ searchText = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userAll());
  }, [dispatch]);

  const { users, loading } = useSelector((state) => state.auth);

  // Filter users based on searchText (case-insensitive match on name or email)
  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
      render: (role) => (role === 1 ? "Admin" : "User"),
    },
  ];

  const dataSource = filteredUsers?.map((user, index) => ({
    key: user._id || index,
    name: user.name,
    email: user.email,
    role: user.role,
  }));

  return (
    <div style={{ height: "calc(100vh - 180px)", overflow: "auto" }}>
      <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          top: '645px',
          left: '10px',
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
        
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={false}
        scroll={{ y: "100%" }}
        bordered
        locale={{
          emptyText: <span style={{ color: "red", fontWeight: "bold" }}>No Data Found!!</span>,
        }}
      />
    </div>
  );
};

export default UserTable;
