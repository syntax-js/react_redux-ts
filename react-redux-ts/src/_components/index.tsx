import React, { useState } from "react";
import "../App.css";
import { Layout, Menu, Badge } from "antd";
import TaskForm from "./TaskForm";

const { Header, Content, Footer, Sider } = Layout;

const HomePage = () => {
  const [collapse, setCollapse]: any = useState(false);

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapse(collapsed);
  };
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">
            <Badge
              count={5}
              offset={[14, 0]}
              style={{ backgroundColor: "#2db7f5" }}
            >
              Tasks
            </Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ minHeight: "90vh" }}>
        <Content>
          <TaskForm />
        </Content>
      </Layout>
      <Footer
        style={{ textAlign: "center", background: "white", margin: "0 2px" }}
      >
        © All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default HomePage;
