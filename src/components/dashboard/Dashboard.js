import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
import Sidebar from "../common/Sidebar";

class Dashboard extends React.Component {
  render() {
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Dashboard
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Cloud mining ©2018 Created by Fransisco
            </Footer>
          </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
