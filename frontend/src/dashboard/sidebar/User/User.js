// import React, { useState } from "react";
// import UserTable from "../User/UserTable";
// import TableWrapper from "../../common/TableWrapper";
// import Layout from "../../../components/Layout";

// const User = () => {
//   return (
//     <Layout title={"Dashboard User table"}>
//       <div className='flex flex-wrap mt-4'>
//         <div className='w-full px-4 mb-12'>
//           <div className='relative flex flex-col min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg max-w-64'>
//             <div className='px-2 py-2 mb-0 bg-white rounded-t'>
//               <div className='flex flex-wrap items-center'>
//                 <div className='relative flex-1 flex-grow w-full max-w-full px-4'>
//                   <h3 className='py-2 text-lg font-semibold text-orange'>
//                     Total Users
//                   </h3>
//                 </div>
//               </div>
//               <UserTable />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//     /*   <TableWrapper title='User' addlink='/dashboard/'>
//     </TableWrapper> */
//   );
// };

// export default User;

// import React from "react";
// import { Card, Typography, Row, Col } from "antd";
// import UserTable from "../User/UserTable";
// import Layout from "../../../components/Layout";

// const { Title } = Typography;

// const User = () => {
//   return (
//     <Layout title="Dashboard User Table">
//       <div style={{ minHeight: "calc(100vh - 64px)", padding: "16px" }}>
//         <Row justify="center" style={{ height: "100%" }}>
//           <Col span={24}>
//             <Card
//               title={
//                 <Title level={4} style={{ color: "#fa8c16", marginBottom: 0 }}>
//                   Total Users
//                 </Title>
//               }
//               bordered={false}
//               style={{
//                 height: "100%",
//                 overflow: "hidden",
//                 borderRadius: 8,
//               }}
//               bodyStyle={{ padding: "0" }}
//             >
//               <UserTable />
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </Layout>
//   );
// };

// export default User;  perfect

// import React, { useState } from "react";
// import { Card, Typography, Row, Col, Input } from "antd";
// import UserTable from "../User/UserTable";
// import Layout from "../../../components/Layout";

// const { Title } = Typography;
// const { Search } = Input;

// const User = () => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = (value) => {
//     setSearchText(value);
//   };

//   return (
//     <Layout title="Dashboard User Table">
//       <div style={{ minHeight: "calc(100vh - 64px)", padding: "16px" }}>
//         <Row justify="center" style={{ height: "100%" }}>
//           <Col span={24}>
//             <Card
//               title={
//                 <div>
//                   <Title level={4} style={{ color: "#fa8c16", marginBottom: 0 }}>
//                     Total Users
//                   </Title>
//                   <Search
//                     placeholder="Search users..."
//                     onSearch={handleSearch}
//                     onChange={(e) => handleSearch(e.target.value)}
//                     style={{ width: 300, marginTop: 12 }}
//                     allowClear
//                   />
//                 </div>
//               }
//               bordered={false}
//               style={{
//                 height: "100%",
//                 overflow: "hidden",
//                 borderRadius: 8,
//               }}
//               bodyStyle={{ padding: "0" }}
//             >
//               <UserTable searchText={searchText} />
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </Layout>
//   );
// };

// export default User; 71 to here for search option

import React, { useState } from "react";
import { Card, Typography, Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import UserTable from "../User/UserTable";
import Layout from "../../../components/Layout";

const { Title } = Typography;

const User = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Layout title="Dashboard User Table">
      <div style={{ minHeight: "calc(100vh - 64px)", padding: "24px" }}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
          <Col>
            <Title level={3} style={{ color: "black", margin: 0 }}>
              User Management
              
            </Title>
          </Col>
          <Col>
            <Input
              placeholder="Search users..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                width: 250,
                borderRadius: 8,
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",
              }}
              allowClear
            />
          </Col>
        </Row>

        <Card
          bordered={false}
          style={{
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <UserTable searchText={searchText} />
        </Card>
      </div>
    </Layout>
  );
};

export default User;


