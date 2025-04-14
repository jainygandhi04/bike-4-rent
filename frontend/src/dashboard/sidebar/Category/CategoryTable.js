// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { CategoryAll } from "../../../redux/features/Category/categoryAction";
// import { DeleteCategory } from "./DeleteCategory";

// const CategoryTable = ({ color }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [categoryId, setCategoryId] = useState();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(CategoryAll());
//   }, []);

//   const { loading, categories, error } = useSelector((state) => state.category);
//   const handleDeleteClick = (id) => {
//     setCategoryId(id);
//     setShowModal(true);
//   };
//   return (
//     <div style={{ maxHeight: "300px", overflowY: "auto" }}>
//       <table className='items-center w-full bg-white border-collapse'>
//         <thead>
//           <tr>
//             <th
//               className={
//                 "px-6 border flex items-center justify-center border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
//                 (color === "light"
//                   ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                   : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
//               }
//             >
//               SN
//             </th>
//             <th
//               className={
//                 "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//                 (color === "light"
//                   ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                   : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
//               }
//             >
//               Category Name
//             </th>
//             <th
//               className={
//                 "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
//                 (color === "light"
//                   ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                   : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
//               }
//             >
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories && categories.length !== 0 ? (
//             categories.map((category, i) => {
//               return (
//                 <tr key={category._id}>
//                   <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
//                     {i + 1}
//                   </td>
//                   <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
//                     {category.name}
//                   </td>
//                   <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
//                     <div className='flex justify-center'>
//                       <Link to={`/category/edit/${category._id}`}>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           className='icon icon-tabler icon-tabler-edit'
//                           width='24'
//                           height='24'
//                           viewBox='0 0 24 24'
//                           strokeWidth='1.5'
//                           stroke='#00b341'
//                           fill='none'
//                           strokeLinecap='round'
//                           strokeLinejoin='round'
//                         >
//                           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//                           <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
//                           <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
//                           <line x1='16' y1='5' x2='19' y2='8' />
//                         </svg>
//                       </Link>
//                       <button
//                         type='button'
//                         onClick={() => {
//                           handleDeleteClick(category._id);
//                         }}
//                       >
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           className='icon icon-tabler icon-tabler-trash'
//                           width='24'
//                           height='24'
//                           viewBox='0 0 24 24'
//                           strokeWidth='1.5'
//                           stroke='#ff2825'
//                           fill='none'
//                           strokeLinecap='round'
//                           strokeLinejoin='round'
//                         >
//                           <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//                           <line x1='4' y1='7' x2='20' y2='7' />
//                           <line x1='10' y1='11' x2='10' y2='17' />
//                           <line x1='14' y1='11' x2='14' y2='17' />
//                           <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
//                           <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr className='text-center border'>
//               <td colSpan={5} className='p-3 font-bold text-red-500'>
//                 No Data Found!!
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {showModal && (
//         <DeleteCategory
//           id={categoryId}
//           setShowModal={setShowModal}
//           showModal={showModal}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryTable;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CategoryAll } from "../../../redux/features/Category/categoryAction";
import { DeleteCategory } from "./DeleteCategory";


const CategoryTable = ({ color }) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const navigate = useNavigate();
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoryAll());
  }, []);

  const { loading, categories, error } = useSelector((state) => state.category);
  const handleDeleteClick = (id) => {
    setCategoryId(id);
    setShowModal(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Back Button - Added at the top */}
      <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          top: '400px',
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

      <div style={{ maxHeight: "300px", overflowY: "auto", marginTop: '50px' }}>
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
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Category Name
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.length !== 0 ? (
              categories.map((category, i) => {
                return (
                  <tr key={category._id}>
                    <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                      {i + 1}
                    </td>
                    <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                      {category.name}
                    </td>
                    <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                      <div className='flex justify-center'>
                        <Link to={`/category/edit/${category._id}`}>
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
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                            <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                            <line x1='16' y1='5' x2='19' y2='8' />
                          </svg>
                        </Link>
                        <button
                          type='button'
                          onClick={() => {
                            handleDeleteClick(category._id);
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
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <line x1='4' y1='7' x2='20' y2='7' />
                            <line x1='10' y1='11' x2='10' y2='17' />
                            <line x1='14' y1='11' x2='14' y2='17' />
                            <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                            <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                          </svg>
                        </button>
                      </div>
                    </td>
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
      </div>

      {/* Add Button */}
      <button
        onClick={() => navigate('/category/add')}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          border: 'none',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          fontSize: '24px',
          zIndex: 1000
        }}
      >
        +
      </button>

      {showModal && (
        <DeleteCategory
          id={categoryId}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default CategoryTable;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { CategoryAll } from "../../../redux/features/Category/categoryAction";
// import { DeleteCategory } from "./DeleteCategory";
// import { Table, Button, Space } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// const CategoryTable = ({ color }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [categoryId, setCategoryId] = useState();
//   const navigate = useNavigate();
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(CategoryAll());
//   }, [dispatch]);

//   const { loading, categories, error } = useSelector((state) => state.category);

//   const handleDeleteClick = (id) => {
//     setCategoryId(id);
//     setShowModal(true);
//   };

//   const columns = [
//     {
//       title: <span className="font-semibold">SN</span>,
//       key: "sn",
//       align: "center",
//       render: (_, __, index) => index + 1,
//     },
//     {
//       title: <span className="font-semibold">Category Name</span>,
//       dataIndex: "name",
//       key: "name",
//       align: "center",
//     },
//     {
//       title: <span className="font-semibold">Action</span>,
//       key: "action",
//       align: "center",
//       render: (_, record) => (
//         <Space size="middle">
//           <Link to={`/category/edit/${record._id}`}>
//             <Button 
//               type="text"
//               icon={<FontAwesomeIcon icon={faEdit} className="text-blue-500" />}
//             />
//           </Link>
//           <Button 
//             type="text"
//             danger
//             icon={<FontAwesomeIcon icon={faTrash} />}
//             onClick={() => handleDeleteClick(record._id)}
//           />
//         </Space>
//       ),
//     },
//   ];

//   const dataSource = categories?.map((category) => ({
//     key: category._id,
//     name: category.name,
//   }));

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md relative">
//       {/* Back Button */}
//       <div className="mb-4">
//         <Button
//           onClick={() => navigate('/admin')}
//           type="default"
//           className="flex items-center gap-2 text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400"
//           icon={<FontAwesomeIcon icon={faArrowLeft} />}
//         >
//           Back to Dashboard
//         </Button>
//       </div>

//       {/* Category Table */}
//       <Table
//         columns={columns}
//         dataSource={dataSource}
//         loading={loading}
//         pagination={{
//           pageSize: 10,
//           showSizeChanger: true,
//           pageSizeOptions: ['10', '20', '50'],
//           className: "mt-4",
//           showTotal: null
//         }}
//         scroll={{ y: "calc(100vh - 280px)" }}
//         bordered
//         className="rounded-lg overflow-hidden border border-gray-200"
//         locale={{
//           emptyText: (
//             <div className="py-8 text-center">
//               <div className="text-red-500 font-semibold text-lg">
//                 No Categories Found
//               </div>
//             </div>
//           ),
//         }}
//         rowClassName={(record, index) => 
//           index % 2 === 0 ? "bg-white" : "bg-gray-50"
//         }
//       />

//       {/* Add Button */}
//       <Button
//         type="primary"
//         shape="circle"
//         size="large"
//         icon={<FontAwesomeIcon icon={faPlus} />}
//         onClick={() => navigate('/category/add')}
//         className="fixed bottom-6 right-6 shadow-lg"
//         style={{
//           width: '50px',
//           height: '50px',
//           zIndex: 1000
//         }}
//       />

//       {/* Delete Modal */}
//       {showModal && (
//         <DeleteCategory
//           id={categoryId}
//           setShowModal={setShowModal}
//           showModal={showModal}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryTable;