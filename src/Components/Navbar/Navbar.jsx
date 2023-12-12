import React, { useState } from 'react';
import "./Navbar.css"

import {
  
  UserOutlined,
  HomeOutlined,
  LaptopOutlined,
  MoreOutlined,
  FileProtectOutlined,
  MailOutlined,
  ForwardOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Home', '1',<HomeOutlined style={{fontSize:20,color:"white"}}/>),
  getItem('About Me', '2', <UserOutlined style={{fontSize:20,color:"white"}}/>),
  getItem('My Projects', '3', <FileProtectOutlined style={{fontSize:20,color:"white"}}/>),
  getItem('Contact Me', '4', <MailOutlined style={{fontSize:20,color:"white"}}/>),
];
const App = () => {
  const [isHidden,setIsHidden]=useState(true);
  // const [collapsed, setCollapsed] = useState(false);


  const scrollToSection = (id) => {
    if(id===2)
    {
      const element = document.getElementById("section-1");
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else if(id===3)
    {
      const element = document.getElementById("section-2");
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else if(id===4)
    {
      const element = document.getElementById("section-3");
      element.scrollIntoView({ behavior: 'smooth' });
    }  
  };

  const toggleCollapsed = (e) => {
    scrollToSection(e.key);
    setIsHidden(!isHidden)
    // setCollapsed(!collapsed);
  };
  return (
    <div
    className='floating-component'
      style={{
        width: 250,
      }}
    >
      <Button
        type="text"
        onClick={toggleCollapsed}
        className='button-component'
        size="large"
        style={{
          marginBottom: 16,
          marginRight:125,
          marginTop:10
        }}
      >
      {<ForwardOutlined className='custom-icon'/> }
      </Button>
      <Menu
        hidden={isHidden}
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        style={{ height:400 }}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
        onClick={(e)=>toggleCollapsed(e)}
      />
    </div>
  );
};
export default App;