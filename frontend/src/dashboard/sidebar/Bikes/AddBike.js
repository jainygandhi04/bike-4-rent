// import React, { useState, useEffect } from "react";
// import { Formik, ErrorMessage } from "formik";
// import { ValidateBikeAdd } from "../../../common/Validation";
// import AddEditWrapper from "../../common/AddEditWrapper";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addBike } from "../../../redux/features/Bikes/bikeAction";
// import { clearFields } from "../../../redux/features/Bikes/bikeSlice";
// import { CategoryAll } from "../../../redux/features/Category/categoryAction";
// import Spinner from "../../../Helper/Spinner";
// import toast from "react-hot-toast";
// import Error from "../../../Helper/Error";

// const AddBike = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState();
//   const [errors, setErrors] = useState("");

//   useEffect(() => {
//     dispatch(CategoryAll());
//   }, []);

//   const { categories } = useSelector((state) => state.category);

//   const onImageChange = (event, setFieldValue) => {
//     setFieldValue("photo", event.target.files[0]);
//     setSelectedImage(URL.createObjectURL(event.target.files[0]));
//   };

//   const { loading, success } = useSelector((state) => state.bike);
//   useEffect(() => {
//     if (success) {
//       toast.success(`Bike added successfully`);
//       dispatch(clearFields());
//       navigate(-1);
//     }
//   }, [success]);

//   const handleBack = async () => {
//     navigate(-1);
//   };

//   return (
//     <AddEditWrapper
//       title='Bikes'
//       method='create'
//       handleBack={handleBack}
//       backlink='/bikes'
//     >
//       <Formik
//         initialValues={{
//           name: "",
//           number: "",
//           price: "",
//           description: "",
//           category: "",
//           photo: null,
//         }}
//         validationSchema={ValidateBikeAdd}
//         onSubmit={async (values) => {
//           let formdata = new FormData();
//           formdata.append("name", values.name);
//           formdata.append("number", values.number);
//           formdata.append("photo", values.photo);
//           formdata.append("category", values.category);
//           formdata.append("description", values.description);
//           formdata.append("price", parseInt(values.price));
//           const data = await dispatch(addBike(formdata));
//           if (data.error) {
//             setErrors(data.payload);
//             dispatch(clearFields());
//           }
//         }}
//       >
//         {(props) => (
//           <form onSubmit={props.handleSubmit} className='bg-transparent'>
//             <h6 className='mt-3 mb-6 text-sm font-bold text-black uppercase'>
//               Bike Information
//             </h6>
//             <div className='flex flex-wrap'>
//               <div className='w-full px-4 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Bike Name
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
//               </div>
//               <div className='w-full px-4 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Bike Number
//                   </label>
//                   <input
//                     type='text'
//                     className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
//                     name='number'
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     value={props.values.number || ""}
//                   />
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='number' />
//                 </span>
//               </div>
//               <div className='w-full px-4 mt-4 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Price Per Day
//                   </label>
//                   <input
//                     type='string'
//                     className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
//                     name='price'
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     value={props.values.price || ""}
//                   />
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='price' />
//                 </span>
//               </div>

//               <div className='w-full px-3 py-3 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Category
//                   </label>
//                   <select
//                     className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
//                     name='category'
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     value={props.values.category}
//                     autoComplete='off'
//                   >
//                     <option value=''>Select</option>
//                     {categories.length !== 0 &&
//                       categories.map((item, i) => {
//                         return (
//                           <>
//                             <option value={item._id}>{item.name}</option>
//                           </>
//                         );
//                       })}
//                   </select>
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='category' />
//                 </span>
//               </div>
//               <div className='w-full px-3 py-3 lg:w-3/12'>
//                 <div className='relative w-full mb-3 '>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Image
//                   </label>
//                   <input
//                     type='file'
//                     accept='image/*'
//                     name='photo'
//                     className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
//                     onChange={(event) =>
//                       onImageChange(event, props.setFieldValue)
//                     }
//                     onBlur={props.handleBlur}
//                     autoComplete='off'
//                   />
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='photo' />
//                 </span>
//               </div>
//               <div className='px-4 lg:w-3/12'>
//                 {selectedImage && (
//                   <div className='relative mt-4 '>
//                     <img
//                       src={selectedImage}
//                       className='object-cover'
//                       alt='bike-image'
//                       height={150}
//                       width={150}
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className='w-full px-4 mt-4 lg:w-6/12'>
//                 <div className='relative w-full mb-3'>
//                   <label className='block mb-2 text-xs font-bold uppercase text-blueGray-600'>
//                     Description
//                   </label>
//                   <textarea
//                     className='w-full px-3 py-2 text-sm transition-all duration-150 ease-linear bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300'
//                     name='description'
//                     onChange={props.handleChange}
//                     onBlur={props.handleBlur}
//                     value={props.values.description || ""}
//                     cols={5}
//                     rows={5}
//                   ></textarea>
//                 </div>
//                 <span className='text-red-500 error'>
//                   <ErrorMessage name='description' />
//                 </span>
//               </div>
//             </div>
//             {errors && <Error>{errors}</Error>}
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
//                     Add bike
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

