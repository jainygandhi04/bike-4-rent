/* global Razorpay */
import React, { useState } from "react";
import {useLocation } from "react-router-dom";
import {
  Button,
  Checkbox,
  Upload,
  message,
  Card,
  Typography,
  Divider,
  Row,
  Col,
} from "antd";
import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";
import axios from 'axios';
const { Title, Paragraph } = Typography;

const Terms = () => {
 // const navigate = useNavigate();
  const location = useLocation();
  const [agreed, setAgreed] = useState(false);
  const [fileList, setFileList] = useState([]);
  const price = location.state?.totalAmount || 100;
  const orderId = localStorage.getItem("orderId");

  // Handle file upload
  const handleFileChange = ({ fileList }) => setFileList(fileList);

  // Handle form submission
  const checkoutHandler = async (amount, orderId) => {
    try {
      const { data: keyData } = await axios.get("/api/v1/getKey");
      const { key } = keyData;
  
      const { data: orderData } = await axios.post("/api/v1/payment/process", {
        amount: amount,
      });
  
      const { order } = orderData;
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Bike4Rent",
        description: "Rental Payment",
        order_id: order.id,
        handler: async function (response) {
          // ✅ Razorpay payment successful
          await axios.put(`/api/v1/order/update-status/${orderId}`, {
            status: "Delivered",
            paymentId: response.razorpay_payment_id,
          });
  
          window.location.href = `/payment-success?paymentId=${response.razorpay_payment_id}`;
        },
        modal: {
          ondismiss: async function () {
            // ❌ Payment closed or failed
            await axios.put(`/api/v1/order/update-status/${orderId}`, {
              status: "Not Delivered",
              paymentId: "",
            });
  
            message.warning("Payment was cancelled.");
          },
        },
        prefill: {
          name: "Mannan Agrawal",
          email: "mannanagrawal17@gmail.com",
          contact: "9979934238",
        },
        theme: {
          color: "#F37254",
        },
      };
  
      const razor = new Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("❌ Error during payment setup:", err.response || err);
      message.error("Something went wrong. Please try again.");
    }
  };
  
  
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Card
        title={
          <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
            Terms and Conditions
          </Title>
        }
        bordered={false}
        style={{
          maxWidth: 1000, 
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 10,
          padding: 24,
        }}
      >
        <Typography>
          <Paragraph
            style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}
          >
            Welcome to <strong>Bike4Rent Udaipur</strong>. Please read our terms before proceeding.
          </Paragraph>

          <Divider />

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title level={4}>1. Rental Agreement</Title>
              <Paragraph>
                - Minimum age: <strong>18 years</strong> with a valid driving license. <br />
                - Bike must be returned in the same condition as received. <br />
                - Rental period must be followed; extension requires approval.
              </Paragraph>
            </Col>

            <Col span={24}>
              <Title level={4}>2. Liability</Title>
              <Paragraph>
                - Renter is responsible for <strong>damages, fines, and accidents</strong>. <br />
                - Company is <strong>not liable</strong> for personal injuries during the rental period.
              </Paragraph>
            </Col>

            <Col span={24}>
              <Title level={4}>3. Payment & Refund Policy</Title>
              <Paragraph>
                - Full payment is required before taking the bike. <br />
                <strong>Cancellation Policy:</strong> <br />
                - <strong>No refund</strong> will be provided once the order is placed.
              </Paragraph>
            </Col>

            <Col span={24}>
              <Title level={4}>4. Driving License Requirement</Title>
              <Paragraph>
                - You must upload a valid government-issued <strong>driving license</strong> before proceeding.
              </Paragraph>

              <Upload
                fileList={fileList}
                onChange={handleFileChange}
                beforeUpload={() => false} 
                maxCount={1}
                accept=".jpg,.png,.pdf"
              >
                <Button
                  icon={<UploadOutlined />}
                  block
                  style={{
                    backgroundColor: "#1890ff",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Upload Driving License
                </Button>
              </Upload>
            </Col>

            <Col span={24}>
              <Checkbox
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ fontSize: "14px", marginTop: "10px" }}
              >
                I agree to the terms and conditions
              </Checkbox>
            </Col>

            <Col span={24}>
              <Button
                type="primary"
                block
                icon={<CheckCircleOutlined />}
                size="large"
                className="mt-4"
                onClick={()=>checkoutHandler(price)}
                disabled={!agreed || fileList.length === 0}
                style={{
                  backgroundColor: agreed && fileList.length > 0 ? "#52c41a" : "#d9d9d9",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Proceed to Payment({price})
              </Button>
            </Col>
          </Row>
        </Typography>
      </Card>
    </div>
  );
};
export default Terms;
