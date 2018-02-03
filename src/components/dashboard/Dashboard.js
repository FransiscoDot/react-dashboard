import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
import Sidebar from "../common/Sidebar";
import HeaderGlobal from "../common/HeaderGlobal";

class Dashboard extends React.Component {
  render() {
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
            <HeaderGlobal />
            <Content style={{ margin: '10px 16px' }}>
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
