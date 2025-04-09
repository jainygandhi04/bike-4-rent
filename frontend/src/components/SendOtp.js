// import React, { useState } from "react";
// import { Card, Form, Input, Button, message, Typography } from "antd";
// import { MailOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const { Title, Text } = Typography;

// const SendOtp = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const res = await axios.post("/api/v1/auth/send-otp", values);
//       if (res.data.success) {
//         message.success("OTP sent successfully!");
//         navigate("/Home"); // ✅ redirect on success
//       } else {
//         message.error(res.data.message || "Failed to send OTP");
//       }
//     } catch (error) {
//       message.error("Something went wrong while sending OTP!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card
//         bordered={false}
//         style={{
//           width: 400,
//           boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//           borderRadius: "16px",
//         }}
//       >
//         <Title level={3} className="text-center">
//           Send OTP
//         </Title>
//         <Text type="secondary" className="text-center block mb-6">
//           Enter your registered email address to receive an OTP
//         </Text>

//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[
//               { required: true, message: "Please enter your email!" },
//               { type: "email", message: "Please enter a valid email!" },
//             ]}
//           >
//             <Input
//               prefix={<MailOutlined />}
//               placeholder="you@example.com"
//               size="large"
//             />
//           </Form.Item>

//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               block
//               size="large"
//               loading={loading}
//             >
//               Send OTP
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default SendOtp;



import React, { useState } from "react";
import { Card, Form, Input, Button, message, Typography } from "antd";
import { MailOutlined, LockOutlined, NumberOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ Add this import at the top


const { Title, Text } = Typography;



const SendOtp = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1); // 1: send OTP, 2: verify OTP, 3: reset password
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ⬅️ Initialize navigation

  const handleSendOtp = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/auth/send-otp", { email: values.email });
      if (res.data.success) {
        message.success("OTP sent successfully!");
        setEmail(values.email);
        setStep(2);
      } else {
        message.error(res.data.message || "Failed to send OTP");
      }
    } catch (error) {
      message.error("Something went wrong while sending OTP!");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/auth/verify-otp", {
        email,
        otp: values.otp,
      });
      if (res.data.success) {
        message.success("OTP verified!");
        setStep(3);
      } else {
        message.error(res.data.message || "Invalid OTP");
      }
    } catch (error) {
      message.error("Something went wrong while verifying OTP!");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (values) => {
    if (values.password !== values.confirmPassword) {
      return message.error("Passwords do not match!");
      }
      

    setLoading(true);
    try {
      const res = await axios.post("/api/v1/auth/reset-Password", {
        newPassword: values.password,
        email: email
      });
      if (res.data.success) {
        message.success("Password reset successfully!");
        setStep(1);
        form.resetFields();
        
          navigate("/"); // 🔁 Redirect to Login page (adjust the path if needed)
        
        
      } else {
        message.error(res.data.message || "Failed to reset password");
      }
    } catch (error) {
       console.log(error);
      message.error("Something went wrong while resetting password!");
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    if (step === 1) {
      return (
        <Form layout="vertical" onFinish={handleSendOtp}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="you@example.com" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading} style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", color: "#fff" }}>
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      );
    } else if (step === 2) {
      return (
        <Form layout="vertical" onFinish={handleVerifyOtp}>
          <Form.Item
            name="otp"
            label="Enter OTP"
            rules={[{ required: true, message: "Please enter the OTP sent to your email!" }]}
          >
            <Input prefix={<NumberOutlined />} placeholder="Enter OTP" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading} style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", color: "#fff" }}>
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      );
    } else if (step === 3) {
      return (
        <Form layout="vertical" onFinish={handleResetPassword}>
          <Form.Item
            name="password"
            label="New Password"
            rules={[{ required: true, message: "Please enter a new password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="New password" size="large" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Confirm password" size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading} style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", color: "#fff" }}> 
              Reset Password
              
            </Button>
          </Form.Item>
        </Form>
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        bordered={false}
        style={{
          width: 420,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          borderRadius: "16px",
        }}
      >
        <Title level={3} className="text-center mb-2">
          {step === 1 && "Send OTP"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Reset Password"}
        </Title>
        <Text type="secondary" className="text-center block mb-6">
          {step === 1 &&
            "Enter your registered email address to receive an OTP"}
          {step === 2 &&
            "Enter the OTP sent to your email to verify your identity"}
          {step === 3 &&
            "Enter and confirm your new password to reset"}
        </Text>
        {renderForm()}
      </Card>
    </div>
  );
};

export default SendOtp;
