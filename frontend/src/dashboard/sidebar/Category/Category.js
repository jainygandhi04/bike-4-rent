// import React from "react";
// import TableWrapper from "../../common/TableWrapper";
// import CategoryTable from "./CategoryTable";

// const Category = () => {
//   return (
//     <TableWrapper
//       title='Total Category'
//       addlink='/category/add'
//       addTitle='Add Category' a
//       layouttitle='Dashboard Category table'
//     >
//       <CategoryTable />
//     </TableWrapper>
//   );
// };

// export default Category;
import React from "react";
import { Card, Typography, Button, Breadcrumb } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CategoryTable from "./CategoryTable";

const { Title } = Typography;

const Category = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "24px" }}>
      <Breadcrumb style={{ marginBottom: "16px" }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Category</Breadcrumb.Item>
      </Breadcrumb>

      <Card
        title={<Title level={4}>Total Categories</Title>}
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/category/add")}
            style={{ backgroundColor: "#A15E48", borderColor: "#A15E48" }}
          >
            Add Category
          </Button>
        }
        bordered={false}
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
      >
        <CategoryTable />
      </Card>
    </div>
  );
};

export default Category;


