// import React, { useState, useEffect } from "react";
// import { Formik, ErrorMessage } from "formik";
// import { ValidateCategoryAdd } from "../../../common/Validation";
// import AddEditWrapper from "../../common/AddEditWrapper";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addCategory } from "../../../redux/features/Category/categoryAction";
// import { clearFields } from "../../../redux/features/Category/categorySlice";
// import Spinner from "../../../Helper/Spinner";
// import Error from "../../../Helper/Error";
// import toast from "react-hot-toast";

// const AddCategory = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState("");
//   const { loading, success } = useSelector((state) => state.category);

//   const handleBack = async () => {
//     dispatch(clearFields());
//     navigate(-1);
//   };
//   useEffect(() => {
//     if (success) {
//       dispatch(clearFields());
//       navigate(-1);
//     }
//   }, [success]);
//   return (
//     <AddEditWrapper
//       title='Category'
//       method='create'
//       handleBack={handleBack}
//       backlink='/category'
//     >
//       <Formik
//         initialValues={{
//           name: "",
//         }}
//         validationSchema={ValidateCategoryAdd}
//         onSubmit={async (values) => {
//           const data = await dispatch(addCategory(values));
//           if (data.error) {
//             setErrors(data.payload);
//             dispatch(clearFields());
//           } else {
//             toast.success(`Category added successfully`);
//           }
//         }}
//       >
//         {(props) => (
//           <form onSubmit={props.handleSubmit} className='bg-transparent'>
//             <h6 className='mt-3 mb-6 text-sm font-bold text-black uppercase'>
//               Category Information
//             </h6>
//             <div className='flex flex-wrap'>
//               <div className='w-full px-4 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label
//                     className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
//                     htmlFor='grid-password'
//                   >
//                     Category Name
//                   </label>
//                   <input
//                     type='text'
//                     className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
//                     name='name'
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     value={props.values.name || ""}
//                   />
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='name' />
//                 </span>
//                 {errors && <Error>{errors}</Error>}
//               </div>
//             </div>
//             <hr className='mt-6 border-b-1 border-blueGray-300' />
//             <div className='w-full px-3 py-3 lg:w-6/12'>
//               <div className='relative w-full mt-3 mb-3'>
//                 {loading ? (
//                   <Spinner />
//                 ) : (
//                   <button
//                     type='submit'
//                     className='px-4 py-2 mr-1 text-xs font-bold text-black uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-orange active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
//                   >
//                     Submit
//                   </button>
//                 )}
//               </div>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </AddEditWrapper>
//   );
// };

// export default AddCategory;


import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { Form, Input, Button, Typography } from "antd";
import { ValidateCategoryAdd } from "../../../common/Validation";
import AddEditWrapper from "../../common/AddEditWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../redux/features/Category/categoryAction";
import { clearFields } from "../../../redux/features/Category/categorySlice";
import Spinner from "../../../Helper/Spinner";
import Error from "../../../Helper/Error";
import toast from "react-hot-toast";

const { Title } = Typography;

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const { loading, success } = useSelector((state) => state.category);

  const handleBack = async () => {
    dispatch(clearFields());
    navigate(-1);
  };

  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      navigate(-1);
    }
  }, [success]);

  return (

    <div style={{ position: "relative" }}>
      <button
        onClick={() => navigate('/category')}
        style={{
          position: 'absolute',
          top: '  23px',
          left: '1470px',
          backgroundColor: '#A15E48',
          color: 'white',
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
        Back To Categories
      </button>
    <AddEditWrapper
      title='Add Category'
      method='create'
      handleBack={handleBack}
      backlink='/category'
    >
      <Formik
        initialValues={{ name: "" }}
        validationSchema={ValidateCategoryAdd}
        onSubmit={async (values) => {
          const data = await dispatch(addCategory(values));
          if (data.error) {
            setErrors(data.payload);
            dispatch(clearFields());
          } else {
            toast.success(`Category added successfully`);
          }
        }}
      >
        {(props) => (
          <Form
            layout='vertical'
            onFinish={props.handleSubmit}
            className='p-4 bg-white rounded-lg shadow-md'
          >
            <Title level={5}>Category Information</Title>

            <Form.Item
              label='Category Name'
              validateStatus={
                props.errors.name && props.touched.name ? "error" : ""
              }
              help={
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 text-xs'
                />
              }
            >
              <Input
                name='name'
                placeholder='Enter category name'
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
            </Form.Item>

            {errors && <Error>{errors}</Error>}

            <Form.Item>
              {loading ? (
                <Spinner />
              ) : (
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{
                    backgroundColor: "#A15E48", // Custom orange
                    borderColor: "#A15E48",
                  }}
                >
                  Submit
                </Button>
              )}
            </Form.Item>
          </Form>
        )}
      </Formik>
    </AddEditWrapper>
    </div>
  );
};

export default AddCategory;
