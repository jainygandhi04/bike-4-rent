import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Button, Typography, Radio, message } from "antd";

const { Title, Paragraph } = Typography;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handlePayment = () => {
    message.success("Payment Successful! ");
    navigate("/"); // Redirect to homepage or order confirmation page
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
        title={<Title level={3} style={{ textAlign: "center" }}>Payment</Title>}
        bordered={false}
        style={{
          maxWidth: 500,
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: 10,
          padding: 24,
        }}
      >
        <Paragraph style={{ textAlign: "center", fontSize: "16px" }}>
          Total Amount: <strong>₹1500</strong>
        </Paragraph>

        <Radio.Group
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <Radio value="credit_card">Credit/Debit Card</Radio>
          <Radio value="upi">UPI</Radio>
          <Radio value="net_banking">Net Banking</Radio>
        </Radio.Group>

        <Button
          type="primary"
          block
          onClick={handlePayment}
          style={{ backgroundColor: "#52c41a", color: "white", fontWeight: "bold" }}
        >
          Pay Now
        </Button>
      </Card>
    </div>
  );
};

export default Payment;
