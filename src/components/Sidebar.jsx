import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "./Logo";
import "../styles/Sidebar.css";
import MenuList from "./MenuList";
import ToggleTheme from "./ToggleTheme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Pods from "../pages/Pods";
import Storage from "../pages/Storage";
import Usage from "../pages/Usage";
import Mysettings from "../pages/Mysettings";
import Deploypod from "../pages/Deploypod"; 

const { Sider, Content } = Layout;

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState("/home");
  const [showDeployPod, setShowDeployPod] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (path) => {
    setCurrentPath(path);
    setShowDeployPod(false); // Reset to ensure Pods is displayed when navigating
  };

  const handleDeployClick = () => {
    setShowDeployPod(true);
  };

  const renderComponent = () => {
    if (showDeployPod) {
      return <Deploypod />;
    }
    switch (currentPath) {
      case "/home":
        return <Home />;
      case "/pods":
        return <Pods onDeployClick={handleDeployClick} />;
      case "/storage":
        return <Storage />;
      case "/billing":
        return <Billing />;
      case "/usage":
        return <Usage />;
      case "/mysettings":
        return <Mysettings />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo darkTheme={darkTheme} />
        <MenuList
          darkTheme={darkTheme ? "dark" : "light"}
          onMenuClick={handleMenuClick}
        />
        <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Content
          style={{
            padding: "0 24px",
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {renderComponent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
