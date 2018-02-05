import React from 'react';
import AvatarList from 'ant-design-pro/lib/AvatarList';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;

const iconStyle = {
  paddingRight: 10
};

const menuItemStyle = {
  paddingLeft: 10,
  paddingRight: 10,
  alignText: "end"
};

const menu = (
  <Menu>
    <Menu.Item style={menuItemStyle}>
      <a target="_blank" rel="noopener noreferrer" href=""><Icon type="user" style={iconStyle} />  Profile</a>
    </Menu.Item>
    <Menu.Item style={menuItemStyle}>
      <a target="_blank" rel="noopener noreferrer" href=""><Icon type="question-circle-o" style={iconStyle} /> Support</a>
    </Menu.Item>
    <Menu.Item style={menuItemStyle}>
      <a target="_blank" rel="noopener noreferrer" href=""><Icon type="book" style={iconStyle} />FAQ</a>
    </Menu.Item>
    <hr style={{margin: 0}}/>
    <Menu.Item style={menuItemStyle}>
      <a target="_blank" rel="noopener noreferrer" href=""><Icon type="anticon anticon-logout" style={iconStyle} /> Logout</a>
    </Menu.Item>
  </Menu>
);

class HeaderGlobal extends React.Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0, height: "min-content" }}>
        <div style={{float: "right", marginRight: 20}}>
          <AvatarList size="large" style={{height: 0}}>
            <AvatarList.Item src="https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png" />
          </AvatarList>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#" style={{marginTop: -9, paddingRight: 10, paddingLeft: 10, height: 50}}>
              Francisco Dot <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export default HeaderGlobal;
