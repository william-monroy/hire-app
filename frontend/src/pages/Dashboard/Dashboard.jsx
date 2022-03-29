import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Users from "./Users";
import Videos from "./Videos";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <div className="Dashboard">
      <Layout style={{ minHeight: "100vh" }}>
        {/* <BrowserRouter> */}
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <div
                className="logo__vabar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {collapsed ? (
                  <img
                    src="\assets\tec-w-i.png"
                    alt="tec de moterrey"
                    width="40"
                  />
                ) : (
                  <img
                    src="\assets\tec-w.png"
                    alt="tec de moterrey"
                    width="150"
                  />
                )}
              </div>
              <Link to="/dashboard/users">
                <Menu.Item key="1" icon={<UserOutlined />}>
                  Usuarios
                </Menu.Item>
              </Link>
              <Link to="/dashboard/videos">
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  Videos
                </Menu.Item>
              </Link>
              <Link to="/dashboard/profile">
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  Perfil
                </Menu.Item>
              </Link>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {collapsed ? (
                <MenuUnfoldOutlined className="trigger" onClick={toggle} />
              ) : (
                <MenuFoldOutlined className="trigger" onClick={toggle} />
              )}
            </Header>
            <Routes>
              <Route path="/dashboard/users" element={<Users/>}></Route>
              <Route path="/dashboard/videos" element={<Videos/>}></Route>
            </Routes>
            {/* <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content> */}
          </Layout>
        {/* </BrowserRouter> */}
      </Layout>
    </div>
  );
};

export default Dashboard;
