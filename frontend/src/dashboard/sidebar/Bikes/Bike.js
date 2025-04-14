import React, { useState } from "react";
import TableWrapper from "../../common/TableWrapper";
import BikeTable from "./BikeTable";

const Bike = () => {
  return (
    <TableWrapper
      title='Total Bikes'
      addlink='/bikes/add'
      addTitle='Add Bike'
      layouttitle='Dashboard Bike table'
      tyle={{ 
        backgroundColor: '#A15E48 !important', // Force override
        color: 'white !important'
      }}

    >
      <BikeTable />
    </TableWrapper>
  );
};

export default Bike; //it was good

// import React from "react";
// import { Card, Typography, Button, Row, Col } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import BikeTable from "./BikeTable";

// const { Title } = Typography;

// const Bike = () => {
//   const navigate = useNavigate();

//   return (
//     <Card bordered={false} style={{ margin: "24px" }}>
//       <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
//         <Col>
//           <Title level={3} style={{ margin: 0 }}>
//             Total Bikes
//           </Title>
//         </Col>
//         <Col>
//           <Button
//             type="primary"
//             icon={<PlusOutlined />}
//             onClick={() => navigate("/bikes/add")}
//             style={{
//               backgroundColor: "#1677ff",
//               borderColor: "#1677ff",
//               color: "#fff",
//             }}
//           >
//             Add Bike
//           </Button>

//         </Col>
//       </Row>

//       <BikeTable />
//     </Card>
//   );
// };

// export default Bike;
