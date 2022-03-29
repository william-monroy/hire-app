import { Layout } from "antd";
import React from "react";
import "./users.css";

const { Content } = Layout;

const Users = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      Users
    </Content>
  );
};

export default Users;
