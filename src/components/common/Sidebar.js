import React from 'react';
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="shopping-cart" /><span>Buy hashrate</span></span>}
            >
              <Menu.Item key="1">SHA-256</Menu.Item>
              <Menu.Item key="2">Scrypt</Menu.Item>
              <Menu.Item key="3">ETHASH</Menu.Item>
              <Menu.Item key="4">EQUIHASH</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Icon type="pie-chart" />
              <span>Balance</span>
              <Link to="/dashboard/balance" />
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default Sidebar;
