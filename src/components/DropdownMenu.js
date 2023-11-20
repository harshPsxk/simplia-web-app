import React from 'react';
import { Dropdown, Menu } from 'antd';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { VscEmptyWindow } from "react-icons/vsc";
import { IoIosRefresh } from "react-icons/io";
import { MenuOutlined } from '@ant-design/icons'; // Add this import

const DropdownMenu = () => {
  const renderMenu = (
    <Menu className='mt-2'>
      <Menu.Item key="1" icon={<IoHomeOutline />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<CiUser />}>
        Login / Signup
      </Menu.Item>
      <Menu.Item key="3" icon={<VscEmptyWindow />}>
        Window Mode
      </Menu.Item>
      <Menu.Item key="4" icon={<IoIosRefresh />}>
        Hard Refresh
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={renderMenu} trigger={['click']}>
      <span className="text-customRed mt-2">
        <MenuOutlined />
      </span>
    </Dropdown>
  );
};

export default DropdownMenu;
