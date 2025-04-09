// import React, { useState } from "react";
// import { Form, Input, Rate, Button, Card, Typography, message } from "antd";
// import axios from "axios";

// const { Title } = Typography;

// const AddReviewForm = () => {
//   const [form] = Form.useForm();
//   const [submitting, setSubmitting] = useState(false);

//   const onFinish = async (values) => {
//     setSubmitting(true);
//     try {
//       await axios.post("/api/v1/review/add", values);
//       message.success("Review submitted successfully!");
//       form.resetFields();
//     } catch (error) {
//       message.error("Failed to submit review. Try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="review-form-container" style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
//       <Card
//         title={<Title level={3} style={{ marginBottom: 0 }}>Write a Review</Title>}
//         bordered
//         style={{ width: "100%", maxWidth: 500, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={onFinish}
//           style={{ padding: "10px" }}
//         >
//           <Form.Item
//             label="Your Name"
//             name="name"
//             rules={[{ required: true, message: "Please enter your name" }]}
//           >
//             <Input placeholder="Enter your name" />
//           </Form.Item>

//           <Form.Item
//             label="Review"
//             name="message"
//             rules={[{ required: true, message: "Please enter your review" }]}
//           >
//             <Input.TextArea rows={4} placeholder="Share your experience..." />
//           </Form.Item>

//           <Form.Item
//             label="Rating"
//             name="rating"
//             rules={[{ required: true, message: "Please give a rating" }]}
           
//           >
//             <Rate />
//           </Form.Item>

//           <Form.Item>
//             <Button                      
//               type="primary"
//               htmlType="submit"
//               loading={submitting}
//               block
//               style={{ borderRadius: "8px", backgroundColor:"orange"
//                }}
//             >
//               Submit Review
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default AddReviewForm; perfect code 

import React, { useState } from "react";
import {
  Form,
  Input,
  Rate,
  Button,
  Card,
  Typography,
  message,
} from "antd";
import axios from "axios";

const { Title } = Typography;

const AddReviewForm = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await axios.post("/api/v1/review/add", values);
      message.success("Review submitted successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to submit review. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="review-form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <Card
        title={<Title level={3} style={{ marginBottom: 0 }}>Write a Review</Title>}
        bordered
        style={{
          width: "100%",
          maxWidth: 500,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          style={{ padding: "10px" }}
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[
              { required: true, message: "Please enter your name" },
              {
                pattern: /^[A-Za-z\s]{2,40}$/,
                message: "Name should be 2-40 letters only, no numbers or special characters.",
              },
            ]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Review"
            name="message"
            rules={[{ required: true, message: "Please enter your review" }]}
          >
            <Input.TextArea rows={4} placeholder="Share your experience..." />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please give a rating" }]}
          >
            <Rate
              style={{
                fontSize: 24,
                color: "#fa8c16", // Selected star color (orange)
                '--antd-rate-star-color': '#ffcc80', // Light orange for unselected (custom fallback)
              }}
              className="custom-rate"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              block
              style={{
                borderRadius: "8px",
                backgroundColor: "orange",
                borderColor: "orange",
              }}
            >
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Inline styling override for stars (apply globally or locally with class) */}
      <style>
        {`
          .custom-rate .ant-rate-star {
            color: #ffcc80 !important; /* Unselected star color */
          }
          .custom-rate .ant-rate-star-full {
            color: #fa8c16 !important; /* Selected star color */
          }
        `}
      </style>
    </div>
  );
};

export default AddReviewForm;
