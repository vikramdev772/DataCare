import React from "react";
import { Menu } from "antd";
import { HomeOutlined, ClusterOutlined, CloudServerOutlined, HddOutlined, DollarOutlined, ProductOutlined, SettingOutlined } from "@ant-design/icons";
import "../styles/Sidebar.css";

const MenuList = ({ darkTheme, onMenuClick }) => {
  return (
    <Menu theme={darkTheme} mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => onMenuClick('/home')}>
        Home
      </Menu.Item>
      <Menu.Item key="serverless" icon={<CloudServerOutlined />} onClick={() => onMenuClick('/pods')}>
        Pods
      </Menu.Item>
      <Menu.Item key="storage" icon={<HddOutlined />} onClick={() => onMenuClick('/storage')}>
        Storage
      </Menu.Item>
      <Menu.Item key="billing" icon={<DollarOutlined />} onClick={() => onMenuClick('/billing')}>
        Billing
      </Menu.Item>     
      <Menu.Item key="usage" icon={<ProductOutlined />} onClick={() => onMenuClick('/usage')}>
        Usage
      </Menu.Item>
      <Menu.Item key="mysettings" icon={<SettingOutlined />} onClick={() => onMenuClick('/mysettings')}>
        My Settings
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