// export default AddBike;


import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  message,
  Card,
  Spin,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addBike } from "../../../redux/features/Bikes/bikeAction";
import { CategoryAll } from "../../../redux/features/Category/categoryAction";
import { clearFields } from "../../../redux/features/Bikes/bikeSlice";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddBike = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);

  const { categories } = useSelector((state) => state.category);
  const { loading, success } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(CategoryAll());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      message.success("Bike added successfully!");
      dispatch(clearFields());
      navigate("/bikes");
    }
  }, [success, dispatch, navigate]);

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Only image files are allowed!");
    } else {
      setImageFile(file);
    }
    return false;
  };

  const onFinish = async (values) => {
    if (!imageFile) {
      message.error("Please upload a bike image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("number", values.number);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("startType", values.startType);
    formData.append("year", values.year);
    formData.append("kilometers", values.kilometers);
    formData.append("petrolCapacity", values.petrolCapacity);
    formData.append("photo", imageFile);
    console.log('314:',formData);
    dispatch(addBike(formData));
  };

  return (
    <Card
      title="Add New Bike"
      className="max-w-4xl mx-auto my-10 shadow-xl rounded-2xl p-4"
    >
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Bike Name"
          name="name"
          rules={[{ required: true, message: "Please input bike name!" }]}
        >
          <Input placeholder="e.g., Yamaha FZ" />
        </Form.Item>

        <Form.Item
          label="Bike Number"
          name="number"
          rules={[
            { required: true, message: "Please input bike number!" },
            {
              pattern: /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/,
              message: "Enter valid Indian number plate (e.g., GJ01AB1234)",
            },
          ]}
        >
          <Input placeholder="e.g., GJ01AB1234" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select Category">
            {categories.map((cat) => (
              <Option key={cat._id} value={cat._id}>
                {cat.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Price Per Day (₹)"
          name="price"
          rules={[{ required: true, message: "Please enter rental price" }]}
        >
          <InputNumber min={100} max={10000} className="w-full" />
        </Form.Item>

        <Form.Item
          label="Start Type"
          name="startType"
          rules={[{ required: true, message: "Please select start type!" }]}
        >
          <Select placeholder="Select Start Type">
            <Option value="Kick">Kick</Option>
            <Option value="Self">Self</Option>
            <Option value="Both">Both</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Year of Manufacture"
          name="year"
          rules={[
            { required: true, message: "Please enter year of manufacture!" },
            {
              pattern: /^(19|20)\d{2}$/,
              message: "Enter a valid year (e.g., 2020)",
            },
          ]}
        >
          <Input placeholder="e.g., 2020" />
        </Form.Item>

        <Form.Item
          label="Kilometers Used"
          name="kilometers"
          rules={[{ required: true, message: "Please enter kilometers used" }]}
        >
          <InputNumber min={0} className="w-full" placeholder="e.g., 15000" />
        </Form.Item>

        <Form.Item
          label="Petrol Capacity (in Litres)"
          name="petrolCapacity"
          rules={[{ required: true, message: "Please enter petrol capacity" }]}
        >
          <InputNumber className="w-full" placeholder="e.g., 12" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea rows={4} placeholder="e.g., Well maintained, good mileage." />
        </Form.Item>

        <Form.Item
          label="Upload Bike Photo"
          name="photo"
          rules={[{ required: true, message: "Please upload a bike image!" }]}
        >
          <Upload beforeUpload={beforeUpload} listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ backgroundColor: "#fa8c16", borderColor: "#fa8c16" }}
          >
            {loading ? <Spin size="small" /> : "Add Bike"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddBike;
