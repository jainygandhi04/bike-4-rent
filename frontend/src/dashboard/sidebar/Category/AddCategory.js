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
import { addCategory, CategoryAll } from "../../../redux/features/Category/categoryAction";
import { clearFields } from "../../../redux/features/Bikes/bikeSlice";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddCategory = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);

 
  const { loading, success } = useSelector((state) => state.category);

 
  useEffect(() => {
    if (success) {
      message.success("Category added successfully!");
      dispatch(clearFields());
      navigate("/category");
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
      message.error("Please upload a category image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("photo", imageFile);
   
    
    dispatch(addCategory(formData));
  };

  return (
    <div >
    
    <Card
      title="Add New Category"
      className="max-w-4xl mx-auto my-10 shadow-xl rounded-2xl p-4"
    >
        <button
        onClick={() => navigate('/category')}
        style={{
          position: 'absolute',
          top: '15px',
          left: '700px',
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

      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Please input category name!" }]}
        >
          <Input placeholder="e.g., Sccoter" />
        </Form.Item>

       
        <Form.Item
          label="Upload Category Photo"
          name="photo"
          rules={[{ required: true, message: "Please upload a category image!" }]}
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
            style={{ backgroundColor: "#A15E48", borderColor: "#A15E48" }}
          >
            {loading ? <Spin size="small" /> : "Add Category"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  );
};

export default AddCategory;
